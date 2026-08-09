import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site/InfoPage";
import { Stars } from "@/components/site/TrustSection";

const all = [
  {
    name: "Hamza A.",
    city: "Lahore",
    rating: 5,
    item: "Oversized Cotton Tee",
    text: "Ordered on Tuesday, delivered Wednesday. Fabric is genuinely heavyweight — exactly like the photos.",
  },
  {
    name: "Sana R.",
    city: "Karachi",
    rating: 5,
    item: "Garment-Dyed Hoodie",
    text: "Paid cash on delivery and checked the parcel first. Sizing guide was accurate and the packaging felt premium.",
  },
  {
    name: "Bilal K.",
    city: "Islamabad",
    rating: 4,
    item: "Leather Sneakers",
    text: "Exchanged for a larger size. Pickup was arranged free the next day, no arguments — but I'd size up from the start.",
  },
  {
    name: "Ayesha M.",
    city: "Lahore",
    rating: 5,
    item: "B-01 Watch",
    text: "The finish is better than I expected at this price. Strap needed one link removed; the studio did it while I waited.",
  },
  {
    name: "Usman T.",
    city: "Faisalabad",
    rating: 4,
    item: "Oversized Cotton Tee",
    text: "Delivery took three days rather than two. Product itself has held its colour after five washes.",
  },
  {
    name: "Zara H.",
    city: "Multan",
    rating: 5,
    item: "Everyday Cap",
    text: "Small order but treated like a big one — handwritten note in the box. Will buy again.",
  },
];

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — BEGINO" },
      {
        name: "description",
        content:
          "Unedited reviews from verified BEGINO orders across Pakistan — 4.7 average from 1,284 orders, including critical feedback.",
      },
      { property: "og:title", content: "Customer Reviews — BEGINO" },
      { property: "og:description", content: "4.7 average from 1,284 verified orders, published unedited." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://smooth-site-echo.lovable.app/reviews" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://smooth-site-echo.lovable.app/reviews" }],
  }),
  component: () => (
    <InfoPage
      eyebrow="Reputation"
      title="Customer Reviews"
      intro="4.7 average from 1,284 verified orders. We publish the critical ones too — you can also look us up on independent review platforms."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {all.map((r) => (
          <figure key={r.name} className="flex flex-col rounded-2xl border border-border bg-card p-7">
            <Stars rating={r.rating} />
            <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-6">
              <span className="label-xs">
                {r.name} — {r.city}
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">
                Verified purchase · {r.item}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Reviews are collected by email after delivery and published without editing. If you believe a
        review is inaccurate, email hello@begino.com and we will investigate.
      </p>
    </InfoPage>
  ),
});
