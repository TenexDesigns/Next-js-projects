/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    port: 4000 // Change the port to a different number
  },
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com'],
  },
}

module.exports = nextConfig


