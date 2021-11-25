"use strict";

var staticCacheName = 'site-static-v1';
var dynamicCacheName = 'site-dynamic-v1';
var assets = ['/', "/assests/styles/dist/index.css", "/assests/styles/dist/bottom-nav.css", "/assests/styles/dist/navbar-responsive.css", "/assests/styles/dist/top-nav.css", "/assests/scripts/dist/index.js", "/assests/scripts/dist/searchbar.js", "/assests/styles/dist/searchbar.css", "/views/pages/index.ejs", "/views/pages/pictures.ejs", "/views/partials/bottom-nav.ejs", "/views/partials/top-nav.ejs", "/manifest.json", "/icons/apple-icon-180.png", "/icons/apple-splash-1242-2208.jpg", "icons/manifest-icon-192.maskable.png", "icons/manifest-icon-512.maskable.png", "/assests/scripts/dist/sw.js", "/assests/images/map-marker.png"]; // install event

self.addEventListener('install', function (evt) {
  //console.log('service worker installed');
  evt.waitUntil(caches.open(staticCacheName).then(function (cache) {
    console.log('caching shell assets');
    cache.addAll(assets);
  }));
}); // activate event

self.addEventListener('activate', function (evt) {
  //console.log('service worker activated');
  evt.waitUntil(caches.keys().then(function (keys) {
    //console.log(keys);
    return Promise.all(keys.filter(function (key) {
      return key !== staticCacheName && key !== dynamicCacheName;
    }).map(function (key) {
      return caches["delete"](key);
    }));
  }));
}); // fetch event

self.addEventListener('fetch', function (evt) {
  //console.log('fetch event', evt);
  evt.respondWith(caches.match(evt.request).then(function (cacheRes) {
    return cacheRes || fetch(evt.request).then(function (fetchRes) {
      return caches.open(dynamicCacheName).then(function (cache) {
        cache.put(evt.request.url, fetchRes.clone());
        return fetchRes;
      });
    });
  }));
});