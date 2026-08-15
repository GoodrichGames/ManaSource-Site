/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.manasourcegame.com',
  generateRobotsTxt: true,
  outDir: 'out',
  exclude: ['/articles/patchnotes-2026-02-23'],
}
