/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['lh3.googleusercontent.com']
  },
  env: {
    API_URL: process.env.API_URL,
    DEV_URL: process.env.DEV_URL
  }
}

module.exports = nextConfig
