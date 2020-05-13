importScripts('/cache-polyfill.js');

var version = 'v1::';

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/client/views/index.html',
                '/client/styles/style.css',
                '/client/js/app.js',
            ]);
        })
    ); 
});

self.addEventListener('fetch', function (event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});