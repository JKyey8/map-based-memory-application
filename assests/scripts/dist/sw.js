if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function (registration) {
        console.log('Registration successful, scope is:', registration.scope);
    })["catch"](function (error) {
        console.log('Service worker registration failed, error:', error);
    });
}
var forceReload = function () {
    return navigator.serviceWorker
        .getRegistrations()
        .then(function (registrations) {
        return Promise.all(registrations.map(function (r) { return r.unregister(); }));
    })
        .then(function () { return window.location.reload(); });
};
