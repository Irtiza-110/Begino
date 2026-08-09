import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/site/CollectionPage";
import catWomen from "@/assets/cat-women.jpg";

export const Route = createFileRoute("/women")({
  head: () => ({
    meta: [
      { title: "Women's Collection — BEGINO" },
      {
        name: "description",
        content: "Relaxed tees, cropped staples and fleece hoodies with a refined finish. Shop BEGINO women.",
      },
      { property: "og:title", content: "Women's Collection — BEGINO" },
      { property: "og:description", content: "Relaxed silhouettes with a refined finish." },
    ],
  }),
  component: () => (
    <CollectionPage
      title="Women"
      subtitle="Relaxed silhouettes with considered proportions — softened necklines, mid-weight drape, no loud branding."
      image={catWomen}
      category="women"
    />
  ),
});
