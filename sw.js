// Keeps the app working without internet. Bump CACHE when the app files change.
const CACHE = "rengoring-v2";
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./firebase-config.js",
  "./vendor/firebase/firebase-app.js",
  "./vendor/firebase/firebase-auth.js",
  "./vendor/firebase/firebase-firestore.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(FILES.map((url) => new Request(url, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Serve from the cache straight away, and refresh the cache in the background
// so the next start picks up any new version. Only this site's own files are
// handled here; Firebase's network traffic goes straight through.
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(req, { ignoreSearch: true });
      const fresh = fetch(req)
        .then((res) => {
          if (res.ok) cache.put(req, res.clone());
          return res;
        })
        .catch(() => cached);
      event.waitUntil(fresh.catch(() => {}));
      return cached || fresh;
    })
  );
});
