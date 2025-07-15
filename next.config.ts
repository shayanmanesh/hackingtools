import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  distDir: 'out',
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
