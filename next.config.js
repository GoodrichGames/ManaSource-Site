/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    loader: "custom",
    imageSizes: [128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  turbopack: {
    rules: {
      "*.js": {
        condition: { path: /node_modules[\\/]phaser[\\/]src[\\/]/ },
        loaders: [{
          loader: "./scripts/phaser-feature-flags-loader.js",
          options: {
            WEBGL_RENDERER: true,
            CANVAS_RENDERER: true,
            FEATURE_SOUND: false,
            WEBGL_DEBUG: false,
            EXPERIMENTAL: false,
            PLUGIN_CAMERA3D: false,
            PLUGIN_FBINSTANT: false,
          },
        }],
      },
    },
  },
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "86400",
  },
}

module.exports = nextConfig
