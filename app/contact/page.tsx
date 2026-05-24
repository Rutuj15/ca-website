import { generatePageMetadata } from "@/lib/metadata";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/constants";
import ClientContactForm from "@/components/ClientContactForm";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  MessageCircle,
  FileCheck,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CalWrapper from "./CalWrapper";

export const metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Get in touch with CA Sakshi Khedkar for GST, Income Tax, Audit, and Advisory services. Based in Chhatrapati Sambhajinagar, Maharashtra.",
  path: "/contact",
});

const contactInfoItems = [
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: CONTACT.address,
    href: undefined,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: CONTACT.hours,
    href: undefined,
  },
  {
    icon: Award,
    label: "ICAI Membership No.",
    value: CONTACT.icaiNo,
    href: undefined,
  },
];

const processSteps = [
  {
    icon: FileCheck,
    title: "Share Your Requirements",
    description:
      "Tell us about your business or personal tax needs via the form, WhatsApp, or a call.",
  },
  {
    icon: Handshake,
    title: "Get a Custom Proposal",
    description:
      "We assess your situation and provide a clear scope of work with transparent pricing.",
  },
  {
    icon: ArrowRight,
    title: "We Handle the Rest",
    description:
      "From documentation to filing, we manage everything while keeping you informed at every step.",
  },
];

export default function ContactPage() {
  const schema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="mb-12 text-center">
          <h1 className="font-serif text-3xl font-bold text-navy sm:text-4xl">
            Get In Touch
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Have a question or need professional assistance? Reach out and we
            will respond within 24 hours.
          </p>
        </section>

        {/* Two-Column: Contact Info + Form */}
        <section className="mb-16 grid gap-8 lg:grid-cols-2">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-navy">
              Contact Information
            </h2>
            <div className="space-y-4">
              {contactInfoItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy-50">
                    <item.icon className="size-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-navy hover:text-gold-dark transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2 className="mb-4 font-serif text-2xl font-bold text-navy">
              Send a Message
            </h2>
            <ClientContactForm />
          </div>
        </section>

        {/* WhatsApp Section */}
        <section className="mb-16 rounded-xl border border-whatsapp/20 bg-whatsapp/5 p-6 text-center sm:p-8">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-whatsapp/10">
            <MessageCircle className="size-7 text-whatsapp" />
          </div>
          <h2 className="mt-4 font-serif text-xl font-bold text-navy">
            Prefer WhatsApp?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Send us a message directly on WhatsApp for quick queries,
            document sharing, or to schedule a consultation.
          </p>
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button className="mt-4 bg-whatsapp text-white hover:bg-whatsapp/90" size="lg">
              <MessageCircle className="size-4" />
              Chat on WhatsApp
            </Button>
          </a>
        </section>

        {/* Cal.com Embed */}
        <section className="mb-16">
          <h2 className="mb-4 text-center font-serif text-2xl font-bold text-navy">
            Book a Consultation
          </h2>
          <p className="mx-auto mb-6 max-w-lg text-center text-sm text-muted-foreground">
            Schedule a free introductory call at a time that works for you.
          </p>
          <CalWrapper />
        </section>

        {/* Engagement Process */}
        <section className="mb-16">
          <h2 className="mb-8 text-center font-serif text-2xl font-bold text-navy">
            How It Works
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {processSteps.map((step, i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-gold/10">
                    <step.icon className="size-6 text-gold-dark" />
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                    Step {i + 1}
                  </div>
                  <h3 className="mt-2 font-serif text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Fees Note */}
        <section className="mb-16 rounded-lg border border-gold/20 bg-gold/5 p-6 text-center">
          <h3 className="font-serif text-lg font-semibold text-navy">
            Transparent Pricing
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
            Our fees are competitive and clearly communicated upfront. The
            initial consultation is complimentary. We believe in no surprises
            when it comes to billing.
          </p>
        </section>

        {/* Professional Enquiries */}
        <section className="text-center">
          <h2 className="font-serif text-2xl font-bold text-navy">
            Professional Enquiries
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            For business advisory, audits, or cross-border tax matters,
            please share details through the form above or email us directly.
            We work with businesses across India and internationally.
          </p>
          <Button className="mt-6 bg-navy hover:bg-navy-light" size="lg">
            <Link href="/contact" className="flex items-center gap-2">
              <Mail className="size-4" />
              Send an Enquiry
            </Link>
          </Button>
        </section>
      </div>
    </>
  );
}
