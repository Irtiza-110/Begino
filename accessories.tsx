import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/site/CollectionPage";
import catAccessories from "@/assets/cat-accessories.jpg";

export const Route = createFileRoute("/accessories")({
  head: () => ({
    meta: [
      { title: "Accessories — BEGINO" },
      {
        name: "description",
        content: "Caps, totes and full-grain leather belts — the details that finish the fit.",
      },
      { property: "og:title", content: "Accessories — BEGINO" },
      { property: "og:description", content: "Caps, totes and leather belts, finished by hand." },
    ],
  }),
  component: () => (
    <CollectionPage
      title="Accessories"
      subtitle="Caps, canvas totes and full-grain leather belts. The small pieces that hold an outfit together."
      image={catAccessories}
      category="accessories"
    />
  ),
});
