const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: false,
  images: {
    unoptimized: true,
  },
};

module.exports = withContentlayer(nextConfig);
