import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/site/CollectionPage";
import catWatches from "@/assets/cat-watches.jpg";

export const Route = createFileRoute("/watches")({
  head: () => ({
    meta: [
      { title: "Watches — BEGINO" },
      {
        name: "description",
        content: "Matte and brushed steel watches with Japanese quartz movements and sapphire crystal.",
      },
      { property: "og:title", content: "Watches — BEGINO" },
      { property: "og:description", content: "Quiet precision on the wrist." },
    ],
  }),
  component: () => (
    <CollectionPage
      title="Watches"
      subtitle="Japanese quartz movements, sapphire crystal and cases finished by hand. Quiet precision, daily wear."
      image={catWatches}
      category="watches"
    />
  ),
});
