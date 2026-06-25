import Image from "next/image";
import Link from "next/link";
import {
  PortableText as RenderPortableText,
  type PortableTextComponents,
  type PortableTextProps,
} from "@portabletext/react";
import { urlFor } from "@/lib/sanity/image";
import type { SanityImage } from "@/lib/sanity/queries";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const image = value as SanityImage;
      const src = urlFor(image, 1000);
      if (!src) return null;
      return (
        <Image
          src={src}
          alt={image.alt || ""}
          width={1000}
          height={650}
          className="my-8 w-full rounded-lg"
        />
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 font-serif text-2xl font-bold text-navy md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-serif text-xl font-bold text-navy">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-gold pl-4 italic text-gray-700">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="my-4 leading-relaxed text-gray-700">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 list-disc space-y-2 pl-6 text-gray-700 marker:text-gold">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 list-decimal space-y-2 pl-6 text-gray-700 marker:text-gold">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = (value as { href?: string } | undefined)?.href;
      if (!href) return <>{children}</>;
      if (href.startsWith("http")) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-gold-dark underline hover:text-gold"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className="font-medium text-gold-dark underline hover:text-gold"
        >
          {children}
        </Link>
      );
    },
  },
};

export function PortableText({ value }: { value: PortableTextProps["value"] }) {
  return <RenderPortableText value={value} components={components} />;
}
