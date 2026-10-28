const CACHE_NAME = 'melipona-v6';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './assets/species/jatai.jpg',
  './assets/species/jatai_ninho.jpg',
  './assets/species/mandacaia.jpg',
  './assets/species/mandacaia_ninho.jpg',
  './assets/species/urucu.jpg',
  './assets/species/urucu_ninho.jpg',
  './assets/species/urucu_nordestina.jpg',
  './assets/species/urucu_nordestina_ninho.jpg',
  './assets/species/tiuba.jpg',
  './assets/species/tiuba_ninho.jpg',
  './assets/species/mirim.jpg',
  './assets/species/mirim_ninho.jpg',
  './assets/species/irai.jpg',
  './assets/species/irai_ninho.jpg',
  './assets/species/bora.jpg',
  './assets/species/bora_ninho.jpg',
  './assets/species/manduri.jpg',
  './assets/species/manduri_ninho.jpg',
  './assets/species/bugia.jpg',
  './assets/species/bugia_ninho.jpg'
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
