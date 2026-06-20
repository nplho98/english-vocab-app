// Service Worker — 讓 App 離線也能打開
const CACHE = "vocab-app-v1.7.5";
const ASSETS = [
  "./",
  "index.html",
  "style.css",
  "dict.js",
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
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request).catch(() => {
        // 離線且快取沒命中：導覽請求一律回退到已快取的 index.html
        if (e.request.mode === "navigate") return caches.match("index.html");
      });
    })
  );
});
