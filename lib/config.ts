export const BRAND_CONFIG = {
  name: "Kodai Global Exports",
  category: "Essential Oils & Natural Extracts",
  primaryProduct: "Lemongrass Oil & Eucalyptus Oil",
  location: "Kodai Global Exports \nPeriyakulam, Theni District-625601, Tamilnadu, India.",
  email: "kge@kodaiglobalexports.com",
  tagline: "Sustainable • Pure • Reliable",
};

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  images?: string[];
  featured: boolean;
  specifications: { label: string; value: string }[];
  applications: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "lemongrass-oil",
    name: "Lemongrass Oil",
    description: "Our premium lemongrass oil is meticulously extracted from high-quality Cymbopogon flexuosus using controlled steam distillation processes. It is highly valued in the export market for its purity, superior citral content, and consistent aromatic profile. Designed to meet the stringent requirements of international buyers, this oil serves as a versatile ingredient for aromatherapy, premium cosmetics, and high-end fragrance formulations across the global market.",
    image: "/images/why-choose-us.jpg",
    images: ["/images/why-choose-us.jpg", "/images/lemongrassOil.png"],
    featured: true,
    specifications: [
      { label: "Appearance", value: "Pale Yellow to Yellow Liquid" },
      { label: "Odour", value: "Fresh, Lemon-like Aroma" },
      { label: "Purity", value: "100% Pure & Natural" },
      { label: "Extraction Method", value: "Steam Distillation" },
      { label: "Citral Content", value: "75% - 85%" },
      { label: "Packaging Options", value: "5kg, 25kg, 50kg, 180kg HDPE/Aluminium Drums" },
      { label: "Shelf Life", value: "24 Months (Proper Storage)" },
      { label: "Origin", value: "India" },
      { label: "Certifications", value: "FSSAI / Export Compliant Documentation Available" }
    ],
    applications: [
      "Aromatherapy & Wellness",
      "Cosmetics & Personal Care",
      "Pharmaceutical Formulations",
      "Food & Flavor Industry (As per regulations)",
      "Industrial & Fragrance Blends"
    ]
  },
  {
    id: "eucalyptus-oil",
    name: "Eucalyptus Oil",
    description: "Kodai Global's eucalyptus oil is processed from handpicked leaves under strictly monitored conditions to ensure maximum cineole content and purity. This export-focused quality oil is recognized for its fresh, camphoraceous aroma and wide range of therapeutic applications. We provide structured quality control for every batch, making it a reliable choice for international pharmaceutical and home care industries looking for consistent excellence.",
    image: "/images/natural_product.png",
    images: ["/images/natural_product.png", "/images/why-choose-us.jpg"],
    featured: false,
    specifications: [
      { label: "Appearance", value: "Colorless to pale yellow liquid" },
      { label: "Odour", value: "Fresh, penetrating, camphoraceous" },
      { label: "Purity", value: "100% Pure & Natural" },
      { label: "Extraction Method", value: "Steam Distillation" },
      { label: "1,8-Cineole Content", value: "60% - 80%" },
      { label: "Packaging Options", value: "5kg, 25kg, 50kg, 180kg HDPE/Aluminium Drums" },
      { label: "Shelf Life", value: "24 Months (Proper Storage)" },
      { label: "Origin", value: "India" },
      { label: "Certifications", value: "FSSAI / Export Compliant Documentation Available" }
    ],
    applications: [
      "Aromatherapy & Wellness",
      "Cosmetics & Personal Care",
      "Pharmaceutical Formulations",
      "Cleaning & Home Care Products",
      "Industrial & Fragrance Blends"
    ]
  }
];

