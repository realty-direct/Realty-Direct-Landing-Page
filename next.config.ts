import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Define the base Next.js configuration
const baseConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  serverExternalPackages: ['@electric-sql/pglite'],
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Enable optimizations
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Redirects disabled for static exports to prevent Lighthouse SEO issues
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/en',
  //       permanent: true,
  //     },
  //   ];
  // },
};

// Initialize the Next-Intl plugin
const nextConfig = createNextIntlPlugin('./src/libs/i18n.ts')(baseConfig);
export default nextConfig;
