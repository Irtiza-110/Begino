import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { TrustStrip, ReviewsPreview } from "@/components/site/TrustSection";
import { bestSellers, categories } from "@/lib/products";
import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import ig4 from "@/assets/ig-4.jpg";
import ig5 from "@/assets/ig-5.jpg";
import ig6 from "@/assets/ig-6.jpg";
import saleBanner from "@/assets/sale-banner.jpg";
import philosophy from "@/assets/philosophy.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BEGINO — Every Beginning Matters | Premium Essentials" },
      {
        name: "description",
        content:
          "Shop BEGINO premium essentials: oversized tees, hoodies, leather sneakers, watches and caps. Cash on delivery, free shipping over PKR 5,000.",
      },
      { property: "og:title", content: "BEGINO — Every Beginning Matters" },
      {
        property: "og:description",
        content: "Premium quality. Timeless design. Shop the new 2026 collection.",
      },
    ],
  }),
  component: Index,
});

const perks = [
  { icon: Leaf, title: "Premium Quality", copy: "Finest materials" },
  { icon: Truck, title: "Fast Delivery", copy: "Across Pakistan" },
  { icon: ShieldCheck, title: "Secure Payment", copy: "HTTPS & COD" },
  { icon: RotateCcw, title: "Easy Returns", copy: "7 days return" },
];

const social = [ig1, ig2, ig6, ig5, ig3, ig4];

function Index() {
  return (
    <div>
      <HeroCarousel />

      {/* Perks strip */}
      <section className="bg-cream text-cream-foreground">
        <div className="wrap grid grid-cols-2 gap-8 py-9 md:grid-cols-4 md:divide-x md:divide-border">
          {perks.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 80}
              className="flex min-w-0 items-center gap-4 md:justify-center"
            >
              <p.icon className="h-7 w-7 shrink-0 stroke-[1.25]" />
              <div className="min-w-0">
                <p className="label-xs">{p.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Shop by category */}
      <section className="bg-olive text-olive-foreground">
        <div className="wrap py-16 md:py-24">
        <Reveal className="flex items-center justify-between">
          <h2 className="section-title flex items-center gap-4">
            <span className="hidden h-px w-10 bg-olive-foreground/50 sm:block" />
            Shop by Category
          </h2>
          <Link to="/men" className="label-xs group inline-flex items-center gap-2">
            View all
            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {categories.slice(0, 5).map((c, i) => (
            <Reveal key={c.slug} delay={i * 100}>
              <Link
                to={`/${c.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-ink"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  width={900}
                  height={1000}
                  className="media-zoom h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-ink-foreground">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide md:text-xl">
                    {c.title}
                  </h3>
                  <span className="label-xs mt-2 inline-flex items-center gap-2">
                    Explore
                    <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-cream text-cream-foreground">
        <div className="grid items-stretch lg:grid-cols-2">
          <Reveal className="wrap flex flex-col justify-center py-16 md:py-24">
            <p className="label-xs flex items-center gap-3 text-muted-foreground">
              <span className="h-px w-8 bg-border" />
              Our Philosophy
            </p>
            <h2 className="font-display mt-6 text-3xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
              Not just fashion.
              <br />
              It&apos;s a mindset.
            </h2>
            <span className="mt-8 block h-px w-12 bg-border" />
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
              Every piece is a reminder to stay humble, work hard and keep pushing forward. Made in
              small runs in Lahore, checked by hand before it ships.
            </p>
            <Link
              to="/our-story"
              className="label-xs group mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-primary px-7 py-4 text-primary-foreground transition-opacity duration-200 hover:opacity-85"
            >
              Our Story
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
          <div className="min-h-[320px] overflow-hidden">
            <img
              src={philosophy}
              alt="A rack of BEGINO oversized tees in black, olive and cream"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* New in */}
      <section className="wrap py-16 md:py-24">
        <Reveal className="flex items-end justify-between">
          <h2 className="section-title flex items-center gap-4">
            New In
            <span className="hidden h-px w-10 bg-border sm:block" />
          </h2>
          <Link to="/men" className="label-xs group inline-flex items-center gap-2">
            View all
            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          {bestSellers.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 5) * 90}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sale banner */}
      <section className="wrap pb-16 md:pb-24">
        <Reveal>
          <Link
            to="/sale"
            className="group relative block overflow-hidden rounded-3xl bg-ink text-ink-foreground"
          >
            <img
              src={saleBanner}
              alt=""
              aria-hidden="true"
              loading="lazy"
              width={1600}
              height={544}
              className="media-zoom h-full w-full object-cover opacity-80"
            />
            <span
              aria-hidden="true"
              className="font-display pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-6xl font-extrabold text-transparent [-webkit-text-stroke:1.5px_oklch(1_0_0/0.18)] md:right-12 md:text-[9rem]"
            >
              30%
            </span>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center md:gap-5">
              <p className="label-xs text-ink-foreground/70">Up to 30% off</p>
              <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
                Summer Sale
              </h2>
              <span className="label-xs rounded-full bg-highlight px-7 py-4 text-ink transition-opacity duration-200 group-hover:opacity-85">
                Shop the Sale
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      <TrustStrip />

      <ReviewsPreview />

      {/* Instagram */}
      <section className="pb-16 md:pb-24">
        <Reveal className="wrap text-center">
          <h2 className="section-title">Follow @begino.official</h2>
        </Reveal>
        <div className="wrap mt-10 grid grid-cols-3 gap-3 md:grid-cols-6">
          {social.map((src, i) => (
            <Reveal key={i} delay={(i % 6) * 70}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="block aspect-square overflow-hidden rounded-xl bg-muted"
              >
                <img
                  src={src}
                  alt="BEGINO on Instagram"
                  loading="lazy"
                  width={700}
                  height={700}
                  className="media-zoom h-full w-full object-cover"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
