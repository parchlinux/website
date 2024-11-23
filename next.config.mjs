/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'fa',
    localeDetection: false
  },
  reactStrictMode: true,
};

export default nextConfig;
