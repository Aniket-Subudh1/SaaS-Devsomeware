import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'worldvectorlogo.com',
      'www.vectorlogo.zone',
      'www.svgrepo.com',
      'simpleicons.org',
      'upload.wikimedia.org',
      'cdn.jsdelivr.net',
      'worldvectorlogo.com',
      'cdn.worldvectorlogo.com',
    ]
  },
  };

export default nextConfig;
