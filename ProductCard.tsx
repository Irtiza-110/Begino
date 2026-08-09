import { Link } from "@tanstack/react-router";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { formatPKR, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-2xl bg-muted">
        <Link to="/product/$slug" params={{ slug: product.slug }} aria-label={product.name}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={1000}
            height={1000}
            className="media-zoom aspect-square w-full object-cover"
          />
        </Link>
        {product.badge && (
          <span
            className={cn(
              "label-xs absolute left-3 top-3 rounded-full px-2.5 py-1",
              product.badge === "SALE"
                ? "bg-sale text-sale-foreground"
                : "bg-primary text-primary-foreground",
            )}
          >
            {product.badge}
          </span>
        )}
        <button
          aria-label="Add to wishlist"
          onClick={() => setLiked((v) => !v)}
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center bg-background/80 backdrop-blur transition-transform duration-200 hover:scale-110"
        >
          <Heart className={cn("h-4 w-4", liked && "fill-sale text-sale")} />
        </button>
      </div>

      <div className="pt-4">
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="text-sm font-medium transition-opacity duration-200 hover:opacity-60"
        >
          {product.name}
        </Link>
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className="text-sm">{formatPKR(product.price)}</span>
          {product.compareAt && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPKR(product.compareAt)}
            </span>
          )}
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-3 w-3",
                  i < product.rating ? "fill-foreground text-foreground" : "text-border",
                )}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
      </div>
    </article>
  );
}
