import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import ServicePage from "@/components/ServicePage";
import { taxLitigation, serviceMetadata } from "@/data/services";

const meta = serviceMetadata.taxLitigation;
export const metadata: Metadata = generatePageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
});

export default function TaxLitigationPage() {
  return <ServicePage {...taxLitigation} />;
}
