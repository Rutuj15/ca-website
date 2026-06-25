import { revalidatePath, revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";

// Belt-and-suspenders on-demand revalidation, called by a Sanity webhook.
// NOTE: with no R2 incremental cache enabled (see open-next.config.ts) this is
// not load-bearing — blog pages already fetch fresh via cache: "no-store". It
// becomes the proper invalidation trigger the day R2 caching is turned on.
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const expected = process.env.SANITY_REVALIDATE_SECRET;

  // If a secret is configured, require it; if not configured, allow open
  // (freshness already doesn't depend on this endpoint).
  if (expected && secret !== expected) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    revalidatePath("/blog");
    revalidatePath("/blog/[slug]", "page");
    revalidateTag("posts", "max");
    return Response.json({ revalidated: true });
  } catch (error) {
    return Response.json(
      { revalidated: false, error: String(error) },
      { status: 500 },
    );
  }
}
