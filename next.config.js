const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["github.com", "avatars.githubusercontent.com"],
  },
};

module.exports = withContentlayer(nextConfig);
