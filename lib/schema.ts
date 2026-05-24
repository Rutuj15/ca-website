import { CONTACT, SITE_NAME } from "./constants";

const BASE_URL = "https://casakshikhedkar.com";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AccountingService"],
    name: SITE_NAME,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chhatrapati Sambhajinagar",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    telephone: CONTACT.phone,
    email: CONTACT.email,
    openingHours: "Mo-Sa 10:00-18:00",
    priceRange: "$$",
    areaServed: "India",
    url: BASE_URL,
  };
}

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "CA Sakshi Khedkar",
    jobTitle: "Chartered Accountant",
    alumniOf: {
      "@type": "Organization",
      name: "Institute of Chartered Accountants of India (ICAI)",
    },
    award: "WICASA Treasurer, CA Finals distinctions",
    knowsAbout: [
      "GST",
      "Income Tax",
      "International Taxation",
      "Audit",
      "M&A Advisory",
      "Accounting",
    ],
    sameAs: [],
  };
}

export function generateServiceSchema(
  name: string,
  serviceType: string,
  description: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    provider: {
      "@type": "Person",
      name: "CA Sakshi Khedkar",
    },
    areaServed: "India",
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateWebApplicationSchema(
  name: string,
  description: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    provider: {
      "@type": "Person",
      name: "CA Sakshi Khedkar",
    },
  };
}
