import { sanityClient } from "./client";

/**
 * Fetch from Sanity with `cache: "no-store"`.
 *
 * The site has no R2 incremental cache enabled on Cloudflare (see
 * open-next.config.ts), so on-demand revalidation / ISR are unreliable here.
 * No-store guarantees a freshly published post shows up on the next request,
 * and Sanity's CDN keeps the latency low.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  return sanityClient.fetch<T>(query, params, { cache: "no-store" });
}
