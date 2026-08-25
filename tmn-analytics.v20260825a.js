(function(){
  var MEASUREMENT_ID = 'G-DYJWPYC8BR';

  if(window.__TMN_GA4_BOOTSTRAPPED__) return;
  window.__TMN_GA4_BOOTSTRAPPED__ = true;
  window.__TMN_GA4_MEASUREMENT_ID__ = MEASUREMENT_ID;

  window.dataLayer = window.dataLayer || [];
  if(!window.gtag){
    window.gtag = function(){ window.dataLayer.push(arguments); };
  }

  var hasGoogleTag = Array.prototype.some.call(document.scripts, function(script){
    return (script.src || '').indexOf('googletagmanager.com/gtag/js') !== -1;
  });

  if(!hasGoogleTag){
    var tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(MEASUREMENT_ID);
    document.head.appendChild(tag);
  }

  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, { send_page_view: true });
})();
