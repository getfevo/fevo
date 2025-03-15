import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  poweredByHeader: false, // Remove the X-Powered-By header
  headers: async () => [
    {
      // Apply these headers to all routes
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store, max-age=0',
        },
      ],
    },
  ],
};

export default nextConfig;
