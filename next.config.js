/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost','test.dhanz.me'],
  },
}

module.exports = nextConfig
