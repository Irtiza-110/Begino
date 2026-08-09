import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/site/CollectionPage";
import catMen from "@/assets/cat-men.jpg";

export const Route = createFileRoute("/men")({
  head: () => ({
    meta: [
      { title: "Men's Collection — BEGINO" },
      {
        name: "description",
        content: "Oversized tees, heavyweight hoodies and overshirts built to last. Shop BEGINO men.",
      },
      { property: "og:title", content: "Men's Collection — BEGINO" },
      { property: "og:description", content: "Oversized essentials in premium heavyweight cotton." },
    ],
  }),
  component: () => (
    <CollectionPage
      title="Men"
      subtitle="Oversized essentials in heavyweight cotton — cut for a boxy fit and finished to survive years of wear."
      image={catMen}
      category="men"
    />
  ),
});
