/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: "standalone",
    images: {
        unoptimized: true,
      },
  };
  module.exports = nextConfig;
  