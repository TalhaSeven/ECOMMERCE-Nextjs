/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["talhaseven.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.whitmorerarebooks.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
