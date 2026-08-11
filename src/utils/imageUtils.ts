/**
 * Safely resolves an image URL string.
 * If the provided URL is missing, empty, or a placeholder like '[LINK]',
 * it gracefully falls back to a high-quality default image.
 */
export function resolveImageUrl(url: string | undefined, fallbackUrl: string): string {
  if (!url || typeof url !== 'string') return fallbackUrl;
  const trimmed = url.trim();
  if (trimmed === '' || trimmed === '#' || trimmed === '[LINK]' || trimmed.includes('[LINK]')) {
    return fallbackUrl;
  }
  return trimmed;
}
