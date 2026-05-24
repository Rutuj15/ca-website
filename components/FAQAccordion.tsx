"use client";

import dynamic from "next/dynamic";

const Accordion = dynamic(
  () =>
    import("@/components/ui/accordion").then((mod) => ({
      default: function AccordionWrapper({
        items,
      }: {
        items: { question: string; answer: string }[];
      }) {
        return (
          <mod.Accordion className="mt-6 max-w-3xl">
            {items.map((faq) => (
              <mod.AccordionItem key={faq.question}>
                <mod.AccordionTrigger>{faq.question}</mod.AccordionTrigger>
                <mod.AccordionContent>
                  <p>{faq.answer}</p>
                </mod.AccordionContent>
              </mod.AccordionItem>
            ))}
          </mod.Accordion>
        );
      },
    })),
  { ssr: false }
);

export default function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return <Accordion items={items} />;
}
