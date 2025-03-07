/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required for GitHub Pages
    images: {
      unoptimized: true, // GitHub Pages does not support Next.js Image Optimization
    },
    basePath: '/BC-React-App', // Replace with your GitHub repo name
    assetPrefix: '/BC-React-App/', // Replace with your GitHub repo name

  };

export default nextConfig;
