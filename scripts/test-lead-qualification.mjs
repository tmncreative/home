import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { runInNewContext } from 'node:vm';
import test from 'node:test';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const attribution = readFileSync(resolve(root, 'tmn-attribution.v20260503b.js'), 'utf8');
const projectHtml = readFileSync(resolve(root, 'start-a-project.html'), 'utf8');
const formSources = {
  'qualified-project-inquiry': projectHtml,
  'tmn-meta-intake': readFileSync(resolve(root, 'free-review.html'), 'utf8'),
  'tmn-creative-intake': readFileSync(resolve(root, 'index.html'), 'utf8'),
  'studio-inquiry': readFileSync(resolve(root, 'studio.html'), 'utf8')
};
const serviceScript = [...projectHtml.matchAll(/<script>([\s\S]*?)<\/script>/g)]
  .map(match => match[1]).find(script => script.includes('var services ='));
const qualification = {
  project_investment: '10000-20000',
  project_scope: 'premium-redesign',
  timeline: '30-days',
  decision_role: 'owner-founder'
};
const keys = Object.keys(qualification);
const copy = value => JSON.parse(JSON.stringify(value));

function storage() {
  const values = new Map();
  return {
    getItem: key => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: key => values.delete(key)
  };
}

// A minimal DOM surface runs the production script and real form service
// initializer. Analytics functions are spies, so this never sends a lead.
function fixture({ path = '/start-a-project', name = 'qualified-project-inquiry',
  values = {}, disabled = [], session = storage(), local = storage(),
  ga4 = true, service = false, withForm = true } = {}) {
  const nodes = new Map();
  const fields = new Map();
  const listeners = new Map();
  const calls = { google: [], meta: [], fathom: [] };
  function element() {
    const children = new Map();
    const attributes = new Map();
    return {
      value: '', disabled: false, required: false,
      setAttribute(key, value) { attributes.set(key, value); this[key] = value; },
      getAttribute(key) { return attributes.get(key) ?? null; },
      querySelector(selector) {
        if (!children.has(selector)) children.set(selector, element());
        return children.get(selector);
      }
    };
  }
  const formHtml = Object.hasOwn(formSources, name) ? formSources[name] : projectHtml;
  for (const match of formHtml.matchAll(/<(?:input|select|textarea)\b([^>]*)>/g)) {
    const attrs = match[1];
    const fieldName = attrs.match(/\bname="([^"]+)"/)?.[1];
    const id = attrs.match(/\bid="([^"]+)"/)?.[1];
    const field = element();
    field.value = attrs.match(/\bvalue="([^"]*)"/)?.[1] || '';
    if (fieldName) {
      field.name = fieldName;
      fields.set(fieldName, field);
    }
    if (id) nodes.set(id, field);
  }
  for (const [key, value] of Object.entries(values)) {
    if (!fields.has(key)) fields.set(key, element());
    fields.get(key).value = value;
  }
  for (const key of disabled) fields.get(key).disabled = true;
  const form = {
    action: '/success?type=project',
    getAttribute: key => key === 'name' ? name : key === 'action' ? form.action : null,
    hasAttribute: key => key === 'data-netlify',
    querySelector(selector) {
      const fieldName = selector.match(/\[name="([^"]+)"\]/)?.[1];
      return fieldName ? fields.get(fieldName) || null : null;
    },
    appendChild(field) { fields.set(field.name, field); }
  };
  nodes.set('qualified-project-form', form);
  const document = {
    referrer: '', title: '',
    body: { classList: { add() {} } },
    documentElement: { setAttribute() {} },
    getElementById(id) {
      if (!nodes.has(id)) nodes.set(id, element());
      return nodes.get(id);
    },
    createElement: element,
    querySelector: selector => document.getElementById(selector),
    querySelectorAll: selector => selector === 'form' && withForm ? [form] : [],
    addEventListener(type, callback) {
      if (!listeners.has(type)) listeners.set(type, []);
      listeners.get(type).push(callback);
    }
  };
  const window = {
    document, location: new URL(path, 'https://tmncreative.com'),
    navigator: { webdriver: false }, localStorage: local, sessionStorage: session,
    gtag: (...args) => calls.google.push(copy(args)),
    fbq: (...args) => calls.meta.push(copy(args)),
    fathom: { trackEvent: (...args) => calls.fathom.push(copy(args)) }
  };
  if (ga4) window.__TMN_GA4_MEASUREMENT_ID__ = 'G-DYJWPYC8BR';
  const context = { window, document, URL, URLSearchParams, setTimeout: fn => fn(), console };
  if (service) runInNewContext(serviceScript, context);
  runInNewContext(attribution, context);
  const fire = type => (listeners.get(type) || []).forEach(fn => fn({ target: form }));
  fire('DOMContentLoaded');
  return { calls, fields, session, local, fire,
    pending: () => JSON.parse(session.getItem('tmn_pending_form')),
    success: options => fixture({ path: '/success?type=project', session, local,
      withForm: false, ...options }) };
}

