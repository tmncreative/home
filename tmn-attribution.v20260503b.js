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
  // Only fixed form choices belong in analytics. Never include contact details,
  // company names, free-text goals, or the visitor's pasted AI conversation.
  var PROJECT_CHOICES = {
    project_investment: ['2250-5000','5000-10000','10000-plus','10000-20000','20000-plus','not-approved'],
    project_scope: ['premium-redesign','lead-generation','multi-location','site-and-platform','custom-platform','recommendation','ria-site-care','publishing-portal','ai-visibility','compliance-care','content-care'],
    timeline: ['30-days','1-3-months','3-6-months','researching'],
    decision_role: ['owner-founder','partner-executive','marketing-operations','external-consultant']
  };

  var QUALIFICATION_FIELDS = {
    'qualified-project-inquiry': ['project_investment','project_scope','timeline','decision_role'],
    'tmn-meta-intake': ['project_investment'],
    'tmn-creative-intake': ['project_investment','timeline','decision_role'],
    'studio-inquiry': ['project_investment','timeline']
  };

  function projectChoice(name, value, formName){
    if(!Object.prototype.hasOwnProperty.call(QUALIFICATION_FIELDS, formName)) return '';
    if(QUALIFICATION_FIELDS[formName].indexOf(name) === -1) return '';
    if(!Object.prototype.hasOwnProperty.call(PROJECT_CHOICES, name)) return '';
    return PROJECT_CHOICES[name].indexOf(value) !== -1 ? value : '';
  }

  function projectFormChoice(form, name){
    var field = form.querySelector('[name="' + name + '"]');
    return field && !field.disabled ? projectChoice(name, field.value, form.getAttribute('name')) : '';
  }
  var VERTICAL_SOURCES = {
    'accounting': true,
    'architecture': true,
    'car-wash': true,
    'contractors': true,
    'dental': true,
    'financial-services': true,
    'fitness': true,
    'healthcare': true,
    'landscaping': true,
    'legal': true,
    'private-wealth': true,
    'real-estate': true,
    'roofing': true
  };
  var BOOKING_SOURCES = {
    'chatgpt': true,
    'perplexity': true,
    'claude': true,
    'gemini': true,
    'microsoft-copilot': true,
    'you-com': true,
    'poe': true,
    'deepseek': true,
    'grok': true,
    'meta-ai': true,
    'mistral': true,
    'kimi': true,
    'qwen': true,
    'other-ai': true,
    'google-ads': true,
    'microsoft-ads': true,
    'meta-ads': true,
    'google-campaign': true,
    'microsoft-campaign': true,
    'linkedin-campaign': true,
    'meta-campaign': true,
    'clutch': true,
    'designrush': true,
    'agency-list': true,
    'campaign': true,
    'google-organic': true,
    'bing-organic': true,
    'linkedin-referral': true,
    'external-referral': true,
    'direct-unknown': true
  };
  var PAGE_VERTICALS = {
    '/best-law-firm-websites': 'legal',
    '/best-website-design-for-financial-advisors': 'financial-services',
    '/breakaway-advisor-website-guide': 'financial-services',
    '/care-to-speak-website-design': 'healthcare',
    '/compliance-care': 'financial-services',
    '/contractors': 'contractors',
    '/custom-vs-template-law-firm-website': 'legal',
    '/dental': 'dental',
    '/dental-website-redesign': 'dental',
    '/financial-advisor-website-cost': 'financial-services',
    '/financial-services': 'financial-services',
    '/healthcare': 'healthcare',
    '/healthcare-website-hipaa-boundaries': 'healthcare',
    '/hilpan-moxie-wealth-management-website-design': 'financial-services',
    '/hipaa-compliant-website-design': 'healthcare',
    '/home-services': 'contractors',
    '/how-to-choose-a-home-services-web-design-company': 'contractors',
    '/hvac': 'contractors',
    '/hvac-branding-and-website-guide': 'contractors',
    '/landscaping': 'landscaping',
    '/law-firm-website-advertising-rules': 'legal',
    '/law-firm-website-design-cost': 'legal',
    '/lumiclinics-website-design': 'healthcare',
    '/managed-publishing-portal': 'financial-services',
    '/med-spa': 'healthcare',
    '/med-spa-website-design-guide': 'healthcare',
    '/multi-location-home-services-website-strategy': 'contractors',
    '/plumbing': 'contractors',
    '/plumbing-lead-generation-website-guide': 'contractors',
    '/promised-land-renovations-website-design': 'contractors',
    '/ramon-design-group-website-design': 'architecture',
    '/ramsay-law-firm-website-design': 'legal',
    '/real-estate': 'real-estate',
    '/ria-site-care': 'financial-services',
    '/ria-website-compliance-guide': 'financial-services',
    '/roofing-ppc-landing-page-guide': 'roofing',
    '/smitha-reddy-md-healthcare-website-design': 'healthcare',
    '/suncraft-roofing-website-design': 'roofing',
    '/therapist-website-examples': 'healthcare',
    '/tonys-lawn-tree-website-design': 'landscaping',
    '/training-wheels-aba-website-design': 'healthcare',
    '/walnut-ventures-website-design': 'financial-services',
    '/web-design-for-attorneys': 'legal',
    '/web-design-for-car-wash-companies': 'car-wash',
    '/web-design-for-service-businesses': 'contractors',
    '/website-design-for-healthcare-practices': 'healthcare',
    '/websites-for-accounting-firms': 'accounting',
    '/websites-for-electricians': 'contractors',
    '/websites-for-fitness-brands': 'fitness',
    '/websites-for-iv-therapy-clinics': 'healthcare',
    '/websites-for-law-firms': 'legal',
    '/websites-for-mental-health-clinics': 'healthcare',
    '/websites-for-private-wealth-firms': 'private-wealth',
    '/websites-for-roofing-companies': 'roofing',
    '/websites-for-therapists': 'healthcare'
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
    ['you.com', 'You.com'],
    ['poe', 'Poe'],
    ['deepseek', 'DeepSeek'],
    ['grok', 'Grok'],
    ['x.ai', 'Grok'],
    ['meta.ai', 'Meta AI'],
    ['meta-ai', 'Meta AI'],
    ['mistral', 'Mistral'],
    ['kimi', 'Kimi'],
    ['qwen', 'Qwen']
  ];
  var AI_HOST_SOURCES = [
    ['chatgpt.com', 'ChatGPT'],
    ['chat.openai.com', 'ChatGPT'],
    ['openai.com', 'ChatGPT'],
    ['perplexity.ai', 'Perplexity'],
    ['claude.ai', 'Claude'],
    ['anthropic.com', 'Claude'],
    ['gemini.google.com', 'Gemini'],
    ['bard.google.com', 'Gemini'],
    ['copilot.microsoft.com', 'Microsoft Copilot'],
    ['you.com', 'You.com'],
    ['poe.com', 'Poe'],
    ['deepseek.com', 'DeepSeek'],
    ['grok.com', 'Grok'],
    ['x.ai', 'Grok'],
    ['meta.ai', 'Meta AI'],
    ['mistral.ai', 'Mistral'],
    ['kimi.com', 'Kimi'],
    ['qwen.ai', 'Qwen']
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

  function cleanVerticalSource(value){
    var vertical = cleanSlug(value);
    return Object.prototype.hasOwnProperty.call(VERTICAL_SOURCES, vertical) ? vertical : '';
  }

  function cleanBookingSource(value){
    var source = cleanSlug(value);
    return Object.prototype.hasOwnProperty.call(BOOKING_SOURCES, source) ? source : '';
  }

  function cleanFirstLandingPath(value){
    var path = cleanTrackingValue(value);
    if(!path || path.charAt(0) !== '/' || path.indexOf('//') === 0) return '';
    return path.split('?')[0].split('#')[0].slice(0, 254);
  }

  function pageVertical(value){
    var path = cleanFirstLandingPath(value).replace(/\.html$/, '').replace(/\/$/, '') || '/';
    return cleanVerticalSource(PAGE_VERTICALS[path]);
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

  function sourceAliasMatches(value, alias){
    var escapedAlias = alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp('(^|[^a-z0-9])' + escapedAlias + '($|[^a-z0-9])').test(value);
  }

  function hostMatches(host, domain){
    return host === domain || host.slice(-(domain.length + 1)) === '.' + domain;
  }

  function aiReferrerSource(value){
    if(!value) return '';
    try {
      var url = new URL(value, window.location.href);
      var host = url.hostname.toLowerCase().replace(/^www\./, '');
      var path = url.pathname.toLowerCase();
      if(hostMatches(host, 'bing.com') && (path === '/chat' || path.indexOf('/chat/') === 0)) return 'Microsoft Copilot';
      if(hostMatches(host, 'x.com') && (path === '/i/grok' || path.indexOf('/i/grok/') === 0)) return 'Grok';
      for(var i = 0; i < AI_HOST_SOURCES.length; i++){
        if(hostMatches(host, AI_HOST_SOURCES[i][0])) return AI_HOST_SOURCES[i][1];
      }
    } catch(e){}
    return '';
  }

  function aiSource(qs){
    var candidates = [
      qs.get('utm_source') || '',
      qs.get('utm_medium') || ''
    ].join(' ').toLowerCase();

    for(var i = 0; i < AI_SOURCES.length; i++){
      if(sourceAliasMatches(candidates, AI_SOURCES[i][0])) return AI_SOURCES[i][1];
    }
    return aiReferrerSource(document.referrer);
  }

  function aiSourceSlug(source){
    var values = {
      'ChatGPT': 'chatgpt',
      'Perplexity': 'perplexity',
      'Claude': 'claude',
      'Gemini': 'gemini',
      'Microsoft Copilot': 'microsoft-copilot',
      'You.com': 'you-com',
      'Poe': 'poe',
      'DeepSeek': 'deepseek',
      'Grok': 'grok',
      'Meta AI': 'meta-ai',
      'Mistral': 'mistral',
      'Kimi': 'kimi',
      'Qwen': 'qwen'
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
    var requestedService = cleanSlug(qs.get('service'));
    var serviceVertical = requestedService === 'ria-site-care' || requestedService === 'compliance-care'
      ? 'financial-services'
      : '';
    var vertical = cleanVerticalSource(qs.get('vertical') || qs.get('vertical_source') || serviceVertical) || pageVertical(cleanPath());
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
    hidden(form, 'vertical_source', cleanVerticalSource(qs.get('vertical') || qs.get('vertical_source')) || cleanVerticalSource(readSessionValue(SESSION_VERTICAL_KEY)) || pageVertical(cleanPath()));
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
      var verticalField = form.querySelector('[name="vertical_source"]');
      var currentAiSource = readSessionValue(SESSION_AI_KEY);
      var attribution = readStore();
      if(!Object.prototype.hasOwnProperty.call(SELF_REPORTED_SOURCES, source)) source = '';
      window.sessionStorage.setItem('tmn_pending_form', JSON.stringify({
        form: form.getAttribute('name') || form.getAttribute('id') || 'netlify-form',
        self_reported_source: source,
        vertical_source: cleanVerticalSource(verticalField ? verticalField.value : ''),
        booking_source: cleanBookingSource(readSessionValue(SESSION_BOOKING_SOURCE_KEY)),
        ai_provider: currentAiSource ? aiSourceSlug(currentAiSource) : '',
        first_landing_path: cleanFirstLandingPath(attribution.first_landing_path || ''),
        project_investment: projectFormChoice(form, 'project_investment'),
        project_scope: projectFormChoice(form, 'project_scope'),
        timeline: projectFormChoice(form, 'timeline'),
        decision_role: projectFormChoice(form, 'decision_role'),
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

  function analyticsEventParameters(props){
    var parameters = {
      event_category: 'tmn_growth',
      event_label: cleanTrackingValue(props.label || props.form || props.href || cleanPath())
    };

    var provider = cleanSlug(props.provider || '');
    var landingPath = cleanTrackingValue(props.landing_path || '');
    var leadForm = cleanSlug(props.form || '');
    var selfReportedSource = cleanSlug(props.self_reported_source || '');
    var verticalSource = cleanVerticalSource(props.vertical_source || '');
    var bookingSourceValue = cleanBookingSource(props.booking_source || '');
    var firstLandingPath = cleanFirstLandingPath(props.first_landing_path || '');

    if(provider) parameters.ai_provider = provider;
    if(landingPath) parameters.landing_path = landingPath;
    if(leadForm) parameters.lead_form = leadForm;
    if(selfReportedSource) parameters.self_reported_source = selfReportedSource;
    if(verticalSource) parameters.vertical_source = verticalSource;
    if(bookingSourceValue) parameters.booking_source = bookingSourceValue;
    if(firstLandingPath) parameters.first_landing_path = firstLandingPath;

    return parameters;
  }

  function sendEvent(name, props, options){
    props = props || {};
    options = options || {};
    props.page = cleanPath();

    try {
      if(window.fathom) window.fathom.trackEvent(name);
    } catch(e){}

    try {
      if(window.gtag){
        var googleParameters = analyticsEventParameters(props);
        if(options.ads === false && window.__TMN_GA4_MEASUREMENT_ID__){
          googleParameters.send_to = window.__TMN_GA4_MEASUREMENT_ID__;
        }
        window.gtag('event', eventName(name), googleParameters);
      }
    } catch(e){}

    if(options.ads !== false){
      try {
        if(window.fbq) window.fbq('trackCustom', name.replace(/\s+/g, ''), props);
      } catch(e){}
    }
  }

  function sendConfirmedAdConversions(pending, confirmedProps){
    try {
      if(window.gtag){
        var googleParameters = analyticsEventParameters(confirmedProps || {});
        googleParameters.event_category = 'lead';
        // Qualification dimensions are scoped to this GA4 lead event only.
        // Revalidate after storage so modified tokens cannot leak free text.
        Object.keys(PROJECT_CHOICES).forEach(function(name){
          var choice = projectChoice(name, pending[name], pending.form);
          if(choice) googleParameters[name] = choice;
        });
        if(window.__TMN_GA4_MEASUREMENT_ID__){
          googleParameters.send_to = window.__TMN_GA4_MEASUREMENT_ID__;
          window.gtag('event', 'generate_lead', googleParameters);
        }
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
            self_reported_source: pending.self_reported_source || 'not-provided',
            vertical_source: pending.vertical_source || '',
            booking_source: pending.booking_source || '',
            provider: pending.ai_provider || '',
            first_landing_path: pending.first_landing_path || ''
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
          sendConfirmedAdConversions(pending, confirmedProps);
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
