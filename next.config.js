/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
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