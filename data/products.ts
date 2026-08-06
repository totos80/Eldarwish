import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    slug: "cardamom-premium",
    name: "هيل حب فاخر",
    category: "التوابل",
    description: "هيل أخضر فاخر برائحة قوية وجودة عالية.",
    image: "/images/products/cardamom.jpg",
    price: 220,
    unit: "250 جم",
    inStock: true,
    featured: true,
    tags: ["هيل","بهارات","قهوة"],
    seoTitle: "هيل حب فاخر | عطارة الدرويش",
    seoDescription: "هيل أخضر فاخر مناسب للقهوة والحلويات."
  },
  {
    id: 2,
    slug: "ceylon-cinnamon",
    name: "قرفة سيلاني",
    category: "التوابل",
    description: "قرفة طبيعية ممتازة للطهي والمشروبات.",
    image: "/images/products/cinnamon.jpg",
    price: 95,
    unit: "250 جم",
    inStock: true,
    featured: true,
    tags: ["قرفة","مشروبات"],
    seoTitle: "قرفة سيلاني | عطارة الدرويش",
    seoDescription: "قرفة طبيعية عالية الجودة."
  },
  {
    id: 3,
    slug: "turmeric",
    name: "كركم طبيعي",
    category: "التوابل",
    description: "كركم ناعم بلون طبيعي ونكهة قوية.",
    image: "/images/products/turmeric.jpg",
    price: 80,
    unit: "250 جم",
    inStock: true,
    featured: false,
    tags: ["كركم","بهارات"],
    seoTitle: "كركم طبيعي",
    seoDescription: "كركم فاخر من عطارة الدرويش."
  },
  {
    id: 4,
    slug: "thyme",
    name: "زعتر بري",
    category: "الأعشاب",
    description: "زعتر بري مجفف بعناية.",
    image: "/images/products/thyme.jpg",
    price: 110,
    unit: "250 جم",
    inStock: true,
    featured: true,
    tags: ["زعتر","أعشاب"],
    seoTitle: "زعتر بري",
    seoDescription: "زعتر طبيعي فاخر."
  }
];

export const featuredProducts = products.filter(p => p.featured);

export function getProductBySlug(slug:string){
  return products.find(p=>p.slug===slug);
}


