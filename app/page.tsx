import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Receipt,
  Calculator,
  Briefcase,
  Globe,
  BookOpen,
  FileSpreadsheet,
  Shield,
  Scale,
} from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { generateLocalBusinessSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "CA Sakshi Khedkar | Chartered Accountant in CSN (Aurangabad) | GST, Tax and Advisory",
  description:
    "CA Sakshi Khedkar is a practising Chartered Accountant offering GST, income tax, international taxation, Virtual CFO, audit, and company law services. Based in CSN (Aurangabad); serving clients across India remotely. ICAI No. 618819.",
  path: "/",
});

const services = [
  {
    icon: Building2,
    name: "Start a Business",
    description: "Company, LLP, partnership, and proprietorship registration",
    href: "/start-a-business",
  },
  {
    icon: Receipt,
    name: "GST Services",
    description:
      "GST registration, returns, reconciliation, and notice handling",
    href: "/gst-services",
  },
  {
    icon: Calculator,
    name: "Income Tax",
    description:
      "Tax planning and filing for individuals, HUFs, firms, and companies",
    href: "/income-tax",
  },
  {
    icon: Briefcase,
    name: "Virtual CFO",
    description:
      "Financial oversight, MIS, budgeting, and investor reporting",
    href: "/virtual-cfo",
  },
  {
    icon: Globe,
    name: "International Taxation",
    description: "DTAA, FEMA, transfer pricing, NRI advisory",
    href: "/international-taxation",
  },
  {
    icon: BookOpen,
    name: "Foreign Accounting",
    description:
      "Outsourced bookkeeping for UK, US, and Australian businesses",
    href: "/foreign-accounting",
  },
  {
    icon: FileSpreadsheet,
    name: "Accounting & Payroll",
    description: "Bookkeeping, MIS, payroll management",
    href: "/accounting-payroll",
  },
  {
    icon: Shield,
    name: "Audit & Assurance",
    description: "Statutory, internal, and tax audit",
    href: "/audit-assurance",
  },
  {
    icon: Scale,
    name: "Tax Litigation",
    description: "Assessment, CIT(A), and ITAT representation",
    href: "/tax-litigation",
  },
];

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light py-20 text-white md:py-28">
        <div className="mx-auto max-w-content px-4">
          <div className="flex flex-col items-center gap-10 md:items-start md:flex-row">
            <div className="max-w-3xl flex-1">
              <h1 className="font-serif text-3xl leading-snug font-bold md:text-5xl md:leading-tight">
              A Chartered Accountant in CSN (Aurangabad), with the range of a
              Big Four and the attention of a sole practitioner.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-100 md:text-lg">
              CA Sakshi Khedkar (ICAI No. 618819) is a practising Chartered
              Accountant based in CSN (Aurangabad), Maharashtra. Before starting
              independent practice, she worked in M&amp;A advisory at
              Transaction Square LLP in Pune, international taxation at Vialto
              Partners in Mumbai, and private equity at Guild Capital in Mumbai.
              That range of experience is now available to businesses and
              individuals across India.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-gold px-6 text-sm font-semibold text-navy transition-colors hover:bg-gold-dark"
              >
                Contact Us
              </Link>
              <Link
                href="/tax-tools"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-gold px-6 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
              >
                Tax Tools &rarr;
              </Link>
            </div>
            </div>
            <div className="shrink-0">
              <Image
                src="/images/profile.jpeg"
                alt="CA Sakshi Khedkar"
                width={280}
                height={320}
                className="rounded-2xl border-4 border-gold/30 object-cover shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services at a Glance */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-content px-4">
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
            Services at a Glance
          </h2>
          <p className="mt-2 max-w-xl text-gray-600">
            Full-spectrum financial and compliance services, delivered remotely
            across India.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-gold hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy transition-colors group-hover:bg-gold/10 group-hover:text-gold-dark">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-navy">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Uses This Practice */}
      <section className="bg-[#F8F9FA] py-16 md:py-24">
        <div className="mx-auto max-w-content px-4">
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
            Who Uses This Practice
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg">
            Salaried professionals filing complex returns. Business owners who
            have outgrown their current CA. Startups that need incorporation,
            compliance, and a finance function without a full-time CFO.
            Manufacturers and exporters in CSN (Aurangabad) and Marathwada
            managing GST, TDS, and audit. NRIs with Indian investments or
            property. Small and mid-sized businesses in the UK, US, or Australia
            looking to outsource their bookkeeping to India at a fraction of
            local costs.
          </p>
        </div>
      </section>

      {/* Why Financial Advice Has Been Inaccessible */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-content px-4">
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
            Why Financial Advice Has Been Inaccessible
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg">
            Most professional advice in India concentrates in the four metros.
            Businesses in Marathwada, growing fast and often manufacturing or
            export-linked, have typically chosen between national firms where
            their work is handled by a first-year trainee, and local
            practitioners who have never seen a cross-border transaction or a
            share acquisition. The firm was set up specifically to close that
            gap, and remote delivery means geography is no longer a constraint.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
          >
            Learn more about the practice &rarr;
          </Link>
        </div>
      </section>

      {/* Free Resources Callout */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-content px-4">
          <div className="rounded-xl border-l-4 border-gold bg-white p-8 shadow-sm md:p-10">
            <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
              Free Resources
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-700">
              The Tax Tools section has a live New vs Old Tax Regime Calculator,
              an ITR filing document checklist, and a GST rate finder. No
              sign-up required.
            </p>
            <Link
              href="/tax-tools"
              className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-gold px-6 text-sm font-semibold text-navy transition-colors hover:bg-gold-dark"
            >
              Explore Tax Tools &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
