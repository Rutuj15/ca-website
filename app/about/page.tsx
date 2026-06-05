import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { generatePersonSchema } from "@/lib/schema";
import TimelineItem from "@/components/TimelineItem";

export const metadata = generatePageMetadata({
  title:
    "About CA Sakshi Khedkar | Chartered Accountant | CSN (Aurangabad), Maharashtra",
  description:
    "CA Sakshi Khedkar (ICAI No. 618819) is a Chartered Accountant based in CSN (Aurangabad). Previously with Transaction Square LLP (M&A Advisory), Vialto Partners (International Taxation), and Guild Capital (Private Equity) in Pune and Mumbai.",
  path: "/about",
});

const timelineEntries = [
  {
    company: "Transaction Square LLP, Pune",
    role: "M&A Advisory",
    description:
      "Transaction Square is one of India's specialist mid-market M&A advisory firms. Sakshi worked on buy-side and sell-side mandates, financial due diligence, valuation models, and transaction structuring. This phase of her career produced a working understanding of how businesses are valued, how deals are structured, and what sophisticated acquirers look for in a target company's financials. Most practising CAs, if they acquire this knowledge at all, do so only after decades.",
  },
  {
    company: "Vialto Partners, Mumbai",
    role: "International Taxation",
    description:
      "Vialto Partners is a global professional services firm focused on workforce solutions and global mobility taxation. Sakshi worked on international tax engagements involving DTAA interpretation, FEMA compliance, cross-border compensation structuring, and tax equalisation for internationally mobile employees. This is the background that enables the firm to advise NRIs, foreign nationals working in India, and Indian companies with overseas operations on positions that most local practitioners refer out.",
  },
  {
    company: "Guild Capital, Mumbai",
    role: "Investor Relations and Private Equity",
    description:
      "Guild Capital is a Mumbai-based private equity and investment advisory firm. Sakshi's work here covered investor relations, fund-level financial analysis, and engagement with institutional investors. Working in private equity means understanding how capital evaluates risk, return, governance, and compliance. That perspective is directly useful when advising business owners planning to raise funds, bring in investors, or plan an eventual exit.",
  },
  {
    company: "Khandelwal Jain and Co., CSN (Aurangabad)",
    role: "Articleship",
    description:
      "Sakshi completed her ICAI articleship at Khandelwal Jain and Co. in CSN (Aurangabad), one of the city's established CA firms. Her articleship covered statutory audit, income tax, GST, and routine compliance across clients in manufacturing, trading, and professional services. It is where she learned the ground-level discipline of Indian tax and audit practice.",
  },
];

export default function AboutPage() {
  const personSchema = generatePersonSchema();

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light py-16 text-white md:py-24">
        <div className="mx-auto max-w-content px-4">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center">
            <div className="flex-1">
              <h1 className="font-serif text-3xl font-bold md:text-5xl">
                About CA Sakshi Khedkar
              </h1>
            </div>
            <div className="shrink-0">
              <Image
                src="/images/profile.jpeg"
                alt="CA Sakshi Khedkar"
                width={220}
                height={220}
                className="rounded-2xl border-4 border-gold/30 object-cover shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Opening paragraph */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-content px-4">
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              There is a version of financial clarity available to well-resourced
              businesses in Mumbai and Delhi that most CSN (Aurangabad)
              entrepreneurs have never experienced. The problems are the same on
              both sides: taxation, compliance, fund-raising, cross-border
              deals. What differs is access to advisors with real exposure to
              those problems. CA Sakshi Khedkar set up this practice to close
              that gap.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="bg-[#F8F9FA] py-16 md:py-20">
        <div className="mx-auto max-w-content px-4">
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
            Qualifications
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg">
            Sakshi qualified as a Chartered Accountant in November 2022,
            clearing the Final examination with distinctions in Strategic
            Financial Management, Financial Reporting, and Risk Management.
            These are three of the more technically demanding papers in the ICAI
            curriculum. Her ICAI membership number is 618819.
          </p>
        </div>
      </section>

      {/* Professional Career */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-content px-4">
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
            Professional Career
          </h2>
          <div className="mt-8 max-w-3xl">
            {timelineEntries.map((entry, index) => (
              <TimelineItem
                key={entry.company}
                company={entry.company}
                location={
                  entry.company.includes("Pune")
                    ? "Pune"
                    : entry.company.includes("Mumbai")
                      ? "Mumbai"
                      : "CSN (Aurangabad)"
                }
                role={entry.role}
                description={entry.description}
                isLast={index === timelineEntries.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Record */}
      <section className="bg-[#F8F9FA] py-16 md:py-20">
        <div className="mx-auto max-w-content px-4">
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
            Leadership Record
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg">
            In 2021, Sakshi served as Treasurer of WICASA, the Western India
            Chartered Accountants Students&apos; Association, managing a corpus
            of over Rs. 10 lakh, overseeing more than 100 events, and serving a
            student community of over 1,000. The branch was recognised as the
            second-best WICASA nationally that year.
          </p>
        </div>
      </section>

      {/* Beyond Accounting */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-content px-4">
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
            Beyond Accounting
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg">
            Sakshi holds a Senior Diploma in Bharatnatyam and performed her
            Arangetaram in Aug&apos;2025, the formal solo debut performance
            that marks the completion of classical dance training. She now also
            trains students in Bharatnatyam. Sustaining a classical art form
            through years of professional training requires the same patience and
            precision that compliance and advisory work demands.
          </p>
        </div>
      </section>

      {/* Now Practising Independently + CTA */}
      <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light py-16 text-white md:py-24">
        <div className="mx-auto max-w-content px-4">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl font-bold md:text-3xl">
              Now Practising Independently
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-100 md:text-lg">
              Having trained in transaction advisory, global tax, and private
              equity across Pune and Mumbai, Sakshi returned to CSN (Aurangabad)
              to practise independently. The decision was deliberate. CSN
              (Aurangabad)&apos;s economy is growing in manufacturing, exports,
              startups, and real estate, and the professional services available
              to that economy have not kept pace. Most work is delivered
              remotely and the practice serves clients across India, but the
              physical presence in CSN (Aurangabad) matters: it means clients in
              Marathwada have a CA they can actually meet.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-10 items-center justify-center rounded-lg bg-gold px-6 text-sm font-semibold text-navy transition-colors hover:bg-gold-dark"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
