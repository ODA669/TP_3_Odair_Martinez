const CACHE_NAME = "tp3-cache-v3";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/music.html",
  "/tour.html",
  "/shop.html",
  "/contact.html",
  "/offline.html",
  "/sass.css",
  "/music_sass.css",
  "/tour_sass.css",
  "/shop_sass.css",
  "/contact_sass.css",
  "/script.js",
  "/validation.js",
  "/imgs/icons/apple_android/android-launchericon-192-192.png",
  "/imgs/group/endead.jpg",
  "/imgs/group/sanguinem.jpg",
  "/imgs/group/morkar.jpg",
  "/imgs/group/labelua.jpg",
  "/imgs/group/sorath.jpg",
];

// Install - cache all files
self.addEventListener("install", (evt) => {
  console.log("[ServiceWorker] Install");
  evt.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[ServiceWorker] Pre-caching files");
        return cache.addAll(FILES_TO_CACHE);
      })
      .catch((err) => {
        console.error("[ServiceWorker] Failed to cache files:", err);
      })
  );
  self.skipWaiting();
});

// Activate - delete old caches
self.addEventListener("install", (evt) => {
  console.log("[ServiceWorker] Install");
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        FILES_TO_CACHE.map((file) => cache.add(file))
      ).then((results) => {
        results.forEach((r, i) => {
          if (r.status === "rejected") {
            console.warn(
              "[ServiceWorker] Failed to cache:",
              FILES_TO_CACHE[i],
              r.reason
            );
          }
        });
      });
    })
  );
  self.skipWaiting();
});

// Fetch - serve cached content or offline page
self.addEventListener("fetch", (evt) => {
  console.log("[ServiceWorker] Fetch", evt.request.url);

  evt.respondWith(
    caches.match(evt.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Servir desde cache si existe
      }
      return fetch(evt.request)
        .then((response) => {
          // Opcional: agregar nuevas respuestas al cache dinámico
          return response;
        })
        .catch(() => {
          if (evt.request.mode === "navigate") {
            return caches.match("/offline.html"); // Página offline solo para navegación
          }
        });
    })
  );
});
