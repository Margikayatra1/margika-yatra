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
      { protocol: "http", hostname: "localhost:3000" },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    styledJsx: true,
  },
}

export default nextConfig
