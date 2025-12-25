// Configuration for handling different deployment environments
// Works for both Vercel and GitHub Pages

const isGitHubPages = process.env.NEXT_PUBLIC_DEPLOY_TARGET === 'github-pages';

export const BASE_PATH = isGitHubPages ? '/ssengineeringworks_website' : '';

export const SITE_URL = isGitHubPages 
  ? 'https://sushantsharma22.github.io/ssengineeringworks_website'
  : process.env.NEXT_PUBLIC_SITE_URL || 'https://ssengineeringworks.vercel.app';

// Helper function to get asset paths
export function getAssetPath(path: string): string {
  // Remove leading slash if present for consistency
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}
