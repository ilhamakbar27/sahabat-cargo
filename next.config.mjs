/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "utfs.io",
        },
        {
          protocol: "https",
          hostname: "i.pravatar.cc",
        },
      ],
    },
  };
  
  export default nextConfig;
  