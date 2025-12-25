import type { NextConfig } from "next";

// Detect deployment environment
// Set NEXT_PUBLIC_DEPLOY_TARGET=github-pages when deploying to GitHub Pages
const isGitHubPages = process.env.NEXT_PUBLIC_DEPLOY_TARGET === 'github-pages';

const nextConfig: NextConfig = {
  // Only use static export for GitHub Pages
  output: isGitHubPages ? 'export' : undefined,
  // Only add basePath for GitHub Pages
  basePath: isGitHubPages ? '/ssengineeringworks_website' : '',
  trailingSlash: true,
  images: {
    // Only unoptimize images for GitHub Pages (static export)
    unoptimized: isGitHubPages ? true : false,
  },
};

export default nextConfig;
