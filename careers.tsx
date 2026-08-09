import { createFileRoute } from "@tanstack/react-router";
import { InfoBlock, InfoPage } from "@/components/site/InfoPage";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — BEGINO" },
      { name: "description", content: "Open roles at BEGINO in Lahore — retail, production and content." },
      { property: "og:title", content: "Careers — BEGINO" },
      { property: "og:description", content: "Open roles at BEGINO in Lahore, Pakistan." },
    ],
  }),
  component: () => (
    <InfoPage
      eyebrow="Careers"
      title="Work With Us"
      intro="Small team, high standards. If you care about the details more than the title, we'd like to meet you."
    >
      <InfoBlock heading="Open roles">
        <p>Production Assistant — Lahore, full time</p>
        <p>Customer Care Associate — Lahore, full time</p>
        <p>Content & Photography — Lahore, contract</p>
      </InfoBlock>
      <InfoBlock heading="How to apply">
        <p>
          Send your CV and a short note about what you'd change about our current range to
          careers@begino.com. We reply to every application.
        </p>
      </InfoBlock>
    </InfoPage>
  ),
});
