"use strict";

// install service worker
self.addEventListener("install", function (evt) {
  console.log("service worker has been installed");
}); // activate service woeker

self.addEventListener("activate", function (evt) {
  console.log('service worker has ben activated');
});