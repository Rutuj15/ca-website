import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import ServicePage from "@/components/ServicePage";
import { companyLlpCompliance, serviceMetadata } from "@/data/services";

const meta = serviceMetadata.companyLlpCompliance;
export const metadata: Metadata = generatePageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
});

export default function CompanyLLPCompliancePage() {
  return <ServicePage {...companyLlpCompliance} />;
}
