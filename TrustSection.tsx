import { Link } from "@tanstack/react-router";
import { ShieldCheck, MapPin, FileText, Headphones, Star, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const signals = [
  {
    icon: ShieldCheck,
    title: "Secure checkout",
    copy: "Every page is served over HTTPS with an encrypted connection. We never store card details.",
  },
  {
    icon: MapPin,
    title: "Registered business",
    copy: "BEGINO Apparel — Gulberg III, Lahore, Pakistan. Walk-in studio open Mon–Sat, 11am–8pm.",
  },
  {
    icon: FileText,
    title: "Transparent policies",
    copy: "Shipping, returns, refunds and privacy written in plain language — no hidden fees.",
  },
  {
    icon: Headphones,
    title: "Real humans",
    copy: "Email, phone and WhatsApp answered by our Lahore team within one working day.",
  },
];

export const reviews = [
  {
    name: "Hamza A.",
    city: "Lahore",
    rating: 5,
    text: "Ordered the oversized tee on Tuesday, delivered Wednesday. Fabric is genuinely heavyweight — exactly like the photos.",
  },
  {
    name: "Sana R.",
    city: "Karachi",
    rating: 5,
    text: "Paid cash on delivery and checked the parcel first. Sizing guide was accurate, and the packaging felt premium.",
  },
  {
    name: "Bilal K.",
    city: "Islamabad",
    rating: 4,
    text: "Exchanged a hoodie for a larger size. Pickup was arranged free the next day, no arguments about it.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-background">
      <div className="wrap py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <p className="label-xs text-muted-foreground">Why you can trust us</p>
          <h2 className="font-display mt-3 text-3xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-4xl">
            Nothing hidden
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            We publish who we are, where we are and how we handle your data and your money — so you can
            check before you buy, not after.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="rounded-2xl border border-border bg-card p-7">
              <s.icon className="h-6 w-6 stroke-[1.25]" />
              <h3 className="label-xs mt-6">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.copy}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8">
          <Link to="/security" className="label-xs group inline-flex items-center gap-2">
            Read our trust &amp; security page
            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating ? "h-3.5 w-3.5 fill-foreground text-foreground" : "h-3.5 w-3.5 text-border"
          }
        />
      ))}
    </div>
  );
}

export function ReviewsPreview() {
  return (
    <section className="wrap py-16 md:py-24">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="section-title">What customers say</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            4.7 average from 1,284 verified orders. Unedited, including the critical ones.
          </p>
        </div>
        <Link to="/reviews" className="label-xs group inline-flex items-center gap-2">
          All reviews
          <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1.5" />
        </Link>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 100}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-colors duration-200 hover:border-olive">
              <Stars rating={r.rating} />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                “{r.text}”
              </blockquote>
              <figcaption className="label-xs mt-6">
                {r.name} — {r.city}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
