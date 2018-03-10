(function($) {
  "use strict"; // Start of use strict

  // Vide - Video Background Settings
  $('body').vide({
    mp4: "../../assets/mp4/bg.mp4",
    poster: "../../assets/img/bg-mobile-fallback.jpg"
  }, {
    posterType: 'jpg'
  });

})(jQuery); // End of use strict

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-115492223-1');

(function(d, w, c) {
  w.ChatraID = 'BxQG4nXgEq2g9uKQx';
  var s = d.createElement('script');
  w[c] = w[c] || function() {
      (w[c].q = w[c].q || []).push(arguments);
  };
  s.async = true;
  s.src = (d.location.protocol === 'https:' ? 'https:': 'http:')
  + '//call.chatra.io/chatra.js';
  if (d.head) d.head.appendChild(s);
})(document, window, 'Chatra');

