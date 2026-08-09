import tee from "@/assets/p-tee.jpg";
import sneakers from "@/assets/p-sneakers.jpg";
import watch from "@/assets/p-watch.jpg";
import hoodie from "@/assets/p-hoodie.jpg";
import cap from "@/assets/p-cap.jpg";
import catMen from "@/assets/cat-men.jpg";
import catWomen from "@/assets/cat-women.jpg";
import catShoes from "@/assets/cat-shoes.jpg";
import catWatches from "@/assets/cat-watches.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";

export type Category = "men" | "women" | "shoes" | "watches" | "accessories";

export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  badge?: "NEW" | "SALE";
  image: string;
  category: Category;
  sizes: string[];
  description: string;
  details: string[];
  bestSeller?: boolean;
};

export const categories: {
  slug: Category;
  title: string;
  image: string;
  blurb: string;
}[] = [
  { slug: "men", title: "Men", image: catMen, blurb: "Oversized essentials built to last." },
  { slug: "women", title: "Women", image: catWomen, blurb: "Relaxed silhouettes, refined finish." },
  { slug: "shoes", title: "Shoes", image: catShoes, blurb: "Clean leather, everyday comfort." },
  { slug: "watches", title: "Watches", image: catWatches, blurb: "Quiet precision on the wrist." },
  {
    slug: "accessories",
    title: "Accessories",
    image: catAccessories,
    blurb: "The details that finish the fit.",
  },
];

const apparelSizes = ["XS", "S", "M", "L", "XL", "XXL"];
const shoeSizes = ["39", "40", "41", "42", "43", "44", "45"];
const oneSize = ["One Size"];

