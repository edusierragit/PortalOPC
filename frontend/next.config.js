/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      
    ],
    domains: ['localhost'],
  },
  async rewrites() {
    if(process.env.NODE_ENV === 'development') {
      return {
        beforeFiles: [
          // These rewrites are checked after headers/redirects
          // and before all files including _next/public files which
          // allows overriding page files
          {
            source: '/api/:path*',
            destination: `${process.env.STRAPI_DEVELOP_API_URL}/api/:path*`, // Cambia esto por la URL de tu backend
            
          },
          {
            source: '/uploads/:path*',
            destination: `${process.env.STRAPI_DEVELOP_API_URL}/uploads/:path*`, // Cambia esto por la URL de tu backend
            
          },
        ],
      
      }
    }

    // En producción, no se realizará ninguna redirección
    return [];
  },
}

module.exports = nextConfig
