#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDirectory, '..');
const registryPath = join(repoRoot, 'audits', 'external-proof-registry.json');
const verifyPath = join(repoRoot, 'verify.html');
const argumentsSet = new Set(process.argv.slice(2));

if (argumentsSet.has('--help')) {
  console.log(`Usage: node scripts/check-external-proof.mjs [--live] [--strict] [--json]

Checks the private TMN external-proof registry against verify.html.

  --live    Make one lightweight HTTP reachability request per registered public source
  --strict  Exit non-zero when validation errors, missing public links, or stale evidence exist
  --json    Print machine-readable results`);
  process.exit(0);
}

const live = argumentsSet.has('--live');
const strict = argumentsSet.has('--strict');
const asJson = argumentsSet.has('--json');
const errors = [];
const warnings = [];

function parseIsoDate(value, label) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    errors.push(`${label} must use YYYY-MM-DD.`);
    return null;
  }

  const timestamp = Date.parse(`${value}T00:00:00Z`);
  if (Number.isNaN(timestamp)) {
    errors.push(`${label} is not a valid calendar date.`);
    return null;
  }

  return timestamp;
}

function ageInDays(timestamp) {
  return Math.floor((Date.now() - timestamp) / 86_400_000);
}

function assertUrl(value, label) {
  try {
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Unsupported protocol');
    return url;
  } catch {
    errors.push(`${label} must be an absolute HTTP(S) URL.`);
    return null;
  }
}

