const CACHE_NAME = "my-site-cache-v1";
const urlsToCache = [
  "/", // Cache the root HTML page
  "/styles.css", // Cache the CSS file
  "/script.js", // Cache the JavaScript file
  "/models/astro-transformed.glb", // Cache your first 3D model
  "/models/crystal-transformed.glb", // Cache your second 3D model
  "/models/helmet-transformed.glb", // Cache your third 3D model
  // Add any other static assets you want to cache
];

// Define a pattern for images and models you want to cache
const staticAssetsPattern = /\.(?:png|jpg|jpeg|gif|svg|webp|glb|obj)$/i; // Includes 3D model formats

// Install event - cache the necessary files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        await cache.addAll(urlsToCache);
        console.log("Static resources cached successfully");
      } catch (error) {
        console.error("Failed to cache some resources:", error);
      }
    })
  );
});

// Fetch event - serve cached resources or fallback to network for dynamic routes and models
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        // Serve from cache if the resource is already cached
        return response;
      }

      // Cache 3D models (using the pattern defined above)
      if (event.request.url.match(staticAssetsPattern)) {
        return caches.open(CACHE_NAME).then((cache) => {
          return fetch(event.request).then((networkResponse) => {
            // Cache the model after fetching it
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      }


      // For other resources (API requests, etc.), fetch from the network
      return fetch(event.request);
    })
  );
});
