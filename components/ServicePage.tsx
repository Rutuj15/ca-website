import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";
import FAQAccordion from "@/components/FAQAccordion";

export interface ServiceSection {
  heading: string;
  content: string;
  listItems?: string[];
}

export interface ServicePageProps {
  title: string;
  description: string;
  sections: ServiceSection[];
  ctaText?: string;
  faqs?: { question: string; answer: string }[];
}

export default function ServicePage({
  title,
  description,
  sections,
  ctaText = "Contact the firm",
  faqs,
}: ServicePageProps) {
  const paragraphs = description.split("\n\n");

  return (
    <>
      {/* Hero */}
      <section className="bg-navy px-4 py-16 text-white md:py-20">
        <div className="mx-auto max-w-content">
          <h1 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-navy-100">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-content space-y-12">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
                {section.heading}
              </h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-gray-700">
                {section.content}
              </p>
              {section.listItems && section.listItems.length > 0 && (
                <ul className="mt-4 max-w-3xl space-y-2">
                  {section.listItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold px-4 py-12 md:py-16">
        <div className="mx-auto max-w-content text-center">
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
            {ctaText}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-navy-dark">
            Reach out for a no-obligation conversation about your requirements.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>
              <Button
                variant="outline"
                className="border-navy bg-transparent text-navy hover:bg-navy hover:text-white"
              >
                <Phone className="size-4" />
                {CONTACT.phone}
              </Button>
            </a>
            <a href={`mailto:${CONTACT.email}`}>
              <Button
                variant="outline"
                className="border-navy bg-transparent text-navy hover:bg-navy hover:text-white"
              >
                <Mail className="size-4" />
                {CONTACT.email}
              </Button>
            </a>
            <Link href="/contact">
              <Button className="bg-navy text-white hover:bg-navy-light">
                Contact Form
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      {faqs && faqs.length > 0 && (
        <section className="px-4 py-12 md:py-16">
          <div className="mx-auto max-w-content">
            <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqs} />
          </div>
        </section>
      )}
    </>
  );
}
