import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Allow Behold / SnapWidget Instagram embed images in V1
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: '**.behold.so',
      },
    ],
  },
}

export default nextConfig
