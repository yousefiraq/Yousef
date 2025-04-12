// service-worker.js
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("static-v2").then((cache) => {
            return cache.addAll([
                "/",
                "index.html",
                "manifest.json",
                "logo.png",
                "icon-192.png",
                "icon-512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
