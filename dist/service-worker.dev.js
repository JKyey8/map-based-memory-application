"use strict";

var staticCacheName = "site-static";
var assets = ['/', "/assests/styles/index.css", "/views/pages/index.ejs", "/assests/styles/nav.css", "/views/partials/nav.ejs", "/assests/scripts/dist/index.js", "/manifest.json", "/assests/styles/dist/index.css", "/assests/styles/dist/nav.css", "/icons/apple-icon-180.png", "/icons/apple-splash-1242-2208.jpg", "icons/manifest-icon-192.maskable.png", "icons/manifest-icon-512.maskable.png"]; // install service worker

self.addEventListener("install", function (evt) {
  console.log("service worker has been installed");
  evt.waitUntil(caches.open(staticCacheName).then(function (cache) {
    console.log("caching assets");
    cache.addAll(assets);
  }));
}); // activate service woeker

self.addEventListener("activate", function (evt) {
  console.log('service worker has ben activated');
}); //fetch event

self.addEventListener('fetch', function (evt) {
  evt.respondWith(caches.match(evt.request).then(function (cahceRes) {
    return cahceRes || fetch(evt.request);
  }));
});