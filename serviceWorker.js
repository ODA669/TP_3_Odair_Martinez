// Update cache names any time any of the cached files change.
const CACHE_NAME = "tp3-cache-v1";

// Add list of files to cache here.
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/music.html",
  "/tour.html",
  "/shop.html",
  "/contact.html",
  "/offline.html",
  "/sass.sass",
  "/music_sass.sass",
  "/tour_sass.sass",
  "/shop_sass.sass",
  "/contact_sass.sass",
  "/script.js",
  "/imgs/icons/apple_android/android-launchericon-192-192.png",
];

// Install event - precache static resources
self.addEventListener("install", (evt) => {
  console.log("[ServiceWorker] Install");
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Pre-caching offline page ");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener("activate", (evt) => {
  console.log("[ServiceWorker] Activate");
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve cached content or offline.html
self.addEventListener("fetch", (evt) => {
  console.log("[ServiceWorker] Fetch", evt.request.url);

  // Only handle page navigation requests
  if (evt.request.mode !== "navigate") {
    return;
  }

  evt.respondWith(
    fetch(evt.request).catch(() => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match("/offline.html");
      });
    })
  );
});
