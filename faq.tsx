import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do your sizes run?",
    a: "Our tees and hoodies are intentionally oversized with a drop shoulder. If you prefer a regular fit, take one size down from your usual.",
  },
  {
    q: "Do you offer cash on delivery?",
    a: "Yes — on every order, anywhere in Pakistan. Inspect your parcel before paying the courier.",
  },
  {
    q: "How long does delivery take?",
    a: "1–2 working days in Lahore, Karachi and Islamabad, and 2–4 working days elsewhere.",
  },
  {
    q: "Can I exchange for a different size?",
    a: "Yes, within 7 days of delivery on unworn items with tags. We arrange free pickup in major cities.",
  },
  {
    q: "How should I wash my tees?",
    a: "Cold machine wash inside out, no bleach, and dry flat in shade. Garment-dyed cotton keeps its colour far longer this way.",
  },
  {
    q: "Are the watches water resistant?",
    a: "The B-01 and B-02 are rated to 5 ATM — fine for rain and handwashing, not for swimming or diving.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Sizing, Delivery & Returns | BEGINO" },
      {
        name: "description",
        content: "Answers to common BEGINO questions about sizing, cash on delivery, shipping times and care.",
      },
      { property: "og:title", content: "FAQ — BEGINO" },
      { property: "og:description", content: "Sizing, delivery, returns and product care answered." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: () => (
    <InfoPage eyebrow="Customer Care" title="FAQ" intro="The questions we get asked most.">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-sm font-medium">{f.q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </InfoPage>
  ),
});
