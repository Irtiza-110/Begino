import { createFileRoute } from "@tanstack/react-router";
import { InfoBlock, InfoPage } from "@/components/site/InfoPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BEGINO — Premium Essentials from Lahore" },
      {
        name: "description",
        content:
          "BEGINO makes premium, timeless essentials in Lahore, Pakistan — built on better materials and honest pricing.",
      },
      { property: "og:title", content: "About BEGINO" },
      { property: "og:description", content: "Premium, timeless essentials made in Lahore, Pakistan." },
    ],
  }),
  component: () => (
    <InfoPage
      eyebrow="About Us"
      title="Every Beginning Matters"
      intro="BEGINO was founded in Lahore in 2024 on a simple idea: essentials should be the best-made things you own, not the cheapest."
    >
      <InfoBlock heading="What we make">
        <p>
          A tight, permanent range — oversized tees, heavyweight hoodies, leather sneakers, quartz
          watches and the accessories that finish a fit. No seasonal noise, no 400-piece catalogues.
        </p>
      </InfoBlock>
      <InfoBlock heading="How we make it">
        <p>
          We work directly with a small number of mills and workshops, order in longer runs and skip the
          middlemen. That's how a 240 GSM garment-dyed tee stays under PKR 2,500.
        </p>
      </InfoBlock>
      <InfoBlock heading="Where we're going">
        <p>
          Every order funds a slightly better version of the last drop. Same silhouettes, better
          cotton, cleaner stitching — refined until there is nothing left to remove.
        </p>
      </InfoBlock>
    </InfoPage>
  ),
});
