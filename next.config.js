/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    loader: "custom",
  },
};

// const withPlugins = require('next-compose-plugins');
// const withOptimizedImages = require('next-optimized-images');

// module.exports = withPlugins([[withOptimizedImages]], {
//   images: {
//     disableStaticImages: true,
//   },
// })