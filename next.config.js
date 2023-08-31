/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.themoviedb.org/:path*', // Replace with your API URL
      },
    ];
  },
  images: {
    domains: ['image.tmdb.org', 'themoviedb.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tmdb.org',
        port: '',
        pathname: '/*',
      },
    ],
  },
}

module.exports = nextConfig
