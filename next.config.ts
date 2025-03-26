import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ["cdn.bannerbuzz.com"], // Add the allowed external image domain
  },
};

export default nextConfig;


