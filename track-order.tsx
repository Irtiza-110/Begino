import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { InfoPage } from "@/components/site/InfoPage";

export const Route = createFileRoute("/track-order")({
  head: () => ({
    meta: [
      { title: "Track Your Order — BEGINO" },
      { name: "description", content: "Enter your BEGINO order number to see the latest delivery status." },
      { property: "og:title", content: "Track Your Order — BEGINO" },
      { property: "og:description", content: "See the latest delivery status of your BEGINO order." },
    ],
  }),
  component: TrackOrderPage,
});

function TrackOrderPage() {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <InfoPage
      eyebrow="Customer Care"
      title="Track Order"
      intro="Your order number is in your confirmation email and starts with BG."
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStatus("In transit — out for delivery in Lahore, expected within 24 hours.");
          toast.success("Order found.");
        }}
        className="flex max-w-md flex-col gap-3 sm:flex-row"
      >
        <input
          required
          placeholder="BG-000000"
          aria-label="Order number"
          className="min-w-0 flex-1 border border-input bg-background px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-primary"
        />
        <button
          type="submit"
          className="label-xs bg-primary px-8 py-4 text-primary-foreground transition-opacity duration-200 hover:opacity-85"
        >
          Track
        </button>
      </form>
      {status && <p className="border border-border p-5 text-sm">{status}</p>}
    </InfoPage>
  );
}
