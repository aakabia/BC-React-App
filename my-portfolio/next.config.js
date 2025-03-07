/** @type {import('next').NextConfig} */
const { GenerateSW } = require("workbox-webpack-plugin");

const nextConfig = {
  output: "export", // For exporting static files
  images: {
    unoptimized: true, // Disable Next.js Image Optimization (if needed for GitHub Pages)
  },
  basePath: "/BC-React-App", // Adjust for GitHub repo name
  assetPrefix: "/BC-React-App/", // Adjust for GitHub repo name
};

module.exports = nextConfig;