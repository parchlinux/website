/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'fa'
  },
  reactStrictMode: true,
  output: "standalone"
};

export default nextConfig;
