module.exports = {
    globDirectory: "out/", // Adjust based on your build output directory
    globPatterns: ["**/*.{html,js,css,png,jpg,svg,woff2}"], // Files to cache
    swDest: "public/sw.js", // Where to generate the service worker
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/your-github-pages-url\.github\.io\/BC-React-App\/.*/, 
        handler: "NetworkFirst", // Try network first, then cache fallback
        options: {
          cacheName: "pages-cache",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
          },
        },
      },
    ],
  };