import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, Minus, Plus, ShieldCheck, Star, Truck } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart";
import { bySlug, formatPKR, products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = bySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product unavailable — BEGINO" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — BEGINO` },
        { name: "description", content: product.description.slice(0, 155) },
        { property: "og:title", content: `${product.name} — BEGINO` },
        { property: "og:description", content: product.description.slice(0, 155) },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes[0] ?? "One Size");
  const [qty, setQty] = useState(1);

  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 4);

  return (
    <div>
      <nav className="wrap flex items-center gap-2 py-5 text-xs text-muted-foreground">
        <Link to="/" className="transition-colors duration-200 hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link
          to={`/${product.category}`}
          className="capitalize transition-colors duration-200 hover:text-foreground"
        >
          {product.category}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="truncate text-foreground">{product.name}</span>
      </nav>

      <section className="wrap grid gap-10 pb-16 md:grid-cols-2 md:gap-14 md:pb-24">
        <div className="overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            width={1000}
            height={1000}
            className="aspect-square w-full object-cover"
          />
        </div>

        <div className="md:pt-4">
          {product.badge && (
            <span
              className={cn(
                "label-xs inline-block px-2 py-1",
                product.badge === "SALE"
                  ? "bg-sale text-sale-foreground"
                  : "bg-primary text-primary-foreground",
              )}
            >
              {product.badge}
            </span>
          )}
          <h1 className="font-display mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3.5 w-3.5",
                    i < product.rating ? "fill-foreground text-foreground" : "text-border",
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">{product.reviews} reviews</span>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-2xl font-bold">{formatPKR(product.price)}</span>
            {product.compareAt && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPKR(product.compareAt)}
              </span>
            )}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="mt-8">
            <p className="label-xs">Size</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s: string) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={cn(
                    "label-xs min-w-12 border px-4 py-3 transition-colors duration-200",
                    size === s
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input hover:border-primary",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="flex w-fit items-center border border-input">
              <button aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-4">
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-10 text-center text-sm">{qty}</span>
              <button aria-label="Increase quantity" onClick={() => setQty((q) => q + 1)} className="p-4">
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
            <button
              onClick={() => {
                add(
                  {
                    slug: product.slug,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    size,
                  },
                  qty,
                );
                toast.success(`${product.name} added to your bag.`);
              }}
              className="label-xs flex-1 bg-primary py-4 text-primary-foreground transition-opacity duration-200 hover:opacity-85"
            >
              Add to bag
            </button>
          </div>

          <ul className="mt-8 space-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
            {product.details.map((d: string) => (
              <li key={d} className="flex gap-2">
                <span className="text-foreground">—</span>
                {d}
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 border border-border p-4">
              <Truck className="h-5 w-5 shrink-0 stroke-[1.25]" />
              <p className="text-xs text-muted-foreground">Free delivery over PKR 5,000</p>
            </div>
            <div className="flex items-center gap-3 border border-border p-4">
              <ShieldCheck className="h-5 w-5 shrink-0 stroke-[1.25]" />
              <p className="text-xs text-muted-foreground">7 day easy returns</p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="wrap pb-16 md:pb-24">
          <Reveal>
            <h2 className="section-title">You may also like</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
