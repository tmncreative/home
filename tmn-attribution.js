(function(){
  var hasQaOptOut = /(?:^|[?&])tmn_qa=1(?:&|$)/.test(window.location.search || '');
  var isAutomatedQa = !!(window.navigator && window.navigator.webdriver) || hasQaOptOut;
  if(isAutomatedQa){
    try {
      window.localStorage.setItem('blockFathomTracking', 'true');
      if(window.localStorage.getItem('blockFathomTracking') === 'true'){
        document.documentElement.setAttribute('data-tmn-qa-browser', 'true');
      }
    }
    catch(e){}
  }

  if(window.__TMN_ATTRIBUTION__) return;
  window.__TMN_ATTRIBUTION__ = true;

  var STORE_KEY = 'tmn_attribution_v1';
  var SESSION_AI_KEY = 'tmn_current_ai_source';
  var SESSION_AI_TRACKED_KEY = 'tmn_ai_visit_tracked';
  var SESSION_VERTICAL_KEY = 'tmn_vertical_source';
  var SESSION_BOOKING_SOURCE_KEY = 'tmn_booking_source';
  var SESSION_TTL_MS = 30 * 60 * 1000;
  var STORE_TTL_MS = 90 * 24 * 60 * 60 * 1000;
  var PARAMS = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','gbraid','wbraid','fbclid','msclkid'];
  var SELF_REPORTED_SOURCES = {
    'chatgpt': true,
    'other-ai': true,
    'google-search': true,
    'referral': true,
    'tmn-work': true,
    'social-media': true,
    'agency-directory': true,
    'already-knew-tmn': true,
    'other': true
  };
  var AI_SOURCES = [
    ['chatgpt', 'ChatGPT'],
    ['openai', 'ChatGPT'],
    ['perplexity', 'Perplexity'],
    ['claude', 'Claude'],
    ['anthropic', 'Claude'],
    ['gemini', 'Gemini'],
    ['bard.google', 'Gemini'],
    ['copilot', 'Microsoft Copilot'],
    ['bing.com/chat', 'Microsoft Copilot'],
    ['you.com', 'You.com']
  ];

  function readStore(){
    try {
      var data = JSON.parse(window.localStorage.getItem(STORE_KEY) || '{}') || {};
      var expiresAt = Number(data._expires_at_ms || 0);
      if(!expiresAt && data.first_seen_at){
        var firstSeenAt = Date.parse(data.first_seen_at);
        if(Number.isFinite(firstSeenAt)) expiresAt = firstSeenAt + STORE_TTL_MS;
      }
      if(expiresAt && Date.now() > expiresAt){
        window.localStorage.removeItem(STORE_KEY);
        return {};
      }
      if(expiresAt && !data._expires_at_ms) data._expires_at_ms = expiresAt;
      return data;
    }
    catch(e){ return {}; }
  }

  function writeStore(data){
    try {
      if(!data._expires_at_ms) data._expires_at_ms = Date.now() + STORE_TTL_MS;
      window.localStorage.setItem(STORE_KEY, JSON.stringify(data));
    }
    catch(e){}
  }

  function readSessionValue(key){
    try {
      var record = JSON.parse(window.sessionStorage.getItem(key) || 'null');
      if(!record || !record.value || !record.at || Date.now() - record.at > SESSION_TTL_MS){
        window.sessionStorage.removeItem(key);
        return '';
      }
      return record.value;
    } catch(e){
      try { window.sessionStorage.removeItem(key); } catch(ignore){}
      return '';
    }
  }

  function writeSessionValue(key, value){
    try {
      if(value) window.sessionStorage.setItem(key, JSON.stringify({ value: value, at: Date.now() }));
      else window.sessionStorage.removeItem(key);
    } catch(e){}
  }

  function cleanPath(){
    return window.location.pathname || '/';
  }

  function cleanTrackingValue(value){
    return String(value || '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, 254);
  }

  function cleanSlug(value, fallback){
    var slug = cleanTrackingValue(value).toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
    return slug || fallback || '';
  }

  function safeSiteUrl(value){
    try {
      var url = new URL(value, window.location.href);
      if(url.origin !== window.location.origin) return '';
      return url.origin + (url.pathname || '/');
    } catch(e){
      return '';
    }
  }

  function safeExternalOrigin(value){
    if(!value) return '';
    try {
      var url = new URL(value, window.location.href);
      if(url.origin === window.location.origin) return '';
      return url.origin + '/';
    } catch(e){
      return '';
    }
  }

  function isExternalUrl(value){
    if(!value) return false;
    try {
      return new URL(value, window.location.href).origin !== window.location.origin;
    } catch(e){
      return false;
    }
  }

  function externalReferrer(){
    return safeExternalOrigin(document.referrer);
  }

  function referrerHost(value){
    if(!value) return '';
    try { return new URL(value, window.location.href).hostname; }
    catch(e){ return ''; }
  }

  function leadSource(data){
    return data.first_utm_source ||
      data.first_ai_source ||
      referrerHost(data.first_external_referrer) ||
      'Direct / unknown';
  }

  function aiSource(qs){
    var candidates = [
      qs.get('utm_source') || '',
      qs.get('utm_medium') || '',
      document.referrer || ''
    ].join(' ').toLowerCase();

    for(var i = 0; i < AI_SOURCES.length; i++){
      if(candidates.indexOf(AI_SOURCES[i][0]) !== -1) return AI_SOURCES[i][1];
    }
    return '';
  }

  function aiSourceSlug(source){
    var values = {
      'ChatGPT': 'chatgpt',
      'Perplexity': 'perplexity',
      'Claude': 'claude',
      'Gemini': 'gemini',
      'Microsoft Copilot': 'microsoft-copilot',
      'You.com': 'you-com'
    };
    return values[source] || 'other-ai';
  }

  function bookingSource(qs, currentExternalReferrer, detectedAiSource){
    if(detectedAiSource) return aiSourceSlug(detectedAiSource);
    if(qs.get('gclid') || qs.get('gbraid') || qs.get('wbraid')) return 'google-ads';
    if(qs.get('msclkid')) return 'microsoft-ads';
    if(qs.get('fbclid')) return 'meta-ads';

    var campaignSource = cleanTrackingValue(qs.get('utm_source')).toLowerCase();
    if(campaignSource){
      if(campaignSource.indexOf('google') !== -1) return 'google-campaign';
      if(campaignSource.indexOf('bing') !== -1 || campaignSource.indexOf('microsoft') !== -1) return 'microsoft-campaign';
      if(campaignSource.indexOf('linkedin') !== -1) return 'linkedin-campaign';
      if(campaignSource.indexOf('facebook') !== -1 || campaignSource.indexOf('instagram') !== -1 || campaignSource === 'meta') return 'meta-campaign';
      if(campaignSource.indexOf('clutch') !== -1) return 'clutch';
      if(campaignSource.indexOf('designrush') !== -1) return 'designrush';
      if(campaignSource.indexOf('agencylist') !== -1 || campaignSource.indexOf('agency-list') !== -1) return 'agency-list';
      return 'campaign';
    }

    var host = referrerHost(currentExternalReferrer).toLowerCase();
    if(!host) return '';
    if(host === 'google.com' || host.endsWith('.google.com') || host.indexOf('google.') === 0 || host.indexOf('.google.') !== -1) return 'google-organic';
    if(host === 'bing.com' || host.endsWith('.bing.com')) return 'bing-organic';
    if(host === 'linkedin.com' || host.endsWith('.linkedin.com')) return 'linkedin-referral';
    if(host === 'clutch.co' || host.endsWith('.clutch.co')) return 'clutch';
    if(host === 'designrush.com' || host.endsWith('.designrush.com')) return 'designrush';
    if(host === 'agencylist.com' || host.endsWith('.agencylist.com')) return 'agency-list';
    return 'external-referral';
  }

  function rememberSessionContext(qs, currentExternalReferrer, detectedAiSource){
    var vertical = cleanSlug(qs.get('vertical') || qs.get('vertical_source'));
    var isNewAcquisition = Boolean(currentExternalReferrer || detectedAiSource || PARAMS.some(function(key){ return Boolean(qs.get(key)); }));
    if(vertical){
      writeSessionValue(SESSION_VERTICAL_KEY, vertical);
    } else if(isNewAcquisition){
      writeSessionValue(SESSION_VERTICAL_KEY, '');
    } else {
      vertical = readSessionValue(SESSION_VERTICAL_KEY);
      if(vertical) writeSessionValue(SESSION_VERTICAL_KEY, vertical);
    }

    var source = bookingSource(qs, currentExternalReferrer, detectedAiSource);
    if(source){
      writeSessionValue(SESSION_BOOKING_SOURCE_KEY, source);
    } else {
      source = readSessionValue(SESSION_BOOKING_SOURCE_KEY) || 'direct-unknown';
      writeSessionValue(SESSION_BOOKING_SOURCE_KEY, source);
    }
  }

  function initAttribution(){
    var data = readStore();
    var qs = new URLSearchParams(window.location.search);
    var now = new Date().toISOString();

    if(data.first_landing_url) data.first_landing_url = safeSiteUrl(data.first_landing_url);
    if(data.last_landing_url) data.last_landing_url = safeSiteUrl(data.last_landing_url);
    ['referrer','first_external_referrer','last_external_referrer'].forEach(function(key){
      if(!data[key]) return;
      data[key] = safeExternalOrigin(data[key]);
      if(!data[key]) delete data[key];
    });
    PARAMS.forEach(function(key){
      if(data[key]) data[key] = cleanTrackingValue(data[key]);
      if(data['first_' + key]) data['first_' + key] = cleanTrackingValue(data['first_' + key]);
    });

    if(!data.first_landing_url){
      data.first_landing_url = safeSiteUrl(window.location.href);
      data.first_landing_path = cleanPath();
      data.first_seen_at = now;
    }

    data.last_landing_url = safeSiteUrl(window.location.href);
    data.last_landing_path = cleanPath();
    data.last_seen_at = now;

    if(data.referrer && !isExternalUrl(data.referrer)){
      delete data.referrer;
    }
    if(data.first_external_referrer && !isExternalUrl(data.first_external_referrer)){
      delete data.first_external_referrer;
    }

    if(!data.first_external_referrer && data.referrer){
      data.first_external_referrer = data.referrer;
    }

    var currentExternalReferrer = externalReferrer();
    if(currentExternalReferrer){
      if(!data.first_external_referrer) data.first_external_referrer = currentExternalReferrer;
      data.last_external_referrer = currentExternalReferrer;
      data.referrer = data.first_external_referrer;
    }

    PARAMS.forEach(function(key){
      var value = cleanTrackingValue(qs.get(key));
      if(!value) return;
      if(!data['first_' + key]) data['first_' + key] = value;
      data[key] = value;
    });

    var detectedAiSource = aiSource(qs);
    if(detectedAiSource){
      if(!data.first_ai_source) data.first_ai_source = detectedAiSource;
      data.ai_source = detectedAiSource;
      writeSessionValue(SESSION_AI_KEY, detectedAiSource);
    } else if(currentExternalReferrer || PARAMS.some(function(key){ return Boolean(qs.get(key)); })){
      delete data.ai_source;
      writeSessionValue(SESSION_AI_KEY, '');
      writeSessionValue(SESSION_AI_TRACKED_KEY, '');
    } else {
      var sessionAiSource = readSessionValue(SESSION_AI_KEY);
      if(sessionAiSource){
        data.ai_source = sessionAiSource;
        writeSessionValue(SESSION_AI_KEY, sessionAiSource);
      } else {
        delete data.ai_source;
        writeSessionValue(SESSION_AI_TRACKED_KEY, '');
      }
    }

    rememberSessionContext(qs, currentExternalReferrer, detectedAiSource);

    writeStore(data);
    return data;
  }

  function hidden(form, name, value){
    if(!form || !name) return;
    var input = form.querySelector('input[name="' + name + '"]');
    if(!input){
      input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      form.appendChild(input);
    }
    if(value !== undefined && value !== null) input.value = value;
  }

  function hydrateForm(form){
    var data = readStore();
    var qs = new URLSearchParams(window.location.search);
    PARAMS.forEach(function(key){
      hidden(form, key, data[key] || '');
      hidden(form, 'first_' + key, data['first_' + key] || '');
    });
    hidden(form, 'first_landing_url', data.first_landing_url || '');
    hidden(form, 'first_landing_path', data.first_landing_path || '');
    hidden(form, 'last_landing_url', data.last_landing_url || safeSiteUrl(window.location.href));
    hidden(form, 'last_landing_path', data.last_landing_path || cleanPath());
    hidden(form, 'source_page', cleanPath());
    hidden(form, 'vertical_source', cleanSlug(qs.get('vertical') || qs.get('vertical_source')) || readSessionValue(SESSION_VERTICAL_KEY));
    hidden(form, 'referrer', data.first_external_referrer || data.referrer || '');
    hidden(form, 'first_external_referrer', data.first_external_referrer || '');
    hidden(form, 'ai_source', readSessionValue(SESSION_AI_KEY));
    hidden(form, 'first_ai_source', data.first_ai_source || '');
    hidden(form, 'lead_source', leadSource(data));
    hidden(form, 'submitted_at_iso', new Date().toISOString());
  }

  function rememberPendingForm(form){
    try {
      var sourceField = form.querySelector('[name="self_reported_source"]');
      var source = sourceField ? cleanSlug(sourceField.value) : '';
      if(!SELF_REPORTED_SOURCES[source]) source = '';
      window.sessionStorage.setItem('tmn_pending_form', JSON.stringify({
        form: form.getAttribute('name') || form.getAttribute('id') || 'netlify-form',
        self_reported_source: source,
        at: Date.now()
      }));
    } catch(e){}
  }

  function consumePendingForm(){
    try {
      var raw = window.sessionStorage.getItem('tmn_pending_form');
      if(!raw) return null;
      window.sessionStorage.removeItem('tmn_pending_form');
      var pending = JSON.parse(raw);
      if(!pending || !pending.form || !pending.at) return null;
      if(Date.now() - pending.at > 10 * 60 * 1000) return null;
      return pending;
    } catch(e){
      return null;
    }
  }

  function confirmedEvent(formName){
    if(formName === 'tmn-meta-intake') return 'Free Review Form Submit';
    if(formName === 'qualified-project-inquiry' || formName === 'tmn-creative-intake' || formName === 'studio-inquiry'){
      return 'Qualified Project Form Submit';
    }
    return '';
  }

  function calendlyPlacement(a, index){
    if(a.closest('nav')) return 'nav';
    if(a.closest('.hero,.hero-actions,.hero-ctas')) return 'hero';
    if(a.closest('.form-alt,.form-card')) return 'form';
    if(a.closest('footer')) return 'footer';
    var section = a.closest('section[id],[id]');
    if(section && section.id) return cleanSlug(section.id, 'section');
    return 'link-' + (index + 1);
  }

  function decorateCalendlyLink(a, index, refreshSource){
    var source = cleanSlug(readSessionValue(SESSION_BOOKING_SOURCE_KEY), 'direct-unknown');
    var page = cleanSlug(cleanPath().replace(/^\/+|\/+$/g, '').replace(/\//g, '_'), 'home');
    var url;
    try { url = new URL(a.getAttribute('href'), window.location.href); }
    catch(e){ return false; }
    var host = url.hostname.toLowerCase();
    if(host !== 'calendly.com' && !host.endsWith('.calendly.com')) return false;

    var managed = (a.getAttribute('data-tmn-calendly-params') || '').split(',').filter(Boolean);
    function setMissing(name, value){
      if(url.searchParams.has(name)) return;
      url.searchParams.set(name, value);
      if(managed.indexOf(name) === -1) managed.push(name);
    }

    setMissing('utm_source', 'tmncreative.com');
    setMissing('utm_medium', 'website');
    setMissing('utm_campaign', 'free_review');
    setMissing('utm_content', page + '__' + calendlyPlacement(a, index));
    setMissing('utm_term', source);
    if(refreshSource && managed.indexOf('utm_term') !== -1) url.searchParams.set('utm_term', source);

    a.setAttribute('data-tmn-calendly-params', managed.join(','));
    a.setAttribute('href', url.toString());
    return true;
  }

  function decorateCalendlyLinks(){
    document.querySelectorAll('a[href*="calendly.com"]').forEach(function(a, index){
      decorateCalendlyLink(a, index, false);
    });
  }

  function isAttributionForm(form){
    if(!form || !form.querySelector) return false;
    if(form.hasAttribute('data-netlify')) return true;
    if(form.querySelector('[data-attribution-field]')) return true;
    if(form.querySelector('input[name="utm_source"], input[name="first_utm_source"], input[name="source_page"]')) return true;

    var action = (form.getAttribute('action') || '').split('?')[0];
    var name = form.getAttribute('name') || '';
    return action === '/success' || /tmn|studio|intake|inquiry|review/i.test(name);
  }

  function hydrateForms(){
    document.querySelectorAll('form').forEach(function(form){
      if(isAttributionForm(form)) hydrateForm(form);
    });
  }

  function eventName(name){
    return String(name || 'TMN Event').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
  }

  function sendEvent(name, props, options){
    props = props || {};
    options = options || {};
    props.page = cleanPath();

    try {
      if(window.plausible) window.plausible(name, { props: props });
    } catch(e){}

    try {
      if(window.fathom) window.fathom.trackEvent(name);
    } catch(e){}

    if(options.ads !== false){
      try {
        if(window.gtag) window.gtag('event', eventName(name), {
          event_category: 'tmn_growth',
          event_label: props.label || props.form || props.href || cleanPath()
        });
      } catch(e){}

      try {
        if(window.fbq) window.fbq('trackCustom', name.replace(/\s+/g, ''), props);
      } catch(e){}
    }
  }

  function sendConfirmedAdConversions(pending){
    try {
      if(window.gtag){
        window.gtag('event', 'generate_lead', {
          event_category: 'lead',
          event_label: pending.form
        });
        window.gtag('event', 'conversion', {
          send_to: 'AW-18041747908/lead'
        });
      }
    } catch(e){}

    try {
      if(window.fbq) window.fbq('track', 'Lead', { content_name: pending.form });
    } catch(e){}
  }

  function classifyLink(a){
    var href = a.getAttribute('href') || '';
    if(!href) return null;
    if(href.indexOf('tel:') === 0) return ['Phone Click', href];
    if(href.indexOf('mailto:') === 0) return ['Email Click', href];

    var url;
    try { url = new URL(href, window.location.href); }
    catch(e){ return null; }

    if(url.hostname === 'calendly.com' || url.hostname.endsWith('.calendly.com')) return ['Calendly Click', url.href];
    if(url.pathname === '/start-a-project'){
      var vertical = url.searchParams.get('vertical') || '';
      var verticalEvent = vertical === 'financial-services' ? 'Advisor Project CTA Click' :
        vertical === 'healthcare' ? 'Healthcare Project CTA Click' : '';
      return ['Project CTA Click', url.pathname, verticalEvent];
    }
    if(url.pathname === '/free-review') return ['Free Review CTA Click', url.pathname];
    if(url.pathname === '/pricing') return ['Pricing Click', url.pathname];
    if(url.pathname === '/pay') return ['Client Portal Click', url.pathname];
    if(url.hash === '#contact' || url.hash === '#form-card') return ['Lead CTA Click', url.hash];
    return null;
  }

  initAttribution();

  document.addEventListener('DOMContentLoaded', function(){
    hydrateForms();
    decorateCalendlyLinks();

    var data = readStore();
    var currentAiSource = readSessionValue(SESSION_AI_KEY);
    if(currentAiSource){
      var trackedAiSource = readSessionValue(SESSION_AI_TRACKED_KEY);
      if(trackedAiSource !== currentAiSource){
        sendEvent('AI Referral Visit', {
          label: currentAiSource,
          provider: currentAiSource,
          landing_path: data.last_landing_path || cleanPath()
        });
      }
      writeSessionValue(SESSION_AI_TRACKED_KEY, currentAiSource);
    }

    if(cleanPath() === '/success' || cleanPath() === '/success.html'){
      var pending = consumePendingForm();
      if(pending){
        setTimeout(function(){
          var confirmedProps = {
            label: pending.form,
            form: pending.form,
            self_reported_source: pending.self_reported_source || 'not-provided'
          };
          sendEvent('Lead Confirmed', confirmedProps, { ads: false });
          var specificEvent = confirmedEvent(pending.form);
          if(specificEvent) sendEvent(specificEvent, confirmedProps, { ads: false });
          if(pending.self_reported_source){
            sendEvent('Lead Source Self-Reported', confirmedProps, { ads: false });
            if(pending.self_reported_source === 'chatgpt' || pending.self_reported_source === 'other-ai'){
              sendEvent('Self-Reported AI Lead', confirmedProps, { ads: false });
            }
            if(pending.self_reported_source === 'chatgpt'){
              sendEvent('Self-Reported ChatGPT Lead', confirmedProps, { ads: false });
            }
          }
          sendConfirmedAdConversions(pending);
        }, 500);
      }
    }
  });

  document.addEventListener('submit', function(e){
    var form = e.target;
    if(!isAttributionForm(form)) return;
    hydrateForm(form);
    rememberPendingForm(form);
    sendEvent('Lead Intent', {
      form: form.getAttribute('name') || form.getAttribute('id') || 'netlify-form'
    });
  }, true);

  document.addEventListener('click', function(e){
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if(!a) return;
    var calendlyLinks = document.querySelectorAll('a[href*="calendly.com"]');
    for(var i = 0; i < calendlyLinks.length; i++){
      if(calendlyLinks[i] === a){
        decorateCalendlyLink(a, i, true);
        break;
      }
    }
    var classified = classifyLink(a);
    if(!classified) return;
    sendEvent(classified[0], {
      href: classified[1],
      label: (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80)
    });
    if(classified[2]){
      sendEvent(classified[2], {
        href: classified[1],
        label: (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80)
      });
    }
  }, true);
})();
