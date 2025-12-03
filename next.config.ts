import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ssengineeringworks_website',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
