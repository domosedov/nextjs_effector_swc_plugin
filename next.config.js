// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    swcPlugins: [
      [
        "@effector/swc-plugin",
        {
          factories: ["patronum", "@farfetched/core", "./factory"],
        },
      ],
    ],
  },
};

module.exports = nextConfig;