function lead(f) {
  const events = f.calls.google.filter(call => call[1] === 'generate_lead');
  assert.equal(events.length, 1);
  return events[0][2];
}

function assertNoQualification(value) {
  const text = JSON.stringify(value);
  for (const key of keys) assert.equal(text.includes('"' + key + '"'), false, key);
}

test('qualification is captured at submit, survives success, and is GA4-only', () => {
  const f = fixture({ values: { ...qualification, self_reported_source: 'chatgpt',
    email: 'private@example.com', desired_outcome: 'Private project brief',
    ai_prompt: 'Private conversation' } });
  assert.equal(f.pending(), null);
  assertNoQualification(f.calls);
  f.fields.get('project_investment').value = '20000-plus';
  f.fire('submit');
  assert.equal(f.pending().project_investment, '20000-plus');
  for (const key of keys.slice(1)) assert.equal(f.pending()[key], qualification[key]);
  assertNoQualification(f.calls);
  assertNoQualification(JSON.parse(f.local.getItem('tmn_attribution_v1')));
  const success = f.success();
  const event = lead(success);
  assert.equal(event.send_to, 'G-DYJWPYC8BR');
  assert.equal(event.project_investment, '20000-plus');
  for (const key of keys.slice(1)) assert.equal(event[key], qualification[key]);
  assertNoQualification(success.calls.google.filter(call => call[1] !== 'generate_lead'));
  assertNoQualification(success.calls.meta);
  assertNoQualification(success.calls.fathom);
  assert.deepEqual(success.calls.google.filter(call => call[1] === 'conversion'),
    [['event', 'conversion', { send_to: 'AW-18041747908/lead' }]]);
  for (const privateValue of ['private@example.com', 'Private project brief', 'Private conversation']) {
    assert.equal(JSON.stringify(success.calls).includes(privateValue), false);
    assert.equal(JSON.stringify(f.pending()).includes(privateValue), false);
  }
  assert.equal(f.pending(), null);
  const replay = success.success();
  assert.equal(replay.calls.google.length, 0);
  assert.equal(replay.calls.meta.length, 0);
});

test('each existing form sends only its existing qualification fields', () => {
  const allowed = {
    'qualified-project-inquiry': keys,
    'tmn-meta-intake': ['project_investment'],
    'tmn-creative-intake': ['project_investment', 'timeline', 'decision_role'],
    'studio-inquiry': ['project_investment', 'timeline']
  };
  for (const [name, fields] of Object.entries(allowed)) {
    const actual = [...formSources[name].matchAll(/<select\b[^>]*name="([^"]+)"/g)]
      .map(match => match[1]).filter(key => keys.includes(key));
    assert.deepEqual(actual.sort(), [...fields].sort(), name + ' static fields differ');
    const f = fixture({ name, values: qualification });
    f.fire('submit');
    const success = f.success();
    const event = lead(success);
    for (const key of keys) assert.equal(event[key], fields.includes(key) ? qualification[key] : undefined);
    assertNoQualification(f.calls);
    assertNoQualification(success.calls.google.filter(call => call[1] !== 'generate_lead'));
    assertNoQualification(success.calls.meta);
    assertNoQualification(success.calls.fathom);
  }
});

test('car-wash and financial-services attribution survives landing, inquiry, and confirmed lead', () => {
  for (const [path, vertical] of [
    ['/web-design-for-car-wash-companies', 'car-wash'],
    ['/financial-services', 'financial-services']
  ]) {
    for (const query of ['', '?vertical=' + vertical]) {
      const landing = fixture({ path, withForm: false });
      const inquiry = fixture({ path: '/start-a-project' + query,
        session: landing.session, local: landing.local, values: qualification });
      assert.equal(inquiry.fields.get('vertical_source').value, vertical, path + query);
      assert.equal(inquiry.fields.get('first_landing_path').value, path);
      assert.equal(inquiry.calls.google.some(call => call[1] === 'generate_lead'), false);
      inquiry.fire('submit');
      assert.equal(inquiry.pending().vertical_source, vertical);
      assert.equal(inquiry.pending().first_landing_path, path);
      const event = lead(inquiry.success());
      assert.equal(event.vertical_source, vertical);
      assert.equal(event.first_landing_path, path);
      assert.equal(event.project_investment, qualification.project_investment);
      assert.equal(event.send_to, 'G-DYJWPYC8BR');
    }
  }
});

test('unknown and prototype-named forms cannot add qualification fields', () => {
  for (const name of ['newsletter-inquiry', 'constructor', '__proto__', 'toString']) {
    const f = fixture({ name, values: qualification });
    f.fire('submit');
    for (const key of keys) assert.equal(f.pending()[key], '');
    assertNoQualification(lead(f.success()));
  }
});

test('preview budget preserves its distinct 10000-plus bucket', () => {
  const f = fixture({ name: 'tmn-meta-intake', values: { project_investment: '10000-plus' } });
  f.fire('submit');
  assert.equal(f.pending().project_investment, '10000-plus');
  const event = lead(f.success());
  assert.equal(event.project_investment, '10000-plus');
  for (const key of ['project_scope', 'timeline', 'decision_role']) assert.equal(event[key], undefined);
});

