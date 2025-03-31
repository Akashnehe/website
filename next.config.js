/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/website' : '',
  images: {
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
  distDir: 'out',
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
}

module.exports = nextConfig 