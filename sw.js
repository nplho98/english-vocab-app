// Service Worker — 讓 App 離線也能打開
const CACHE = "vocab-app-v1.21.1";
const ASSETS = [
  "./",
  "index.html",
  "course.html",
  "sync.js",
  "style.css",
  "course.css",
  "speech.js?v=1.20.0",
  "course.js?v=1.21.0",
  "dict.js",
  "starter-pack.js",
  "pack-jhs1.js",
  "pack-jhs2.js",
  "pack-jhs3.js",
  "pack-sent-ph.js",
  "course-pack.js?v=1.20.0",
  "course-pack-p2a.js?v=1.20.0",
  "course-pack-p2b.js?v=1.20.0",
  "course-pack-p3.js?v=1.20.0",
  "course-vocab-base.js?v=1.20.0",
  "course-vocab-extra.js?v=1.20.0",
  "course-phonetics.js?v=1.20.0",
  "course-pack-finalize.js?v=1.20.0",
  "app.js",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(e.request, copy));
        return response;
      }).catch(() => caches.match(e.request).then((cached) => cached || caches.match("index.html")))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request).catch(() => Response.error());
    })
  );
});
