import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import ServicePage from "@/components/ServicePage";
import { auditAssurance, serviceMetadata } from "@/data/services";

const meta = serviceMetadata.auditAssurance;
export const metadata: Metadata = generatePageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
});

export default function AuditAssurancePage() {
  return <ServicePage {...auditAssurance} />;
}
