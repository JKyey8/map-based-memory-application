

const staticCacheName = "site-static-v1";
const dynamicCache = "site-dynamic-v1"
const assets = [

'/',
"/assests/styles/index.css", 

 "/views/pages/index.ejs", 
"/assests/styles/nav.css",
"/views/partials/nav.ejs",
"/assests/scripts/dist/index.js",
"/manifest.json",
"/assests/styles/dist/index.css",
"/assests/styles/dist/nav.css",
"/icons/apple-icon-180.png",
"/icons/apple-splash-1242-2208.jpg",
"icons/manifest-icon-192.maskable.png",
"icons/manifest-icon-512.maskable.png",
"/assests/scripts/dist/sw.js"

 ];



// install service worker

self.addEventListener("install", (evt) => {

console.log("service worker has been installed")
evt.waitUntil(
caches.open(staticCacheName).then(cache => {
console.log("caching assets")
cache.addAll(assets)

}))

});


// activate service woeker

self.addEventListener("activate", (evt) => {
console.log('service worker has ben activated')
evt.waitUntil(
caches.keys().then((keys) => {

return Promise.all(keys
.filter(key => key !== staticCacheName)
.map(key => caches.delete(key))
)
})
);
});


//fetch event
self.addEventListener('fetch', (evt) => {
evt.respondWith(
caches.match(evt.request).then(cahceRes => {

return cahceRes || fetch(evt.request).then(fetchRes => {
    return caches.open(dynamicCache).then(cache => {
    cache.put(evt.request.url, fetchRes.clone());
return fetchRes;


})

});


})


);

});

