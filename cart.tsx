import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";
import { formatPKR } from "@/lib/products";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Bag — BEGINO" },
      { name: "description", content: "Review the items in your BEGINO bag and checkout securely." },
      { property: "og:title", content: "Your Bag — BEGINO" },
      { property: "og:description", content: "Review your BEGINO bag and checkout securely." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { lines, subtotal, setQty, remove, clear } = useCart();
  const shipping = subtotal === 0 || subtotal >= 5000 ? 0 : 250;

  return (
    <div className="wrap py-14 md:py-20">
      <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
        Your Bag
      </h1>

      {lines.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-sm text-muted-foreground">Your bag is empty.</p>
          <Link
            to="/men"
            className="label-xs mt-6 inline-block bg-primary px-7 py-4 text-primary-foreground transition-opacity duration-200 hover:opacity-80"
          >
            Start shopping
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_360px]">
          <div className="divide-y divide-border border-y border-border">
            {lines.map((l) => (
              <div key={`${l.slug}-${l.size}`} className="flex gap-5 py-6">
                <Link to="/product/$slug" params={{ slug: l.slug }} className="shrink-0">
                  <img src={l.image} alt={l.name} loading="lazy" className="h-32 w-24 bg-muted object-cover" />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <Link
                        to="/product/$slug"
                        params={{ slug: l.slug }}
                        className="block truncate text-sm font-medium"
                      >
                        {l.name}
                      </Link>
                      <p className="label-xs mt-1.5 text-muted-foreground">Size {l.size}</p>
                    </div>
                    <button aria-label="Remove item" onClick={() => remove(l.slug, l.size)}>
                      <X className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-input">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => setQty(l.slug, l.size, l.qty - 1)}
                        className="p-3"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{l.qty}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => setQty(l.slug, l.size, l.qty + 1)}
                        className="p-3"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <span className="text-sm">{formatPKR(l.price * l.qty)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit border border-border p-6">
            <h2 className="label-xs">Order summary</h2>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd>{formatPKR(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Shipping</dt>
                <dd>{shipping === 0 ? "Free" : formatPKR(shipping)}</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-3 font-display text-lg font-bold">
                <dt>Total</dt>
                <dd>{formatPKR(subtotal + shipping)}</dd>
              </div>
            </dl>
            <button
              onClick={() => {
                toast.success("Order placed. We'll confirm on WhatsApp shortly.");
                clear();
              }}
              className="label-xs mt-6 w-full bg-primary py-4 text-primary-foreground transition-opacity duration-200 hover:opacity-85"
            >
              Checkout — Cash on delivery
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Free delivery on orders above PKR 5,000. 7 day easy returns.
            </p>
          </aside>
        </div>
      )}
    </div>
  );
}
