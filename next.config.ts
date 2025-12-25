import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  // No basePath needed with custom domain
  trailingSlash: true,
  images: {
    // Unoptimized images for static export
    unoptimized: true,
  },
};

export default nextConfig;
