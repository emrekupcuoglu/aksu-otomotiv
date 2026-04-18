/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**.sslip.io",
      },
      {
        protocol: "https",
        hostname: "**.sslip.io",
      },
    ],
    // unoptimized: true,
  },
};

export default nextConfig;
