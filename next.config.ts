import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization is important for SEO and performance
  images: {
    unoptimized: false, // Enable image optimization
    formats: ['image/webp'], // Serve WebP images for better performance
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Responsive sizes
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1 week cache
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**',
      }
    ],
  },
  
  // Improve SEO with these headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirect configuration for SEO
  async redirects() {
    return [
      // Example redirects for common patterns
      {
        source: '/minecraft-hosting',
        destination: '/plans',
        permanent: true,
      },
      {
        source: '/game-servers',
        destination: '/plans',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/about#contact-us',
        permanent: true,
      },
    ];
  },
  
  // Enable strict mode for better development
  reactStrictMode: true,
};

export default nextConfig;
