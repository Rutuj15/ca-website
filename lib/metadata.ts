import type { Metadata } from "next";

const BASE_URL = "https://casakshikhedkar.com";

export function generatePageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: `${title} | CA Sakshi Khedkar`,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${path}`,
      siteName: "CA Sakshi Khedkar",
      type: "website",
    },
    alternates: {
      canonical: `${BASE_URL}${path}`,
    },
  };
}
