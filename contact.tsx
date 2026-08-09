import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { InfoPage } from "@/components/site/InfoPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — BEGINO" },
      {
        name: "description",
        content: "Questions about sizing, orders or returns? Reach the BEGINO team in Lahore, Pakistan.",
      },
      { property: "og:title", content: "Contact Us — BEGINO" },
      { property: "og:description", content: "Reach the BEGINO team — we reply within one working day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <InfoPage
      eyebrow="Customer Care"
      title="Contact Us"
      intro="We reply to every message within one working day, Monday to Saturday."
    >
      <div className="grid gap-10 md:grid-cols-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Message sent — we'll get back to you within one working day.");
            (e.target as HTMLFormElement).reset();
          }}
          className="space-y-4"
        >
          <input
            required
            placeholder="Your name"
            aria-label="Your name"
            className="w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-primary"
          />
          <input
            required
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            className="w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-primary"
          />
          <textarea
            required
            rows={5}
            placeholder="How can we help?"
            aria-label="Message"
            className="w-full resize-none border border-input bg-background px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-primary"
          />
          <button
            type="submit"
            className="label-xs w-full bg-primary py-4 text-primary-foreground transition-opacity duration-200 hover:opacity-85 sm:w-auto sm:px-10"
          >
            Send message
          </button>
        </form>

        <ul className="space-y-6 text-sm">
          <li className="flex gap-4">
            <Mail className="h-5 w-5 shrink-0 stroke-[1.25]" />
            <div>
              <p className="label-xs">Email</p>
              <p className="mt-1 text-muted-foreground">hello@begino.com</p>
            </div>
          </li>
          <li className="flex gap-4">
            <Phone className="h-5 w-5 shrink-0 stroke-[1.25]" />
            <div>
              <p className="label-xs">Phone & WhatsApp</p>
              <p className="mt-1 text-muted-foreground">+92 300 1234567</p>
            </div>
          </li>
          <li className="flex gap-4">
            <MapPin className="h-5 w-5 shrink-0 stroke-[1.25]" />
            <div>
              <p className="label-xs">Studio</p>
              <p className="mt-1 text-muted-foreground">
                Gulberg III, Lahore, Pakistan
                <br />
                Mon–Sat, 11am–8pm
              </p>
            </div>
          </li>
        </ul>
      </div>
    </InfoPage>
  );
}
