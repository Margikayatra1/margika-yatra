/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'www.margikayatra.com' },
      { protocol: 'https', hostname: 'margika-yatra-orpin.vercel.app' },
    ],
    formats: ['image/avif', 'image/webp'],
    // Mobile-first breakpoints — ensures small images for mobile visitors
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 384],
    // Cache optimized images for 30 days
    minimumCacheTTL: 2592000,
  },
  compiler: {
    styledJsx: true,
  },
}

export default nextConfig
