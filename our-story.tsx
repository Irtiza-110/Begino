import { createFileRoute } from "@tanstack/react-router";
import { InfoBlock, InfoPage } from "@/components/site/InfoPage";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — BEGINO" },
      {
        name: "description",
        content: "From one heavyweight tee to a full range of essentials — the BEGINO story so far.",
      },
      { property: "og:title", content: "Our Story — BEGINO" },
      { property: "og:description", content: "From one heavyweight tee to a full range of essentials." },
    ],
  }),
  component: () => (
    <InfoPage
      eyebrow="Our Story"
      title="It Started With One Tee"
      intro="We couldn't find a black tee that survived twenty washes without losing its shape. So we made one."
    >
      <InfoBlock heading="2024 — The first run">
        <p>
          200 units of a 240 GSM drop-shoulder tee, sold out in eleven days, mostly to friends and
          their friends. The feedback shaped the fit we still use today.
        </p>
      </InfoBlock>
      <InfoBlock heading="2025 — Beyond cotton">
        <p>
          Hoodies, then leather sneakers, then the B-01 watch. Each category took a year of samples
          because we refused to launch anything we wouldn't wear daily.
        </p>
      </InfoBlock>
      <InfoBlock heading="2026 — Nationwide">
        <p>
          Cash on delivery across Pakistan, seven-day returns, and a permanent range that only changes
          when we can genuinely improve it.
        </p>
      </InfoBlock>
    </InfoPage>
  ),
});
