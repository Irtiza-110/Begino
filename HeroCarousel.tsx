import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    eyebrow: "New Collection 2026",
    line1: "Every",
    line2: "Beginning",
    outline: "Matters",
    copy: ["Premium quality. Timeless design.", "Made for those who start their journey with purpose."],
    cta: { label: "Shop Now", to: "/men" as const },
  },
  {
    image: hero2,
    eyebrow: "Women's Essentials",
    line1: "Built",
    line2: "For The",
    outline: "Everyday",
    copy: ["Relaxed silhouettes in heavyweight cotton.", "Designed once, worn for years."],
    cta: { label: "Shop Women", to: "/women" as const },
  },
  {
    image: hero3,
    eyebrow: "Shoes & Watches",
    line1: "Quiet",
    line2: "Details",
    outline: "Loud Craft",
    copy: ["Full-grain leather. Sapphire-coated glass.", "The finish is the point."],
    cta: { label: "Shop Watches", to: "/watches" as const },
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const go = useCallback((d: number) => setI((v) => (v + d + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [go]);

  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="relative min-h-[78vh] md:min-h-[86vh]">
        {slides.map((s, idx) => (
          <div
            key={idx}
            aria-hidden={idx !== i}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 [transition-timing-function:var(--ease-apple)]",
              idx === i ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            <img
              src={s.image}
              alt={idx === i ? `${s.line1} ${s.line2} ${s.outline}` : ""}
              width={1600}
              height={1008}
              loading={idx === 0 ? "eager" : "lazy"}
              fetchPriority={idx === 0 ? "high" : "low"}
              decoding={idx === 0 ? "sync" : "async"}
              className={cn(
                "absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[9000ms] ease-out md:object-[65%_center]",
                idx === i ? "scale-105" : "scale-100",
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/10" />

            <div className="wrap relative flex min-h-[78vh] flex-col justify-center py-20 md:min-h-[86vh]">
              <div
                className={cn(
                  "max-w-xl transition-all duration-1000 [transition-timing-function:var(--ease-apple)]",
                  idx === i ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                )}
              >
                <p className="label-xs text-ink-foreground/70">{s.eyebrow}</p>
                <h1 className="font-display mt-5 text-5xl font-extrabold uppercase leading-[0.88] tracking-tight sm:text-6xl md:text-7xl">
                  {s.line1}
                  <br />
                  {s.line2}
                  <br />
                  <span className="text-highlight">
                    {s.outline}
                  </span>
                </h1>
                <p className="mt-6 text-sm leading-relaxed text-ink-foreground/75">
                  {s.copy[0]}
                  <br />
                  {s.copy[1]}
                </p>
                <Link
                  to={s.cta.to}
                  className="label-xs group mt-9 inline-flex items-center gap-3 rounded-full bg-highlight px-8 py-4 text-ink transition-opacity duration-200 hover:opacity-85"
                >
                  {s.cta.label}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        <button
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-ink-foreground/30 backdrop-blur transition-colors duration-200 hover:bg-ink-foreground/10 md:left-6"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-ink-foreground/30 backdrop-blur transition-colors duration-200 hover:bg-ink-foreground/10 md:right-6"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={cn(
                "h-[3px] transition-all duration-700 [transition-timing-function:var(--ease-apple)]",
                idx === i ? "w-8 bg-ink-foreground" : "w-2.5 bg-ink-foreground/40",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
