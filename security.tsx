import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Lock, Globe, FileText, Phone, Bug } from "lucide-react";
import { InfoBlock, InfoPage } from "@/components/site/InfoPage";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Trust & Security — How BEGINO Protects You" },
      {
        name: "description",
        content:
          "How BEGINO secures your connection and data: HTTPS everywhere, no stored card details, a real Lahore studio, plain-language policies and a working support line.",
      },
      { property: "og:title", content: "Trust & Security — BEGINO" },
      {
        property: "og:description",
        content: "HTTPS everywhere, no stored cards, a real address and policies you can read before you buy.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://smooth-site-echo.lovable.app/security" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://smooth-site-echo.lovable.app/security" }],
  }),
  component: SecurityPage,
});

const checks = [
  {
    icon: Lock,
    title: "Encrypted connection",
    copy: "Every page — including checkout — is served over HTTPS. Look for the padlock in your address bar.",
  },
  {
    icon: Globe,
    title: "One official domain",
    copy: "We only sell from begino.com. Any other spelling or extension is not us; report it to us if you see one.",
  },
  {
    icon: ShieldCheck,
    title: "No stored card data",
    copy: "Card payments are handled by our payment provider. We never see or store full card numbers.",
  },
  {
    icon: FileText,
    title: "Published policies",
    copy: "Shipping, returns, refunds, terms and privacy are all linked in the footer of every page.",
  },
  {
    icon: Phone,
    title: "Reachable support",
    copy: "hello@begino.com, +92 300 1234567 (phone and WhatsApp), and a studio you can visit in person.",
  },
  {
    icon: Bug,
    title: "Report a problem",
    copy: "Found a security issue or a suspicious copy of our store? Email security@begino.com and we respond within 48 hours.",
  },
];

function SecurityPage() {
  return (
    <InfoPage
      eyebrow="Transparency"
      title="Trust & Security"
      intro="Our own commitments, in plain language. These are statements made by BEGINO about how we run this store."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {checks.map((c) => (
          <div key={c.title} className="rounded-2xl border border-border bg-card p-7">
            <c.icon className="h-6 w-6 stroke-[1.25]" />
            <h2 className="label-xs mt-6">{c.title}</h2>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.copy}</p>
          </div>
        ))}
      </div>

      <InfoBlock heading="Business details">
        <p>
          BEGINO Apparel — Gulberg III, Lahore, Pakistan. Studio open Monday to Saturday, 11am–8pm.
          Orders are packed and dispatched from this address.
        </p>
      </InfoBlock>

      <InfoBlock heading="How to verify us before buying">
        <p>
          Check the padlock and the exact spelling of the domain, read our{" "}
          <Link to="/shipping-policy" className="link-underline text-foreground">
            shipping
          </Link>
          ,{" "}
          <Link to="/returns" className="link-underline text-foreground">
            return
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="link-underline text-foreground">
            privacy
          </Link>{" "}
          pages, then message us on WhatsApp — a real person will reply. You can also read{" "}
          <Link to="/reviews" className="link-underline text-foreground">
            customer reviews
          </Link>
          .
        </p>
      </InfoBlock>

      <InfoBlock heading="Offers you can sanity-check">
        <p>
          We discount up to 30% during seasonal sales and we say so on the product page with the original
          price shown. We do not run 90%-off "clearance" offers, and we never ask for payment outside
          checkout or cash on delivery.
        </p>
      </InfoBlock>

      <InfoBlock heading="Your data">
        <p>
          We collect only what an order needs: name, address, phone and email. We do not sell it. Full
          detail is in our{" "}
          <Link to="/privacy" className="link-underline text-foreground">
            privacy policy
          </Link>
          .
        </p>
      </InfoBlock>
    </InfoPage>
  );
}
