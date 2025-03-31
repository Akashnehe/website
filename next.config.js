/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/website' : '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/website/' : '',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|webp)$/i,
      type: 'asset/resource',
    });
    return config;
  },
}

module.exports = nextConfig 