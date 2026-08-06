"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { Product } from "@/types/product";

export function useProductSearch() {
  const [query, setQuery] = useState("");

  const result: Product[] = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) return products;

    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search) ||
        product.tags.some(tag =>
          tag.toLowerCase().includes(search)
        )
      );
    });
  }, [query]);

  return {
    query,
    setQuery,
    result,
  };
}
