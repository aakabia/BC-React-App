/** @type {import('next').NextConfig} */
const { GenerateSW } = require("workbox-webpack-plugin");

const nextConfig = {
  output: "export", // Required for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js Image Optimization
  },
  basePath: "/BC-React-App", // Replace with your GitHub repo name
  assetPrefix: "/BC-React-App/", // Replace with your GitHub repo name

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Add Workbox plugin to handle caching and service worker generation
      config.plugins.push(
        new GenerateSW({
          // Make sure this file exists and contains the required config
          globDirectory: "out/", // Location of build output
          globPatterns: ["**/*.{html,js,css,png,jpg,svg,woff2}"], // Match assets you want to cache
          swDest: "public/sw.js", // Output location for service worker
          runtimeCaching: [
            {
              urlPattern: /.*\.(?:js|css|html|json|png|jpg|svg|woff2)/, // Regex for asset types
              handler: "CacheFirst", // Cache-first strategy for assets
              options: {
                cacheName: "assets-cache",
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 30, // Cache assets for 30 days
                },
              },
            },
          ],
        })
      );
    }
    return config;
  },

};