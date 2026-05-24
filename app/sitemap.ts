import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/gst-services",
    "/income-tax",
    "/international-taxation",
    "/start-a-business",
    "/company-llp-compliance",
    "/accounting-payroll",
    "/virtual-cfo",
    "/foreign-accounting",
    "/audit-assurance",
    "/tax-litigation",
    "/tax-tools",
    "/contact",
  ];

  return pages.map((path) => ({
    url: `https://casakshikhedkar.com${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : 0.8,
  }));
}
