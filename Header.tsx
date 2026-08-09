import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, User, X, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart";
import { products, formatPKR } from "@/lib/products";

const nav = [
  { label: "Home", to: "/" },
  { label: "Men", to: "/men" },
  { label: "Women", to: "/women" },
  { label: "Shoes", to: "/shoes" },
  { label: "Watches", to: "/watches" },
  { label: "Accessories", to: "/accessories" },
  { label: "Sale", to: "/sale", sale: true },
];

const announcements = [
  "FREE DELIVERY ON ORDERS ABOVE PKR 5,000",
  "CASH ON DELIVERY AVAILABLE NATIONWIDE",
  "7 DAY EASY RETURNS",
];

function Announcement() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % announcements.length), 4500);
    return () => clearInterval(t);
  }, []);
  const step = (d: number) => setI((v) => (v + d + announcements.length) % announcements.length);

  return (
    <div className="bg-ink text-ink-foreground">
      <div className="wrap flex h-9 items-center justify-between">
        <button
          aria-label="Previous announcement"
          onClick={() => step(-1)}
          className="opacity-50 transition-opacity duration-200 hover:opacity-100"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>
        <div className="flex min-w-0 items-center gap-2">
          <button
            aria-label="Previous announcement"
            onClick={() => step(-1)}
            className="hidden opacity-50 transition-opacity duration-200 hover:opacity-100 sm:block"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <Truck className="hidden h-3.5 w-3.5 shrink-0 opacity-70 sm:block" />
          <p key={i} className="label-xs animate-fade-in truncate">
            {announcements[i]}
          </p>
          <button
            aria-label="Next announcement"
            onClick={() => step(1)}
            className="hidden opacity-50 transition-opacity duration-200 hover:opacity-100 sm:block"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <button
          aria-label="Next announcement"
          onClick={() => step(1)}
          className="opacity-50 transition-opacity duration-200 hover:opacity-100"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const results = q.trim()
    ? products.filter((p) => p.name.toLowerCase().includes(q.trim().toLowerCase())).slice(0, 6)
    : [];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-md animate-fade-in">
      <div className="wrap pt-10">
        <div className="flex items-center gap-4 border-b border-border pb-4">
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products"
            className="min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-muted-foreground md:text-2xl"
          />
          <button aria-label="Close search" onClick={onClose} className="shrink-0">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="divide-y divide-border">
          {results.map((p) => (
            <Link
              key={p.slug}
              to="/product/$slug"
              params={{ slug: p.slug }}
              onClick={onClose}
              className="flex items-center gap-4 py-4 transition-colors duration-200 hover:bg-muted"
            >
              <img src={p.image} alt={p.name} className="h-16 w-16 object-cover" loading="lazy" />
              <span className="min-w-0 flex-1 truncate text-sm font-medium">{p.name}</span>
              <span className="label-xs text-muted-foreground">{formatPKR(p.price)}</span>
            </Link>
          ))}
          {q.trim() && results.length === 0 && (
            <p className="py-6 text-sm text-muted-foreground">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <Announcement />
      <div className="wrap pt-3 md:pt-4">
        <div
          className={cn(
            "grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-full border border-border/60 bg-background/70 px-5 backdrop-blur-xl transition-all duration-700 [transition-timing-function:var(--ease-apple)] md:px-8",
            scrolled
              ? "h-14 shadow-[0_10px_30px_-18px_oklch(0.19_0.017_128/0.5)]"
              : "h-16 md:h-[68px]",
          )}
        >
          <div className="flex min-w-0 items-center gap-3">
            <button
              aria-label="Open menu"
              className="lg:hidden"
              onClick={() => setMenu(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <Link
              to="/"
              className="font-display text-xl font-extrabold uppercase tracking-[0.06em] md:text-2xl"
            >
              Begino
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-8 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "opacity-100" }}
                inactiveProps={{ className: "opacity-70 hover:opacity-100" }}
                className={cn(
                  "label-xs link-underline transition-opacity duration-200",
                  n.sale && "text-sale opacity-100",
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-4">
            <button aria-label="Search" onClick={() => setSearch(true)}>
              <Search className="h-[18px] w-[18px] transition-transform duration-200 hover:scale-110" />
            </button>
            <Link to="/account" aria-label="Account" className="hidden sm:block">
              <User className="h-[18px] w-[18px] transition-transform duration-200 hover:scale-110" />
            </Link>
            <button aria-label="Open cart" onClick={() => setOpen(true)} className="relative">
              <ShoppingBag className="h-[18px] w-[18px] transition-transform duration-200 hover:scale-110" />
              <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                {count}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          menu ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setMenu(false)}
          className={cn(
            "absolute inset-0 bg-ink/50 transition-opacity duration-700",
            menu ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-[82%] max-w-xs bg-background p-6 transition-transform duration-700 [transition-timing-function:var(--ease-apple)]",
            menu ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="font-display text-lg font-extrabold uppercase">Begino</span>
            <button aria-label="Close menu" onClick={() => setMenu(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setMenu(false)}
                className={cn(
                  "font-display text-2xl font-bold uppercase tracking-tight",
                  n.sale && "text-sale",
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10 flex flex-col gap-3">
            <Link to="/account" onClick={() => setMenu(false)} className="label-xs text-muted-foreground">
              Account
            </Link>
            <Link to="/track-order" onClick={() => setMenu(false)} className="label-xs text-muted-foreground">
              Track order
            </Link>
            <Link to="/contact" onClick={() => setMenu(false)} className="label-xs text-muted-foreground">
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {search && <SearchOverlay onClose={() => setSearch(false)} />}
    </header>
  );
}
