(function(){
  if(window.__TMN_ATTRIBUTION__) return;
  window.__TMN_ATTRIBUTION__ = true;

  var STORE_KEY = 'tmn_attribution_v1';
  var SESSION_AI_KEY = 'tmn_current_ai_source';
  var SESSION_AI_TRACKED_KEY = 'tmn_ai_visit_tracked';
  var SESSION_TTL_MS = 30 * 60 * 1000;
  var PARAMS = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','gbraid','wbraid','fbclid','msclkid'];
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
    try { return JSON.parse(window.localStorage.getItem(STORE_KEY) || '{}') || {}; }
    catch(e){ return {}; }
  }

  function writeStore(data){
    try { window.localStorage.setItem(STORE_KEY, JSON.stringify(data)); }
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

  function isExternalUrl(value){
    if(!value) return false;
    try {
      return new URL(value, window.location.href).origin !== window.location.origin;
    } catch(e){
      return false;
    }
  }

  function externalReferrer(){
    return isExternalUrl(document.referrer) ? document.referrer : '';
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

  function initAttribution(){
    var data = readStore();
    var qs = new URLSearchParams(window.location.search);
    var now = new Date().toISOString();

    if(!data.first_landing_url){
      data.first_landing_url = window.location.href;
      data.first_landing_path = cleanPath();
      data.first_seen_at = now;
    }

    data.last_landing_url = window.location.href;
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
      var value = qs.get(key);
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
    hidden(form, 'last_landing_url', data.last_landing_url || window.location.href);
    hidden(form, 'last_landing_path', data.last_landing_path || cleanPath());
    hidden(form, 'source_page', cleanPath());
    hidden(form, 'vertical_source', qs.get('vertical') || qs.get('vertical_source') || '');
    hidden(form, 'referrer', data.first_external_referrer || data.referrer || '');
    hidden(form, 'first_external_referrer', data.first_external_referrer || '');
    hidden(form, 'ai_source', readSessionValue(SESSION_AI_KEY));
    hidden(form, 'first_ai_source', data.first_ai_source || '');
    hidden(form, 'lead_source', leadSource(data));
    hidden(form, 'submitted_at_iso', new Date().toISOString());
  }

  function rememberPendingForm(form){
    try {
      window.sessionStorage.setItem('tmn_pending_form', JSON.stringify({
        form: form.getAttribute('name') || form.getAttribute('id') || 'netlify-form',
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

  function sendEvent(name, props){
    props = props || {};
    props.page = cleanPath();

    try {
      if(window.plausible) window.plausible(name, { props: props });
    } catch(e){}

    try {
      if(window.fathom) window.fathom.trackEvent(name);
    } catch(e){}

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

  function classifyLink(a){
    var href = a.getAttribute('href') || '';
    if(!href) return null;
    if(href.indexOf('tel:') === 0) return ['Phone Click', href];
    if(href.indexOf('mailto:') === 0) return ['Email Click', href];

    var url;
    try { url = new URL(href, window.location.href); }
    catch(e){ return null; }

    if(url.hostname.indexOf('calendly.com') !== -1) return ['Calendly Click', url.href];
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
          sendEvent('Lead Confirmed', { label: pending.form, form: pending.form });
          var specificEvent = confirmedEvent(pending.form);
          if(specificEvent) sendEvent(specificEvent, { label: pending.form, form: pending.form });
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
