/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/how-it-works', destination: '/#how-it-works', permanent: false },
      { source: '/scenarios', destination: '/#scenarios', permanent: false },
      { source: '/get-the-app', destination: '/get-started', permanent: false },
      { source: '/faq', destination: '/#faq', permanent: false },
    ];
  },
};

export default nextConfig;
