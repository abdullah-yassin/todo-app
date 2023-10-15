/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth/login",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextwo.com",
        port: "",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "robohash.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
