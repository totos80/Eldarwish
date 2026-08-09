export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  unit: string;
  inStock: boolean;
  featured: boolean;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export type ProductCategory =
  | "الأعشاب"
  | "التوابل"
  | "الزيوت"
  | "البذور"
  | "المكسرات"
  | "العطارة"
  | "العروض";


