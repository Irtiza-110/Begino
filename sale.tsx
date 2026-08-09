import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/site/CollectionPage";
import { saleProducts } from "@/lib/products";
import saleBanner from "@/assets/sale-banner.jpg";

export const Route = createFileRoute("/sale")({
  head: () => ({
    meta: [
      { title: "Summer Sale — Up to 30% Off | BEGINO" },
      {
        name: "description",
        content: "Up to 30% off selected BEGINO hoodies, sneakers and leather accessories. While stock lasts.",
      },
      { property: "og:title", content: "Summer Sale — Up to 30% Off | BEGINO" },
      { property: "og:description", content: "Up to 30% off selected essentials. While stock lasts." },
    ],
  }),
  component: () => (
    <CollectionPage
      title="Summer Sale"
      subtitle="Up to 30% off selected pieces. Same materials, same construction — just a better price, while stock lasts."
      image={saleBanner}
      items={saleProducts}
    />
  ),
});
