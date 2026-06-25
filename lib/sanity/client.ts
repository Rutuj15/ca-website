import { createClient } from "next-sanity";

export const apiVersion = "2024-01-01";

// projectId is a public read-only value for published content, baked in as a
// build default — same pattern as GA / Formspree / Cal.com elsewhere in this
// repo. The env var remains an optional override.
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "g16uh3k7";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// NEXT_PUBLIC_* is inlined at build time, so this is resolved when the site
// builds. With a real projectId baked in, the blog is always configured, so the
// env var only needs setting to point the site at a different Sanity project.
export const isSanityConfigured = Boolean(projectId);

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});
