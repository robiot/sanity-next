import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Matches the behavior of `sanity dev` which sets styled-components to use the fastest way of inserting CSS rules in both dev and production. It's default behavior is to disable it in dev mode.
    SC_DISABLE_SPEEDY: "false",
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 480, 512, 564],
    remotePatterns: [
      { protocol: 'https', hostname: '**.cdninstagram.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' }
    ]
  },
};

export default nextConfig;
