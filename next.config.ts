import type { NextConfig } from 'next';

const basePath = process.env.GITHUB_ACTIONS === 'true'
  ? '/taipei-doge-confidentiality-portal'
  : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
