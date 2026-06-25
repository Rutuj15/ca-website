import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "./client";
import type { SanityImage } from "./queries";

const builder = createImageUrlBuilder({ projectId, dataset });

/** Build an optimized CDN URL for a Sanity image. Returns "" if none. */
export function urlFor(
  source: SanityImage | null | undefined,
  width = 1200,
): string {
  if (!source?.asset) return "";
  return builder
    .image(source)
    .auto("format")
    .fit("max")
    .width(width)
    .url();
}
