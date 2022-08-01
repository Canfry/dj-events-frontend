/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

const nextConfigImage = {
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfigImage;