export const products: Product[] = [
  {
    slug: "essential-oversized-tee",
    name: "Essential Oversized Tee",
    price: 2490,
    rating: 5,
    reviews: 120,
    badge: "NEW",
    image: tee,
    category: "men",
    sizes: apparelSizes,
    bestSeller: true,
    description:
      "Our signature drop-shoulder tee in 240 GSM combed cotton. Pre-shrunk, garment dyed, and built to hold its shape wash after wash.",
    details: ["240 GSM combed cotton", "Drop shoulder, boxy fit", "Pre-shrunk & garment dyed"],
  },
  {
    slug: "classic-white-sneakers",
    name: "Classic White Sneakers",
    price: 6990,
    rating: 5,
    reviews: 98,
    badge: "NEW",
    image: sneakers,
    category: "shoes",
    sizes: shoeSizes,
    bestSeller: true,
    description:
      "Full-grain leather low tops on a vulcanised rubber sole. Minimal stitching, no loud branding — just a shoe that works with everything.",
    details: ["Full-grain leather upper", "Cushioned removable insole", "Vulcanised rubber outsole"],
  },
  {
    slug: "b-01-black-watch",
    name: "B-01 Black Watch",
    price: 5490,
    rating: 5,
    reviews: 76,
    image: watch,
    category: "watches",
    sizes: oneSize,
    bestSeller: true,
    description:
      "A 40mm matte black case with a sapphire-coated lens and Japanese quartz movement. Water resistant to 5 ATM.",
    details: ["40mm matte stainless case", "Japanese quartz movement", "5 ATM water resistant"],
  },
  {
    slug: "essential-hoodie",
    name: "Essential Hoodie",
    price: 3490,
    compareAt: 4990,
    rating: 5,
    reviews: 64,
    badge: "SALE",
    image: hoodie,
    category: "men",
    sizes: apparelSizes,
    bestSeller: true,
    description:
      "Heavyweight 400 GSM fleece with a double-layer hood and brushed inner face. Warm without the bulk.",
    details: ["400 GSM brushed fleece", "Double-layer hood", "Ribbed cuffs and hem"],
  },
  {
    slug: "classic-beige-cap",
    name: "Classic Beige Cap",
    price: 1290,
    rating: 5,
    reviews: 45,
    image: cap,
    category: "accessories",
    sizes: oneSize,
    bestSeller: true,
    description:
      "Unstructured six-panel cap in washed cotton twill with a metal buckle strap for a precise fit.",
    details: ["Washed cotton twill", "Six-panel unstructured crown", "Adjustable metal buckle"],
  },
  {
    slug: "relaxed-white-tee",
    name: "Relaxed White Tee",
    price: 2490,
    rating: 5,
    reviews: 88,
    image: catWomen,
    category: "women",
    sizes: apparelSizes,
    description:
      "The women's cut of our signature tee — slightly cropped body, same 240 GSM cotton, same longevity.",
    details: ["240 GSM combed cotton", "Cropped relaxed body", "Garment dyed"],
  },
  {
    slug: "studio-black-tee",
    name: "Studio Black Tee",
    price: 2690,
    rating: 5,
    reviews: 52,
    image: tee,
    category: "women",
    sizes: apparelSizes,
    description:
      "A clean black staple with a softened neckline and mid-weight drape that sits beautifully layered.",
    details: ["220 GSM cotton jersey", "Softened rib neckline", "Mid-weight drape"],
  },
  {
    slug: "core-black-hoodie",
    name: "Core Black Hoodie",
    price: 4290,
    rating: 5,
    reviews: 41,
    image: hoodie,
    category: "women",
    sizes: apparelSizes,
    description: "Everyday fleece hoodie with a relaxed body and clean-finished seams.",
    details: ["380 GSM fleece", "Relaxed body", "Clean-finished seams"],
  },
  {
    slug: "court-low-leather",
    name: "Court Low Leather",
    price: 7490,
    compareAt: 8990,
    rating: 4,
    reviews: 33,
    badge: "SALE",
    image: sneakers,
    category: "shoes",
    sizes: shoeSizes,
    description: "A court-inspired low top with a slimmer profile and tonal leather panelling.",
    details: ["Tonal leather panels", "Slim court profile", "Padded collar"],
  },
  {
    slug: "b-02-steel-watch",
    name: "B-02 Steel Watch",
    price: 7990,
    rating: 5,
    reviews: 28,
    image: catWatches,
    category: "watches",
    sizes: oneSize,
    description:
      "Brushed steel bracelet, black sunray dial and applied indices. A dress watch that survives daily wear.",
    details: ["Brushed steel bracelet", "Sunray dial, applied indices", "Sapphire crystal"],
  },
  {
    slug: "everyday-tote",
    name: "Everyday Tote",
    price: 2190,
    rating: 5,
    reviews: 37,
    image: catAccessories,
    category: "accessories",
    sizes: oneSize,
    description: "16oz canvas tote with reinforced straps and an internal zip pocket.",
    details: ["16oz heavy canvas", "Reinforced straps", "Internal zip pocket"],
  },
  {
    slug: "leather-belt",
    name: "Minimal Leather Belt",
    price: 1890,
    compareAt: 2490,
    rating: 4,
    reviews: 21,
    badge: "SALE",
    image: catAccessories,
    category: "accessories",
    sizes: ["30", "32", "34", "36", "38"],
    description: "Full-grain leather belt with a matte gunmetal buckle and hand-finished edges.",
    details: ["Full-grain leather", "Matte gunmetal buckle", "Hand-finished edges"],
  },
  {
    slug: "heavy-black-shirt",
    name: "Heavy Black Overshirt",
    price: 5290,
    rating: 5,
    reviews: 19,
    image: catMen,
    category: "men",
    sizes: apparelSizes,
    description: "A structured overshirt in brushed twill that works open or buttoned.",
    details: ["Brushed cotton twill", "Boxy overshirt cut", "Horn-look buttons"],
  },
];

export const formatPKR = (value: number) => `PKR ${value.toLocaleString("en-US")}`;

export const bestSellers = products.filter((p) => p.bestSeller);
export const saleProducts = products.filter((p) => p.compareAt);
export const byCategory = (c: Category) => products.filter((p) => p.category === c);
export const bySlug = (slug: string) => products.find((p) => p.slug === slug);
