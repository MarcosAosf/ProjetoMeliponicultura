const CACHE_NAME = 'melipona-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './assets/species/jatai.png',
  './assets/species/mandacaia.png',
  './assets/species/urucu.png',
  './assets/species/urucu_nordestina.png',
  './assets/species/tiuba.png',
  './assets/species/mirim.png',
  './assets/species/irai.png',
  './assets/species/bora.png',
  './assets/species/manduri.png',
  './assets/species/bugia.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  // Estratégia Network First para HTML para sempre pegar atualizações recentes
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).then((networkRes) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, networkRes.clone());
          return networkRes;
        });
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
