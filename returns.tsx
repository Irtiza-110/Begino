import { createFileRoute } from "@tanstack/react-router";
import { InfoBlock, InfoPage } from "@/components/site/InfoPage";

export const Route = createFileRoute("/returns")({
  head: () => ({
    meta: [
      { title: "Return & Refund Policy — BEGINO" },
      {
        name: "description",
        content: "7 day easy returns and exchanges on unworn BEGINO items with tags attached.",
      },
      { property: "og:title", content: "Return & Refund Policy — BEGINO" },
      { property: "og:description", content: "7 day easy returns on unworn items with tags attached." },
    ],
  }),
  component: () => (
    <InfoPage
      eyebrow="Customer Care"
      title="Return & Refund"
      intro="If something doesn't fit, we make it easy — no arguments, no restocking fees."
    >
      <InfoBlock heading="The window">
        <p>7 days from delivery, on unworn and unwashed items with original tags attached.</p>
      </InfoBlock>
      <InfoBlock heading="How to start">
        <p>
          WhatsApp your order number to +92 300 1234567 and we'll arrange a free pickup for exchanges
          within Lahore, Karachi and Islamabad.
        </p>
      </InfoBlock>
      <InfoBlock heading="Refunds">
        <p>
          Processed within 5 working days of the parcel reaching our studio, to your original payment
          method or as a bank transfer for COD orders.
        </p>
      </InfoBlock>
      <InfoBlock heading="Not eligible">
        <p>Sale items marked final, worn footwear, and watches with removed protective film.</p>
      </InfoBlock>
    </InfoPage>
  ),
});
