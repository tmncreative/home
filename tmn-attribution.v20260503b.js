(function(){
  if(window.__TMN_ATTRIBUTION__) return;
  window.__TMN_ATTRIBUTION__ = true;

  var STORE_KEY = 'tmn_attribution_v1';
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

  function cleanPath(){
    return window.location.pathname || '/';
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

    if(document.referrer && !data.referrer){
      data.referrer = document.referrer;
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
    }
    data.ai_source = detectedAiSource;

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
    PARAMS.forEach(function(key){
      hidden(form, key, data[key] || '');
      hidden(form, 'first_' + key, data['first_' + key] || '');
    });
    hidden(form, 'first_landing_url', data.first_landing_url || '');
    hidden(form, 'first_landing_path', data.first_landing_path || '');
    hidden(form, 'last_landing_url', data.last_landing_url || window.location.href);
    hidden(form, 'last_landing_path', data.last_landing_path || cleanPath());
    hidden(form, 'source_page', cleanPath());
    hidden(form, 'referrer', data.referrer || document.referrer || '');
    hidden(form, 'ai_source', data.ai_source || '');
    hidden(form, 'first_ai_source', data.first_ai_source || '');
    hidden(form, 'submitted_at_iso', new Date().toISOString());
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
    if(url.pathname === '/start-a-project') return ['Project CTA Click', url.pathname];
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
    if(data.ai_source){
      try {
        if(!window.sessionStorage.getItem('tmn_ai_visit_tracked')){
          window.sessionStorage.setItem('tmn_ai_visit_tracked', '1');
          sendEvent('AI Referral Visit', {
            label: data.ai_source,
            provider: data.ai_source,
            landing_path: data.last_landing_path || cleanPath()
          });
        }
      } catch(e){}
    }

    if(cleanPath() === '/success' || cleanPath() === '/success.html'){
      setTimeout(function(){ sendEvent('Lead Confirmed', { label: 'success-page' }); }, 500);
    }
  });

  document.addEventListener('submit', function(e){
    var form = e.target;
    if(!isAttributionForm(form)) return;
    hydrateForm(form);
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
  }, true);
})();
