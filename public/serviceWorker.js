self.addEventListener('fetch', function (event) {});

self.addEventListener('activate', (event) => {
  // バッジがあれば削除
  if (typeof navigator !== 'undefined' && 'clearAppBadge' in navigator) {
    navigator
      .clearAppBadge()
      .then(() => {})
      .catch((err) => console.log(err));
  }
});
