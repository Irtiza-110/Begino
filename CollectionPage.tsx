import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { byCategory, type Category, type Product } from "@/lib/products";

export function CollectionPage({
  title,
  subtitle,
  image,
  items,
  category,
}: {
  title: string;
  subtitle: string;
  image?: string;
  items?: Product[];
  category?: Category;
}) {
  const list = items ?? (category ? byCategory(category) : []);

  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        {image && (
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
        )}
        <div className="wrap relative flex min-h-[38vh] flex-col justify-end py-16 md:min-h-[46vh]">
          <Reveal>
            <p className="label-xs text-ink-foreground/60">Collection</p>
            <h1 className="font-display mt-3 text-5xl font-extrabold uppercase leading-[0.9] tracking-tight md:text-7xl">
              {title}
            </h1>
            <p className="mt-4 max-w-lg text-sm text-ink-foreground/70">{subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="wrap py-14 md:py-20">
        <div className="mb-8 flex items-center justify-between border-b border-border pb-4">
          <p className="label-xs text-muted-foreground">{list.length} products</p>
          <p className="label-xs text-muted-foreground">Newest first</p>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 90}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
        {list.length === 0 && (
          <p className="py-20 text-center text-sm text-muted-foreground">
            Nothing here yet — new drops land every month.
          </p>
        )}
      </section>
    </div>
  );
}
