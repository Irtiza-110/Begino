import { Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart";
import { formatPKR } from "@/lib/products";

export function CartDrawer() {
  const { lines, open, setOpen, subtotal, setQty, remove } = useCart();

  return (
    <div className={cn("fixed inset-0 z-[80]", open ? "pointer-events-auto" : "pointer-events-none")}>
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "absolute inset-0 bg-ink/50 transition-opacity duration-700",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background transition-transform duration-700 [transition-timing-function:var(--ease-apple)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="label-xs">Your bag ({lines.length})</h2>
          <button aria-label="Close cart" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-sm text-muted-foreground">Your bag is empty.</p>
            <Link
              to="/men"
              onClick={() => setOpen(false)}
              className="label-xs bg-primary px-6 py-3 text-primary-foreground transition-opacity duration-200 hover:opacity-80"
            >
              Start shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {lines.map((l) => (
                <div key={`${l.slug}-${l.size}`} className="flex gap-4 py-5">
                  <img
                    src={l.image}
                    alt={l.name}
                    loading="lazy"
                    className="h-24 w-20 shrink-0 bg-muted object-cover"
                  />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="min-w-0 truncate text-sm font-medium">{l.name}</p>
                      <button aria-label="Remove" onClick={() => remove(l.slug, l.size)}>
                        <X className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                    <p className="label-xs mt-1 text-muted-foreground">Size {l.size}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => setQty(l.slug, l.size, l.qty - 1)}
                          className="p-2"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{l.qty}</span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => setQty(l.slug, l.size, l.qty + 1)}
                          className="p-2"
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
            <div className="border-t border-border px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="label-xs">Subtotal</span>
                <span className="font-display text-lg font-bold">{formatPKR(subtotal)}</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout.
              </p>
              <Link
                to="/cart"
                onClick={() => setOpen(false)}
                className="label-xs mt-5 block bg-primary py-4 text-center text-primary-foreground transition-opacity duration-200 hover:opacity-80"
              >
                View bag & checkout
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
