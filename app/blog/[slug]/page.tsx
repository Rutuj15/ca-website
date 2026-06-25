import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import { isSanityConfigured } from "@/lib/sanity/client";
import { sanityFetch } from "@/lib/sanity/fetch";
import { postBySlugQuery, type BlogPost } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { PortableText } from "@/components/blog/PortableText";

export const dynamic = "force-dynamic";

// Render all post pages at runtime (client publishes new posts post-deploy).
export async function generateStaticParams() {
  return [];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = isSanityConfigured
    ? await sanityFetch<BlogPost | null>(postBySlugQuery, { slug })
    : null;
  if (!post) {
    return generatePageMetadata({
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
      path: "/blog",
    });
  }

  const meta = generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
  const ogImage = urlFor(post.coverImage, 1200);

  return ogImage
    ? {
        ...meta,
        openGraph: {
          ...(meta.openGraph ?? {}),
          type: "article",
          images: [{ url: ogImage }],
        },
      }
    : meta;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = isSanityConfigured
    ? await sanityFetch<BlogPost | null>(postBySlugQuery, { slug })
    : null;
  if (!post) notFound();

  const cover = urlFor(post.coverImage, 1600);

  return (
    <article>
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <Link
            href="/blog"
            className="text-sm font-semibold text-gold-light transition-colors hover:text-gold"
          >
            &larr; Back to Blog
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-navy-100">
            {post.category && (
              <span className="font-semibold uppercase tracking-wider text-gold-light">
                {post.category}
              </span>
            )}
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          </div>
          <h1 className="mt-3 font-serif text-3xl font-bold leading-snug md:text-4xl">
            {post.title}
          </h1>
          {post.authorName && (
            <p className="mt-3 text-sm text-navy-100">By {post.authorName}</p>
          )}
        </div>
      </section>

      {cover && (
        <div className="mx-auto -mt-10 max-w-4xl px-4">
          <Image
            src={cover}
            alt={post.coverImage?.alt || post.title}
            width={1600}
            height={900}
            className="aspect-[16/9] w-full rounded-xl object-cover shadow-lg"
          />
        </div>
      )}

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <PortableText value={post.body} />
          <div className="mt-12 border-t border-gray-100 pt-8">
            <Link
              href="/blog"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-gold px-6 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
