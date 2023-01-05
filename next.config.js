/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    loader: "custom",
    imageSizes: [640, 750, 828, 1080, 1200, 1920],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
