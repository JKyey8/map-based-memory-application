// install service worker

self.addEventListener("install", (evt) => {

console.log("service worker has been installed")

});


// activate service woeker

self.addEventListener("activate", (evt) => {
console.log('service worker has ben activated')

});