function countBy(items, property) {
  return items.reduce((counts, item) => {
    const key = item[property] || 'unassigned';
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

async function mapWithConcurrency(items, limit, callback) {
  const results = new Array(items.length);
  let cursor = 0;

  async function worker() {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await callback(items[index]);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

async function checkReachability(item) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);

  try {
    const response = await fetch(item.publicUrl, {
      headers: {
        'user-agent': 'TMN Creative proof monitor/1.0 (+https://tmncreative.com/verify)',
        accept: 'text/html,application/xhtml+xml'
      },
      redirect: 'follow',
      signal: controller.signal
    });
    await response.body?.cancel();

    const kind = response.status >= 200 && response.status < 400
      ? 'reachable'
      : [401, 403, 429, 999].includes(response.status)
        ? 'protected'
        : 'attention';

    return {
      id: item.id,
      status: response.status,
      finalUrl: response.url,
      result: kind
    };
  } catch (error) {
    return {
      id: item.id,
      status: null,
      finalUrl: null,
      result: 'attention',
      error: error.name === 'AbortError' ? 'timed out' : error.message
    };
  } finally {
    clearTimeout(timeout);
  }
}

let registry;
let verifyHtml;

try {
  [registry, verifyHtml] = await Promise.all([
    readFile(registryPath, 'utf8').then(JSON.parse),
    readFile(verifyPath, 'utf8')
  ]);
} catch (error) {
  console.error(`Unable to read proof-engine files: ${error.message}`);
  process.exit(1);
}

if (registry.schemaVersion !== 1) errors.push('Unsupported or missing registry schemaVersion.');
if (!registry.settings || !Number.isInteger(registry.settings.staleAfterDays)) {
  errors.push('settings.staleAfterDays must be an integer.');
}
if (!Array.isArray(registry.evidence) || registry.evidence.length === 0) {
  errors.push('evidence must be a non-empty array.');
}
if (!Array.isArray(registry.reviewRequests)) errors.push('reviewRequests must be an array.');
if (!Array.isArray(registry.profileCorrections)) errors.push('profileCorrections must be an array.');

const evidence = Array.isArray(registry.evidence) ? registry.evidence : [];
const publicEvidence = evidence.filter((item) => item.publiclyLinked);
const seenEvidenceIds = new Set();
const staleEvidence = [];
const dueEvidence = [];
const missingVerifyLinks = [];

for (const item of evidence) {
  const label = `Evidence record ${item.id || '(missing id)'}`;
  for (const field of ['id', 'kind', 'name', 'publicUrl', 'status', 'sourceOwner', 'whatBuyerCanCheck']) {
    if (!item[field]) errors.push(`${label} is missing ${field}.`);
  }
  if (seenEvidenceIds.has(item.id)) errors.push(`Duplicate evidence id: ${item.id}.`);
  seenEvidenceIds.add(item.id);
  assertUrl(item.publicUrl, `${label}.publicUrl`);

  const lastVerified = parseIsoDate(item.lastVerified, `${label}.lastVerified`);
  const nextCheck = parseIsoDate(item.nextCheck, `${label}.nextCheck`);
  if (lastVerified !== null) {
    const age = ageInDays(lastVerified);
    if (age < 0) warnings.push(`${label} has a future lastVerified date.`);
    if (age > registry.settings.staleAfterDays) staleEvidence.push({ id: item.id, age });
  }
  if (nextCheck !== null && nextCheck < Date.now()) dueEvidence.push(item.id);
  if (!Array.isArray(item.manualChecks) || item.manualChecks.length === 0) {
    errors.push(`${label}.manualChecks must contain at least one human check.`);
  }
  if (item.publiclyLinked && !verifyHtml.includes(item.publicUrl)) {
    missingVerifyLinks.push(item.id);
  }
}

const seenReviewIds = new Set();
for (const item of registry.reviewRequests || []) {
  const label = `Review request ${item.id || '(missing id)'}`;
  for (const field of ['id', 'company', 'status', 'recordedAsOf', 'source', 'nextAction']) {
    if (!item[field]) errors.push(`${label} is missing ${field}.`);
  }
  if (seenReviewIds.has(item.id)) errors.push(`Duplicate review request id: ${item.id}.`);
  seenReviewIds.add(item.id);
  parseIsoDate(item.recordedAsOf, `${label}.recordedAsOf`);
  if (!Array.isArray(item.targetPlatforms) || item.targetPlatforms.length === 0) {
    errors.push(`${label}.targetPlatforms must contain at least one platform.`);
  }
}

let liveResults = [];
if (live) {
  const maximum = registry.settings.maximumLiveChecks;
  if (publicEvidence.length > maximum) {
    errors.push(`Registry has ${publicEvidence.length} public sources, exceeding the maximum live check count of ${maximum}.`);
  } else {
    liveResults = await mapWithConcurrency(publicEvidence, 3, checkReachability);
  }
}

const results = {
  registry: 'audits/external-proof-registry.json',
  verifyPage: 'verify.html',
  checkedAt: new Date().toISOString(),
  validationErrors: errors,
  warnings,
  evidence: {
    total: evidence.length,
    public: publicEvidence.length,
    byKind: countBy(evidence, 'kind'),
    byStatus: countBy(evidence, 'status'),
    stale: staleEvidence,
    due: dueEvidence,
    missingVerifyLinks
  },
  reviewRequests: {
    total: (registry.reviewRequests || []).length,
    byStatus: countBy(registry.reviewRequests || [], 'status')
  },
  profileCorrections: {
    total: (registry.profileCorrections || []).length,
    byStatus: countBy(registry.profileCorrections || [], 'status')
  },
  live: liveResults
};

if (asJson) {
  console.log(JSON.stringify(results, null, 2));
} else {
  console.log('TMN external proof report');
  console.log(`Registry: ${results.registry}`);
  console.log(`Public evidence: ${results.evidence.public}/${results.evidence.total}`);
  console.log(`Review queue: ${results.reviewRequests.total} (${Object.entries(results.reviewRequests.byStatus).map(([status, count]) => `${count} ${status}`).join(', ')})`);
  console.log(`Profile corrections: ${results.profileCorrections.total} (${Object.entries(results.profileCorrections.byStatus).map(([status, count]) => `${count} ${status}`).join(', ')})`);
  console.log(`Stale evidence: ${results.evidence.stale.length}`);
  console.log(`Due evidence: ${results.evidence.due.length}`);
  console.log(`Missing from verify.html: ${results.evidence.missingVerifyLinks.length}`);

  if (live) {
    const liveCounts = countBy(liveResults, 'result');
    console.log(`Live reachability: ${Object.entries(liveCounts).map(([status, count]) => `${count} ${status}`).join(', ') || 'not run'}`);
    for (const item of liveResults.filter((entry) => entry.result !== 'reachable')) {
      console.log(`  ${item.id}: ${item.result}${item.status ? ` (${item.status})` : ''}${item.error ? `, ${item.error}` : ''}`);
    }
  }

  for (const warning of warnings) console.log(`Warning: ${warning}`);
  for (const error of errors) console.log(`Error: ${error}`);
}

const strictFailure = errors.length > 0 || missingVerifyLinks.length > 0 || staleEvidence.length > 0;
if (strict && strictFailure) process.exit(1);
