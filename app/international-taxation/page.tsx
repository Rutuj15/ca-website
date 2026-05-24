import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import ServicePage from "@/components/ServicePage";
import { internationalTaxation, serviceMetadata } from "@/data/services";

const meta = serviceMetadata.internationalTaxation;
export const metadata: Metadata = generatePageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
});

export default function InternationalTaxationPage() {
  return <ServicePage {...internationalTaxation} />;
}
