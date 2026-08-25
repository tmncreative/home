# TMN external proof engine

This is an internal operating system for the public evidence a buyer, researcher, or recommendation system can independently inspect. It is deliberately narrower than a content calendar: it keeps public claims traceable, makes discrepancies visible, and creates a repeatable way to improve external corroboration without manufacturing it.

It does not promise a result from ChatGPT, Google, a directory, or any buyer. It does not authorize outgoing messages, profile submissions, payments, or edits to a client site.

## What the system is for

TMN already has owned evidence: clear pricing, named people, live work, case studies, verification routes, and the website credibility scorecard. The limiting factor is external corroboration.

The relevant evidence is now registered in `audits/external-proof-registry.json` and checked with:

```sh
node scripts/check-external-proof.mjs
node scripts/check-external-proof.mjs --live
```

The first command validates the registry, confirms every public evidence source is linked on `verify.html`, and flags stale evidence. The `--live` option makes a small, rate-limited HTTP reachability check. A 200 response only proves the source can be reached. It does not prove a review count, ranking, credit, or descriptive claim is still true.

## Evidence standard

For every public statement about TMN, keep these four things together:

1. **Claim**: State only the narrow fact a reader can check.
2. **Source**: Link directly to the client, platform, publisher, or public profile that owns the fact.
3. **Date**: Attach the date of the last substantive review whenever the fact can change.
4. **Scope**: Do not turn a client credit, profile, review, or editorial mention into a broader endorsement or performance claim.

The public `/verify` page is the buyer-facing record. The registry is its internal source of truth. If a source changes or disappears, update the registry first and remove or correct the public statement on the next release.

## Honest review workflow

The review queue records the documented status of existing requests. It is a tracker, not a sending tool.

- Ask only a genuine client for an honest account of their experience
- Never draft wording for a review, incentivize one, exchange value for one, or ask a client to edit it
- Hold regulated-client outreach until launch and the client's own compliance process permit it
- Do not send a reminder or any new request without Trevor's explicit approval
- When a review publishes, save the direct public link, platform, and inspection date. Do not quote or summarize it on TMN's site unless the platform and the exact wording have been rechecked

The current queue and outstanding profile discrepancies are in `audits/external-proof-registry.json`. The original dated record and message drafts remain in `audits/profile-corrections-2026-08-20.md`.

## Client credit and case-study workflow

A client site is useful corroboration only when all of the following are true:

- The client site is currently live
- TMN has permission to describe the work accurately
- The client still has a visible credit or another independently checkable public connection
- The case study states only public facts or client-approved facts

Do not add a credit, change a client site, or publish private results in order to create evidence. When a credit disappears, treat it as an ordinary maintenance event and remove the public reference if it is no longer independently checkable.

## Directory and editorial workflow

Directories and comparison articles can help a skeptical buyer corroborate entity facts, work, and category relevance. They are not a substitute for client work.

- Correct an inaccurate profile only through its actual owner or publisher channel
- Verify the live profile before changing TMN's `/verify` language
- Keep founding year, team size, price floor, scope, timing, ownership terms, and showcase labels consistent across every public surface
- Preserve the publisher's wording, title, date, and placement exactly when citing editorial coverage
- Do not buy bulk listings, links, reviews, or placements

The standing corrections are tracked separately so the public page can disclose unresolved differences instead of quietly restating a desired future state.

## Monthly cadence

On the first business day of each month:

1. Run `node scripts/check-external-proof.mjs --live` and manually inspect every source that is due or returns a protected, rate-limited, or failing status
2. Update only the registry records that were substantively rechecked, including their `lastVerified` and `nextCheck` dates
3. Re-run the established six-prompt ChatGPT baseline in the same modes and append results to `audits/chatgpt-baseline-2026-08-20.md`
4. Record source attribution for every qualified lead using the existing form fields and a direct question on the first call
5. Review the Clutch, Google Business, directory, and editorial state before publishing any new public proof language

Before editing or deploying `verify.html`, run:

```sh
node scripts/check-external-proof.mjs --strict
node scripts/prepare-site.mjs
```

`--strict` blocks the check if the registry is malformed, a publicly linked source is missing from `verify.html`, or an evidence record is stale. It intentionally does not treat bot protection as a broken source.

## What counts as progress

Strong progress is a smaller number of independent, accurate facts that a buyer can verify quickly:

- A published, unprompted review on a platform the buyer can inspect
- A corrected directory profile that agrees with TMN's entity facts
- A current client credit or client-approved factual case study
- A relevant third-party editorial mention or partner link
- A repeatable improvement in qualified, self-reported AI referrals over the baseline period

More pages, directory submissions, mentions of AI, or a larger `llms.txt` file do not count by themselves. The system favors evidence that survives skeptical checking.
