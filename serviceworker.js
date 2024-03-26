var CACHE_NAME = "Moldpia";
var CACHED_URLS = [
  "index.html",
  "IconResHigh.png",
  "IconResLow.png",
  "IconResMid.png",
  "Manifest.json",
  "Moldpia.js",
  "uMOLDPIA.btn_login.Bitmaps.Bitmap.svg",
  "uMOLDPIA.btn_login.Bitmaps.Bitmap_1.svg",
  "uMOLDPIA.btn_search_magam.Bitmaps.Bitmap.svg",
  "uMOLDPIA.btn_search_nabpum.Bitmaps.Bitmap.svg",
  "uMOLDPIA.html",
  "uMOLDPIA.page_ctr.ButtonAppearance.CloseIcon.svg",
  "uMOLDPIA.page_ctr.ButtonAppearance.InsertIcon.svg",
  "uMOLDPIA.page_ctr.ButtonAppearance.ScrollNextIcon.svg",
  "uMOLDPIA.page_ctr.ButtonAppearance.ScrollPreviousIcon.svg",
  "uMOLDPIA.page_ctr.ButtonAppearance.TabListIcon.svg",
  "uMOLDPIA.pnl_magam_top.wbwtmsg.Picture.gif"
  ];

self.addEventListener('install', function(event) {
                event.waitUntil(
                                caches.open(CACHE_NAME).then(function(cache) {
                                return cache.addAll(CACHED_URLS);
                })
                                );
});


self.addEventListener('fetch',function(event) {
   event.respondWith(
     fetch(event.request).catch(function() {
                   return caches.match(event.request).then(function(response) {
       if (response) {
                                   return response;
       } else if (event.request.headers.get("accept").includes("text/html")) {
                                   return caches.match("index.html");
                   }
                   });
   })
                   );
});