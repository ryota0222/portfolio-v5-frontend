// application activated
self.addEventListener('activate', (event) => {
  console.log('service worker: activate');

  // delete old caches
  event.waitUntil(() => {
    if ('clearAppBadge' in navigator) {
      navigator
        .clearAppBadge()
        .then(() => self.clients.claim())
        .catch((err) => console.log(err));
    }
  });
});
