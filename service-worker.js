const staticCacheName = 'site-static-v2.00.1';
const dynamicCacheName = 'site-dynamic-v2.00.1';
const assets = [

'/',
"/assests/styles/dist/index.css",
"/assests/styles/dist/bottom-nav.css",
"/assests/styles/dist/navbar-responsive.css",
"/assests/styles/dist/top-nav.css",
"/assests/styles/dist/searchbar.css",
"/assests/scripts/dist/index.js",


"/assests/styles/dist/jokes.css",
"/assests/styles/dist/pictures.css",
"/assests/scripts/dist/page-transition.js",
"/assests/scripts/dist/searchbar.js",
"/assests/scripts/dist/navbar.js",



"/views/pages/index.ejs", 
"/views/pages/pictures.ejs",
"/views/pages/inside-jokes.ejs",
"/views/pages/offline-fallback.ejs",
"/views/pages/404,ejs",


"/views/partials/bottom-nav.ejs",
"/views/partials/top-nav.ejs", 
"/views/partials/searchbar.ejs", 

"/manifest.json",

"/icons/apple-icon-180.png",
"/icons/apple-splash-1242-2208.jpg",
"icons/manifest-icon-192.maskable.png",
"icons/manifest-icon-512.maskable.png",
"/assests/scripts/dist/sw.js",
"/assests/images/map-marker.png",

 ];





// install event
self.addEventListener('install', evt => {
  console.log('service worker installed');
self.skipWaiting();
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener('activate', evt => {
  console.log('service worker activated');


 evt.waitUntil(
caches.keys().then(keys => {



return Promise.all(keys.filter(key => key !== staticCacheName && key !== dynamicCacheName  ).map(key => caches.delete(key)))

})



)
});
// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
caches.match(evt.request).then(cacheRes => {

return cacheRes || fetch(evt.request).then(fetchRes => {

return caches.open(dynamicCacheName).then(cache => {
cache.put(evt.request.url, fetchRes.clone() );
return fetchRes;
})


});



}).catch(() => {
caches.match("/views/pages/offline-fallback.ejs")


})



);
});