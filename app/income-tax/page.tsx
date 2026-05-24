import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import ServicePage from "@/components/ServicePage";
import { incomeTax, serviceMetadata } from "@/data/services";

const meta = serviceMetadata.incomeTax;
export const metadata: Metadata = generatePageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
});

export default function IncomeTaxPage() {
  return <ServicePage {...incomeTax} />;
}