test('every published whitelist choice can survive submission', () => {
  let checked = 0;
  for (const [name, html] of Object.entries(formSources)) {
    for (const field of html.matchAll(/<select\b[^>]*name="([^"]+)"[^>]*>([\s\S]*?)<\/select>/g)) {
      const key = field[1];
      if (!keys.includes(key)) continue;
      for (const option of field[2].matchAll(/<option[^>]*value="([^"]+)"/g)) {
        const value = option[1];
        const f = fixture({ name, values: { [key]: value } });
        f.fire('submit');
        assert.equal(lead(f.success())[key], value, name + ':' + key + ':' + value);
        checked++;
      }
    }
  }
  assert.ok(checked > 40, 'all published forms exercised');
});

test('free text, prototype names, case changes, and whitespace are rejected', () => {
  for (const value of ['constructor', '__proto__', 'toString', 'private@example.com',
    '10000-20000 ', 'PREMIUM-REDESIGN', '', null, ['10000-20000'], { x: '10000-20000' }]) {
    const f = fixture({ values: Object.fromEntries(keys.map(key => [key, value])) });
    f.fire('submit');
    for (const key of keys) assert.equal(f.pending()[key], '');
    assertNoQualification(lead(f.success()));
  }
});

test('stored token is revalidated before analytics', () => {
  const f = fixture({ values: qualification });
  f.fire('submit');
  const token = f.pending();
  for (const key of keys) token[key] = 'private@example.com';
  token.__proto__ = { timeline: '30-days' };
  f.session.setItem('tmn_pending_form', JSON.stringify(token));
  assertNoQualification(lead(f.success()));
  token.form = 'newsletter-inquiry';
  Object.assign(token, qualification);
  f.session.setItem('tmn_pending_form', JSON.stringify(token));
  assertNoQualification(lead(f.success()));
});

test('disabled qualification fields are omitted', () => {
  const f = fixture({ values: qualification, disabled: ['project_investment'] });
  f.fire('submit');
  assert.equal(f.pending().project_investment, '');
  assert.equal(lead(f.success()).project_investment, undefined);
});

test('actual care form mode disables and omits a restored website budget', () => {
  for (const service of ['ai-visibility', 'ria-site-care', 'publishing-portal',
    'compliance-care', 'content-care']) {
    const f = fixture({ path: '/start-a-project?service=' + service,
      values: qualification, service: true });
    assert.equal(f.fields.get('project_investment').disabled, true, service);
    assert.equal(f.fields.get('project_scope').value, service);
    f.fire('submit');
    const event = lead(f.success());
    assert.equal(event.project_investment, undefined, service);
    assert.equal(event.project_scope, service);
  }
});

test('without GA4 ID, generate_lead cannot fan out into Ads destinations', () => {
  const f = fixture({ values: qualification });
  f.fire('submit');
  const success = f.success({ ga4: false });
  assert.equal(success.calls.google.filter(call => call[1] === 'generate_lead').length, 0);
  assert.deepEqual(success.calls.google.filter(call => call[1] === 'conversion'),
    [['event', 'conversion', { send_to: 'AW-18041747908/lead' }]]);
  assertNoQualification(success.calls);
});

test('expired or malformed success tokens do not emit lead conversions', () => {
  for (const token of ['{', JSON.stringify({ form: 'qualified-project-inquiry', at: Date.now() - 660000 })]) {
    const session = storage();
    session.setItem('tmn_pending_form', token);
    const f = fixture({ path: '/success', session, withForm: false });
    assert.equal(f.calls.google.length, 0);
    assert.equal(f.calls.meta.length, 0);
    assert.equal(session.getItem('tmn_pending_form'), null);
  }
});

test('built pages refresh attribution and preserve existing analytics and homepage presentation', {
  skip: !existsSync(resolve(root, '_site/index.html')) && 'Run prepare-site.mjs before build verification'
}, () => {
  const analyticsTag = '<script src="/tmn-analytics.v20260825a.js" defer></script>';
  const normalize = html => html
    .replace(/(?:  )?<script src="\/tmn-analytics\.v20260825a\.js" defer><\/script>\n?/, '')
    .replace(/(src="\/?tmn-attribution\.v20260503b\.js)(?:\?v=[^"\s]+)?"/g, '$1"');
  for (const filename of readdirSync(resolve(root, '_site')).filter(name => name.endsWith('.html'))) {
    const built = readFileSync(resolve(root, '_site', filename), 'utf8');
    const source = readFileSync(resolve(root, filename), 'utf8');
    assert.equal(built.split(analyticsTag).length - 1, 1, filename);
    assert.equal(built.includes('tmn-attribution.v20260503b.js?v=20260908b'), true, filename);
    assert.equal(normalize(built), normalize(source), filename + ' changed beyond allowed scripts');
  }
});
