import { Product, Category } from "./types";

// Mock data - replace with actual API calls when connecting to backend
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Air Filter",
    oemNumber: "8200431051",
    description:
      "High-quality air filter designed for optimal engine performance. This genuine replacement part ensures your engine breathes clean air, improving fuel efficiency and extending engine life. Compatible with multiple Renault models.",
    category: "filters",
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    ],
    compatibility: ["Renault Clio IV", "Renault Megane III", "Renault Captur"],
  },
  {
    id: "2",
    name: "Brake Pad Set - Front",
    oemNumber: "410602192R",
    description:
      "Premium front brake pad set engineered for reliable stopping power. These pads offer excellent performance in all weather conditions and provide consistent braking feel throughout their lifespan.",
    category: "brakes",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    ],
    compatibility: ["Renault Megane IV", "Renault Kadjar", "Renault Scenic IV"],
  },
  {
    id: "3",
    name: "Oil Filter",
    oemNumber: "152089599R",
    description:
      "Engine oil filter that provides superior filtration to protect your engine from harmful contaminants. Ensures smooth oil flow and optimal lubrication for all engine components.",
    category: "filters",
    images: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    ],
    compatibility: ["Renault Clio V", "Renault Captur II", "Renault Zoe"],
  },
  {
    id: "4",
    name: "Timing Belt Kit",
    oemNumber: "130C17529R",
    description:
      "Complete timing belt kit including belt, tensioner, and rollers. Essential for maintaining proper engine timing and preventing costly engine damage. Recommended replacement every 60,000 km.",
    category: "engine",
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
    compatibility: [
      "Renault Megane II",
      "Renault Scenic II",
      "Renault Laguna II",
    ],
  },
  {
    id: "5",
    name: "Spark Plug Set",
    oemNumber: "224012331R",
    description:
      "Set of 4 iridium spark plugs for optimal ignition performance. Features long-lasting iridium electrode for consistent spark and improved fuel economy. Direct OEM replacement.",
    category: "ignition",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    ],
    compatibility: ["Renault Clio III", "Renault Twingo II", "Renault Modus"],
  },
  {
    id: "6",
    name: "Headlight Assembly - Left",
    oemNumber: "260601871R",
    description:
      "Complete left headlight assembly with housing, reflector, and lens. Direct OEM replacement that restores factory lighting performance. Includes all necessary mounting hardware.",
    category: "lighting",
    images: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
    compatibility: ["Renault Clio IV"],
  },
  {
    id: "7",
    name: "Suspension Strut - Front",
    oemNumber: "543020034R",
    description:
      "Front suspension strut assembly for smooth and comfortable ride. Engineered to OEM specifications for perfect fit and long-lasting performance. Includes mounting hardware.",
    category: "suspension",
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    ],
    compatibility: [
      "Renault Megane III",
      "Renault Scenic III",
      "Renault Fluence",
    ],
  },
  {
    id: "8",
    name: "Clutch Kit Complete",
    oemNumber: "302050901R",
    description:
      "Complete clutch kit including pressure plate, friction disc, and release bearing. Designed for smooth engagement and long service life. Perfect for worn clutch replacement.",
    category: "transmission",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    ],
    compatibility: [
      "Renault Clio III",
      "Renault Megane II",
      "Renault Kangoo II",
    ],
  },
];

export const categories: Category[] = [
  { id: "1", name: "Filters", slug: "filters", icon: "filter" },
  { id: "2", name: "Brakes", slug: "brakes", icon: "disc" },
  { id: "3", name: "Engine Parts", slug: "engine", icon: "cog" },
  { id: "4", name: "Ignition", slug: "ignition", icon: "zap" },
  { id: "5", name: "Lighting", slug: "lighting", icon: "lightbulb" },
  { id: "6", name: "Suspension", slug: "suspension", icon: "car" },
  { id: "7", name: "Transmission", slug: "transmission", icon: "settings" },
];

// API helper functions - ready for backend integration
export async function getProducts(): Promise<Product[]> {
  // TODO: Replace with actual API call
  // const response = await fetch('/api/products');
  // return response.json();
  return mockProducts;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  // TODO: Replace with actual API call
  // const response = await fetch(`/api/products/${id}`);
  // return response.json();
  return mockProducts.find((p) => p.id === id);
}

export async function searchProducts(query: string): Promise<Product[]> {
  // TODO: Replace with actual API call
  // const response = await fetch(`/api/products/search?q=${query}`);
  // return response.json();
  const lowercaseQuery = query.toLowerCase();
  return mockProducts.filter((p) =>
    p.isim.toLowerCase().includes(lowercaseQuery),
  );
}

export function generateWhatsAppLink(productName: string): string {
  const phoneNumber = "905365189389"; // Replace with actual phone number
  const message = encodeURIComponent(
    `Hello, I want to get a quote for ${productName}.`,
  );
  return `https://wa.me/${phoneNumber}?text=${message}`;
}
