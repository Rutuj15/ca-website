import { generatePageMetadata } from "@/lib/metadata";
import { isSanityConfigured } from "@/lib/sanity/client";
import { sanityFetch } from "@/lib/sanity/fetch";
import { postsQuery, type BlogPostCard } from "@/lib/sanity/queries";
import { PostCard } from "@/components/blog/PostCard";

export const dynamic = "force-dynamic";

export const metadata = generatePageMetadata({
  title: "Blog",
  description:
    "Insights on taxation, GST, accounting, and business advisory from CA Sakshi Khedkar.",
  path: "/blog",
});

export default async function BlogIndexPage() {
  const posts = isSanityConfigured
    ? await sanityFetch<BlogPostCard[]>(postsQuery)
    : [];

  return (
    <>
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light py-16 text-white md:py-24">
        <div className="mx-auto max-w-content px-4">
          <h1 className="font-serif text-3xl font-bold md:text-5xl">
            Insights &amp; Updates
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-100 md:text-lg">
            Practical guidance on tax planning, GST, accounting, and running a
            business in India.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-content px-4">
          {posts.length === 0 ? (
            <p className="text-gray-600">No posts yet — please check back soon.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
