"use client";

import dynamic from "next/dynamic";

const TaxRegimeCalculator = dynamic(() => import("./TaxRegimeCalculator"), { ssr: false });
const ITRChecklist = dynamic(() => import("./ITRChecklist"), { ssr: false });
const GSTRateFinder = dynamic(() => import("./GSTRateFinder"), { ssr: false });

export default function ClientTaxTools() {
  return (
    <>
      <section id="tax-calculator" className="mb-16 scroll-mt-24">
        <h2 className="mb-6 font-serif text-2xl font-bold text-navy">
          Old vs New Tax Regime Calculator
        </h2>
        <TaxRegimeCalculator />
      </section>

      <section id="itr-checklist" className="mb-16 scroll-mt-24">
        <h2 className="mb-6 font-serif text-2xl font-bold text-navy">
          ITR Document Checklist
        </h2>
        <ITRChecklist />
      </section>

      <section id="gst-rate-finder" className="mb-16 scroll-mt-24">
        <h2 className="mb-6 font-serif text-2xl font-bold text-navy">
          GST Rate Finder
        </h2>
        <GSTRateFinder />
      </section>
    </>
  );
}
