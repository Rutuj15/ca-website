import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import type { BlogPostCard } from "@/lib/sanity/queries";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function PostCard({ post }: { post: BlogPostCard }) {
  const cover = urlFor(post.coverImage, 800);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md"
    >
      {cover ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-navy-50">
          <Image
            src={cover}
            alt={post.coverImage?.alt || post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-gradient-to-br from-navy to-navy-light" />
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          {post.category && (
            <span className="font-semibold uppercase tracking-wider text-gold-dark">
              {post.category}
            </span>
          )}
          <time className="text-gray-500" dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
        </div>
        <h3 className="mt-2 font-serif text-lg font-bold text-navy transition-colors group-hover:text-gold-dark">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-gold-dark">
          Read more &rarr;
        </span>
      </div>
    </Link>
  );
}
