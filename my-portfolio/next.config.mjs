/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required for GitHub Pages
    images: {
      unoptimized: true, // GitHub Pages does not support Next.js Image Optimization
    },
    basePath: '/my-portfolio', // Use your repo name here
    assetPrefix: '/my-portfolio/', // Ensures assets load correctly
  };

export default nextConfig;
