import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import ServicePage from "@/components/ServicePage";
import { gstServices, serviceMetadata } from "@/data/services";

const meta = serviceMetadata.gstServices;
export const metadata: Metadata = generatePageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
});

export default function GSTServicesPage() {
  return <ServicePage {...gstServices} />;
}
