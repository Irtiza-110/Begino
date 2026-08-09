import { createFileRoute } from "@tanstack/react-router";
import { InfoBlock, InfoPage } from "@/components/site/InfoPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — BEGINO" },
      { name: "description", content: "How BEGINO collects, uses and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — BEGINO" },
      { property: "og:description", content: "How we collect, use and protect your personal information." },
    ],
  }),
  component: () => (
    <InfoPage
      eyebrow="Information"
      title="Privacy Policy"
      intro="We collect the minimum information needed to get your order to your door."
    >
      <InfoBlock heading="What we collect">
        <p>
          Your name, delivery address, phone number and email — plus basic, anonymous analytics about
          how the site is used.
        </p>
      </InfoBlock>
      <InfoBlock heading="How we use it">
        <p>
          To process and deliver orders, handle returns, and — only if you opt in — send occasional
          emails about new drops.
        </p>
      </InfoBlock>
      <InfoBlock heading="What we never do">
        <p>We do not sell, rent or trade your personal information to anyone.</p>
      </InfoBlock>
      <InfoBlock heading="Your choices">
        <p>
          Email hello@begino.com to request a copy of your data, correct it, or have it deleted. Every
          newsletter has a one-click unsubscribe link.
        </p>
      </InfoBlock>
    </InfoPage>
  ),
});
