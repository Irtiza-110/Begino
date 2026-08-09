import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { InfoPage } from "@/components/site/InfoPage";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Account — BEGINO" },
      { name: "description", content: "Sign in to your BEGINO account to view orders and saved items." },
      { property: "og:title", content: "Account — BEGINO" },
      { property: "og:description", content: "Sign in to view your BEGINO orders and saved items." },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  return (
    <InfoPage
      eyebrow="Account"
      title="Sign In"
      intro="Access your orders, saved addresses and wishlist."
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Accounts are coming soon — we'll email you when they're live.");
        }}
        className="max-w-sm space-y-4"
      >
        <input
          type="email"
          required
          placeholder="Email address"
          aria-label="Email address"
          className="w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-primary"
        />
        <input
          type="password"
          required
          placeholder="Password"
          aria-label="Password"
          className="w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-primary"
        />
        <button
          type="submit"
          className="label-xs w-full bg-primary py-4 text-primary-foreground transition-opacity duration-200 hover:opacity-85"
        >
          Sign in
        </button>
        <p className="text-xs text-muted-foreground">
          New here? Placing an order automatically creates your account.
        </p>
      </form>
    </InfoPage>
  );
}
