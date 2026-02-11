const CACHE_NAME = "portfolio-cache-v2";

self.addEventListener("install", event => {
  self.skipWaiting(); // instantly replace old SW
});

self.addEventListener("activate", event => {
  event.waitUntil(clients.claim()); // update open tabs immediately
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        return response; // always latest from network
      })
      .catch(() => caches.match(event.request)) // fallback only when offline
  );
});