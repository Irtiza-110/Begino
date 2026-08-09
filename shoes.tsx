import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/site/CollectionPage";
import catShoes from "@/assets/cat-shoes.jpg";

export const Route = createFileRoute("/shoes")({
  head: () => ({
    meta: [
      { title: "Shoes — BEGINO" },
      {
        name: "description",
        content: "Full-grain leather low tops on vulcanised rubber soles. Minimal, clean, everyday.",
      },
      { property: "og:title", content: "Shoes — BEGINO" },
      { property: "og:description", content: "Clean leather low tops built for everyday wear." },
    ],
  }),
  component: () => (
    <CollectionPage
      title="Shoes"
      subtitle="Full-grain leather, vulcanised soles and almost no branding. Shoes that go with everything you own."
      image={catShoes}
      category="shoes"
    />
  ),
});
