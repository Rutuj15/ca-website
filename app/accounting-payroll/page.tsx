import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import ServicePage from "@/components/ServicePage";
import { accountingPayroll, serviceMetadata } from "@/data/services";

const meta = serviceMetadata.accountingPayroll;
export const metadata: Metadata = generatePageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
});

export default function AccountingPayrollPage() {
  return <ServicePage {...accountingPayroll} />;
}
