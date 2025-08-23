/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: false },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.scdn.co' },
      { protocol: 'https', hostname: 'is*.mzstatic.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' }
    ]
  }
}
module.exports = nextConfig
