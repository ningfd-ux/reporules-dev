/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://reporules.dev',
  generateRobotsTxt: false,
  outDir: './out',
};
