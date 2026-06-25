import type { PortableTextProps } from "@portabletext/react";

export interface SanityImage {
  _type?: "image";
  asset?: { _ref: string; _type: "reference" };
  alt?: string;
}

export type PostBody = PortableTextProps["value"];

export interface BlogPostCard {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: SanityImage | null;
  category: string | null;
  authorName: string | null;
  publishedAt: string;
}

export interface BlogPost extends BlogPostCard {
  body: PostBody;
}

// Project only the fields the listing/cards need (keeps the payload small).
const CARD_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  category,
  authorName,
  publishedAt
`;

// Future-dated posts are hidden until their publishedAt date (via now()).
export const postsQuery = `*[
  _type == "post"
  && defined(slug.current)
  && publishedAt <= now()
] | order(publishedAt desc)[0...60] { ${CARD_FIELDS} }`;

export const postBySlugQuery = `*[
  _type == "post"
  && slug.current == $slug
  && publishedAt <= now()
][0]{ ${CARD_FIELDS}, body }`;

export const slugsQuery = `*[
  _type == "post"
  && defined(slug.current)
  && publishedAt <= now()
].slug.current`;
