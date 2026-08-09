import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Men", to: "/men" },
      { label: "Women", to: "/women" },
      { label: "Shoes", to: "/shoes" },
      { label: "Watches", to: "/watches" },
      { label: "Accessories", to: "/accessories" },
      { label: "Sale", to: "/sale" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { label: "Contact Us", to: "/contact" },
      { label: "Track Order", to: "/track-order" },
      { label: "Shipping Policy", to: "/shipping-policy" },
      { label: "Return & Refund", to: "/returns" },
      { label: "FAQ", to: "/faq" },
      { label: "Reviews", to: "/reviews" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Our Story", to: "/our-story" },
      { label: "Careers", to: "/careers" },
      { label: "Terms & Conditions", to: "/terms" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Trust & Security", to: "/security" },
    ],
  },
] as const;

export function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <section className="bg-olive text-olive-foreground">
      <div className="wrap flex flex-col items-start gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 items-center gap-5">
          <Mail className="hidden h-8 w-8 shrink-0 stroke-[1.25] sm:block" />
          <div className="min-w-0">
            <h2 className="section-title">Stay in the loop</h2>
            <p className="mt-1 text-sm text-olive-foreground/75">
              Join our newsletter and get 10% off your first order.
            </p>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!email.trim()) return;
            toast.success("You're subscribed. Check your inbox for the code.");
            setEmail("");
          }}
          className="flex w-full max-w-md"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            aria-label="Email address"
            className="min-w-0 flex-1 rounded-l-full border border-transparent bg-background px-5 py-3 text-sm text-foreground outline-none transition-colors duration-200 focus:border-ink"
          />
          <button
            type="submit"
            className="label-xs shrink-0 rounded-r-full bg-ink px-7 text-ink-foreground transition-opacity duration-200 hover:opacity-85"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <span className="font-display text-2xl font-extrabold uppercase">Begino</span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/60">
            Every beginning has a story.
            <br />
            We're here to be a part of yours.
          </p>
          <div className="mt-6 flex gap-4 text-ink-foreground/60">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="https://instagram.com"
                aria-label="Social link"
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center border border-ink-foreground/20 transition-colors duration-200 hover:border-ink-foreground hover:text-ink-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="label-xs text-ink-foreground">{col.title}</h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-ink-foreground/60 transition-colors duration-200 hover:text-ink-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="label-xs">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/60">
            <li>hello@begino.com</li>
            <li>+92 300 1234567</li>
            <li>Lahore, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="wrap py-6 text-center text-xs text-ink-foreground/50">
          © {new Date().getFullYear()} BEGINO. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
