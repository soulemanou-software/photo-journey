/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
    ],
    // Increase timeout for external image fetching
    minimumCacheTTL: 60,
  },
  // Handle development environment
  ...(process.env.NODE_ENV === 'development' && {
    // Add development-specific settings if needed
    experimental: {
      // Optimize image loading in development
      serverComponentsExternalPackages: ['sharp'],
    },
  }),
};

module.exports = nextConfig;
