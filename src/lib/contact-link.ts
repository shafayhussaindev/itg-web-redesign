/**
 * Link to the Contact page carrying the page the visitor came from, so the
 * form can show "Regarding: <page>" and include it in the enquiry.
 *
 * Built with URL rather than string concatenation because the base href comes
 * from a content file and may or may not already carry a query (?topic=...).
 * Anything that is not a site path (mailto:, an external URL) is returned as-is.
 */
export function contactLink(href: string, about?: string): string {
  if (!href.startsWith('/') || !about) return href;
  const url = new URL(href, 'https://site.invalid');
  url.searchParams.set('about', about);
  return url.pathname + url.search + url.hash;
}
