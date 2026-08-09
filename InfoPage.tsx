import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";

export function InfoPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <section className="bg-cream text-cream-foreground">
        <div className="wrap py-16 md:py-24">
          <Reveal>
            <p className="label-xs text-muted-foreground">{eyebrow}</p>
            <h1 className="font-display mt-3 text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
              {title}
            </h1>
            {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>}
          </Reveal>
        </div>
      </section>
      <section className="wrap py-14 md:py-20">
        <Reveal className="max-w-3xl space-y-10">{children}</Reveal>
      </section>
    </div>
  );
}

export function InfoBlock({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="section-title">{heading}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}
