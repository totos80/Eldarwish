import { Product } from "@/types/product";

export interface ProductFilters {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStockOnly?: boolean;
  featuredOnly?: boolean;
}

export function filterProducts(
  products: Product[],
  filters: ProductFilters
): Product[] {
  return products.filter((product) => {
    // البحث
    if (filters.search) {
      const query = filters.search.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags.some((tag) =>
          tag.toLowerCase().includes(query)
        );

      if (!matchesSearch) return false;
    }

    // التصنيف
    if (
      filters.category &&
      filters.category !== "" &&
      product.category !== filters.category
    ) {
      return false;
    }

    // أقل سعر
    if (
      filters.minPrice !== undefined &&
      product.price < filters.minPrice
    ) {
      return false;
    }

    // أعلى سعر
    if (
      filters.maxPrice !== undefined &&
      product.price > filters.maxPrice
    ) {
      return false;
    }

    // المنتجات المتوفرة فقط
    if (
      filters.inStockOnly &&
      !product.inStock
    ) {
      return false;
    }

    // المنتجات المميزة فقط
    if (
      filters.featuredOnly &&
      !product.featured
    ) {
      return false;
    }

    return true;
  });
}
