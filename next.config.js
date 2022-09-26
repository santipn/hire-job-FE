/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost','hire.dhanz.me'],
  },
  outputFileTracing: false,
}

module.exports = nextConfig
