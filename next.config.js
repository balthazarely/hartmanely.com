/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'edtsdexdyhlyelxbjzjw.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'hei-cms.vercel.app',
      },
    ],
  },
}

module.exports = nextConfig
