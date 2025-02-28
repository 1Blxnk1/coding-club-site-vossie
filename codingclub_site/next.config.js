/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/coding-club-site-vossie',
  assetPrefix: '/coding-club-site-vossie/',
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;