/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname:  "ibb.co.com",
      },
      {
        protocol: "https",
        hostname:  "kommodo.ai"
        
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "kommodo.ai",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      
    ],
  },
};

export default nextConfig;