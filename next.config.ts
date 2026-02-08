import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  experimental: {
    srcPath: "./src",
    extract: {
      sourceLocale: "ja",
    },
    messages: {
      path: "./messages",
      format: "json",
      locales: "infer",
    },
  },
});

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    typedRoutes: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
} satisfies NextConfig;

export default withNextIntl(nextConfig);
