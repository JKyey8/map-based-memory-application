if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function (reg) { return console.log("service worker registered", reg); })["catch"](function (err) { return console.log("service worker not registerd", err); });
}
