/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required for GitHub Pages
    images: {
      unoptimized: true, // GitHub Pages does not support Next.js Image Optimization
    },
    basePath: '/BC-React-App', // Use your repo name here
    assetPrefix: '/BC-React-App/', // Ensures assets load correctly
  };

export default nextConfig;
