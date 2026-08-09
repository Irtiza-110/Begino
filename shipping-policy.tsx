import { createFileRoute } from "@tanstack/react-router";
import { InfoBlock, InfoPage } from "@/components/site/InfoPage";

export const Route = createFileRoute("/shipping-policy")({
  head: () => ({
    meta: [
      { title: "Shipping Policy — BEGINO" },
      {
        name: "description",
        content: "Delivery times, charges and cash-on-delivery details for BEGINO orders across Pakistan.",
      },
      { property: "og:title", content: "Shipping Policy — BEGINO" },
      { property: "og:description", content: "Delivery times and charges for orders across Pakistan." },
    ],
  }),
  component: () => (
    <InfoPage
      eyebrow="Customer Care"
      title="Shipping Policy"
      intro="We ship nationwide with cash on delivery available on every order."
    >
      <InfoBlock heading="Delivery times">
        <p>Lahore, Karachi & Islamabad: 1–2 working days.</p>
        <p>Other cities: 2–4 working days.</p>
        <p>Orders placed after 4pm are dispatched the next working day.</p>
      </InfoBlock>
      <InfoBlock heading="Charges">
        <p>Flat PKR 250 nationwide. Free on all orders above PKR 5,000.</p>
      </InfoBlock>
      <InfoBlock heading="Cash on delivery">
        <p>
          Available on every order. Please keep the exact amount ready and inspect your parcel before
          paying the courier.
        </p>
      </InfoBlock>
    </InfoPage>
  ),
});
