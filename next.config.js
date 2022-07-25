/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
};

module.exports = nextConfig;
