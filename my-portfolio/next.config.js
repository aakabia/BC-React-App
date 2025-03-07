/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js Image Optimization
  },
  basePath: "/BC-React-App", // Replace with your GitHub repo name
  assetPrefix: "/BC-React-App/", // Replace with your GitHub repo name

  async headers() {
    return [
      {
        source: "/:all*(jpg|jpeg|png|gif|webp|mp3|wav|js|css)", // Match file extensions for caching
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache assets for 1 year
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
