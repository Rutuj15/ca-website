import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import ServicePage from "@/components/ServicePage";
import { virtualCFO, serviceMetadata } from "@/data/services";

const meta = serviceMetadata.virtualCFO;
export const metadata: Metadata = generatePageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
});

export default function VirtualCFOPage() {
  return <ServicePage {...virtualCFO} />;
}
