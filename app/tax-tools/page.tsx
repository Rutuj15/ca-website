import { generatePageMetadata } from "@/lib/metadata";
import { generateWebApplicationSchema } from "@/lib/schema";
import ClientTaxTools from "@/components/tools/ClientTaxTools";
import { Calculator, ClipboardList, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = generatePageMetadata({
  title: "Tax Tools | New vs Old Regime Calculator, GST Rates, ITR Checklist | CA Sakshi Khedkar",
  description:
    "Free online tax tools: Old vs New Tax Regime Calculator, ITR Document Checklist, and GST Rate Finder. Built by CA Sakshi Khedkar.",
  path: "/tax-tools",
});

const tools = [
  { id: "tax-calculator", label: "Tax Regime Calculator", icon: Calculator },
  { id: "itr-checklist", label: "ITR Checklist", icon: ClipboardList },
  { id: "gst-rate-finder", label: "GST Rate Finder", icon: Package },
];

export default function TaxToolsPage() {
  const schema = generateWebApplicationSchema(
    "CA Sakshi Khedkar Tax Tools",
    "Free tax tools including Old vs New Regime Calculator, ITR Document Checklist, and GST Rate Finder."
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-12 text-center">
          <h1 className="font-serif text-3xl font-bold text-navy sm:text-4xl">
            Tax Tools: Run Your Own Numbers
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            These tools exist because the most common first question in any tax
            consultation is a calculation that should not require a meeting. Use
            them, share them, and return when you have a question they cannot
            answer.
          </p>
        </section>

        <nav className="mb-12 flex flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <a
              key={tool.id}
              href={`#${tool.id}`}
              className="inline-flex items-center gap-2 rounded-lg border border-navy/10 px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-navy-50"
            >
              <tool.icon className="size-4 text-gold" />
              {tool.label}
            </a>
          ))}
        </nav>

        <ClientTaxTools />

        <section className="rounded-xl bg-navy p-8 text-center text-white sm:p-12">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Need Personalised Tax Advice?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-navy-100">
            These tools provide general estimates. For accurate tax planning
            tailored to your situation, get in touch.
          </p>
          <Button
            className="mt-6 bg-gold text-navy hover:bg-gold-light"
            size="lg"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Contact CA Sakshi Khedkar
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </section>
      </div>
    </>
  );
}
