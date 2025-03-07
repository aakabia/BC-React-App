/** @type {import('next').NextConfig} */
const { GenerateSW } = require("workbox-webpack-plugin");

const nextConfig = {
  output: "export", // For exporting static files
  images: {
    unoptimized: true, // Disable Next.js Image Optimization (if needed for GitHub Pages)
  },
  basePath: "/BC-React-App", // Adjust for GitHub repo name
  assetPrefix: "/BC-React-App/", // Adjust for GitHub repo name

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Add Workbox plugin for caching and service worker generation
      config.plugins.push(
        new GenerateSW({
          swDest: "public/sw.js", // Service worker file output location
          runtimeCaching: [
            {
              urlPattern: /.*\.(?:js|css|html|json|png|jpg|svg|woff2)/, // Regex for matching assets
              handler: "CacheFirst", // Use CacheFirst strategy
              options: {
                cacheName: "assets-cache",
                expiration: {
                  maxEntries: 50, // Max 50 assets cached
                  maxAgeSeconds: 60 * 60 * 24 * 30, // Cache for 30 days
                },
              },
            },
          ],
          skipWaiting: true, // Ensure the service worker activates immediately
          clientsClaim: true, // Ensure service worker takes control of the page
          include: ["**/*.{html,js,css,png,jpg,svg,woff2}"], // Include these types of files
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;