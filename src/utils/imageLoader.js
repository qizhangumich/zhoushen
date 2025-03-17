// Helper function to get the correct image URL with basePath for GitHub Pages
export function getImageUrl(src) {
  // In development, use the path as is
  if (process.env.NODE_ENV === 'development') {
    return src;
  }
  
  // In production, add the basePath (/zhoushen) for GitHub Pages
  // Remove any leading slash to avoid double slashes
  const path = src.startsWith('/') ? src.substring(1) : src;
  return `/zhoushen/${path}`;
} 