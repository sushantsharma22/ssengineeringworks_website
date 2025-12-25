// Configuration for S.S. Engineering Works website
// Deployed on GitHub Pages with custom domain: ssengineeringworkshp.com

export const SITE_URL = 'https://ssengineeringworkshp.com';

// No basePath needed with custom domain (root-level routing)
export const BASE_PATH = '';

// Helper function to get asset paths (simplified for custom domain)
export function getAssetPath(path: string): string {
  // Ensure path starts with /
  return path.startsWith('/') ? path : `/${path}`;
}
