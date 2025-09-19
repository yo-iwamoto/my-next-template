const createWithNextIntl = require("next-intl/plugin");

const withNextIntl = createWithNextIntl();

/**
 * @type {import('next').NextConfig}
 */
module.exports = withNextIntl({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    typedRoutes: true,
    turbo: {},
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
});
