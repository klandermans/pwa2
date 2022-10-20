var cacheName = 'hello-pwa';
var filesToCache = [
  '/pwa2/',
  '/pwa2/index.html',
  '/pwa2/css/style.css',
  '/pwa2/js/main.js',
  '/pwa2/js/jquery.js'

];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
