import { createFileRoute } from "@tanstack/react-router";
import { InfoBlock, InfoPage } from "@/components/site/InfoPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — BEGINO" },
      { name: "description", content: "The terms that apply when you shop with BEGINO." },
      { property: "og:title", content: "Terms & Conditions — BEGINO" },
      { property: "og:description", content: "The terms that apply when you shop with BEGINO." },
    ],
  }),
  component: () => (
    <InfoPage
      eyebrow="Information"
      title="Terms & Conditions"
      intro="By placing an order with BEGINO you agree to the following terms."
    >
      <InfoBlock heading="Orders">
        <p>
          All orders are subject to stock availability and confirmation of the order price. We may
          cancel an order and refund you in full if an item becomes unavailable.
        </p>
      </InfoBlock>
      <InfoBlock heading="Pricing">
        <p>
          Prices are listed in Pakistani Rupees and include applicable taxes. We reserve the right to
          correct pricing errors before dispatch.
        </p>
      </InfoBlock>
      <InfoBlock heading="Product accuracy">
        <p>
          We photograph every product in natural light, but screen colours vary slightly between
          devices. Minor variation is not considered a defect.
        </p>
      </InfoBlock>
      <InfoBlock heading="Intellectual property">
        <p>
          The BEGINO name, wordmark, photography and copy on this site are our property and may not be
          reproduced without written permission.
        </p>
      </InfoBlock>
    </InfoPage>
  ),
});
