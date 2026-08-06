"use client";

import { ProductCategory } from "@/types/product";

type Props = {
  categories: ProductCategory[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: Props) {
  return (
    <aside className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-bold">التصنيفات</h2>

      <button
        onClick={() => onCategoryChange("")}
        className={`mb-3 block w-full rounded-xl px-4 py-3 text-right transition ${
          selectedCategory === ""
            ? "bg-amber-700 text-white"
            : "bg-amber-50 hover:bg-amber-100"
        }`}
      >
        جميع المنتجات
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`mb-3 block w-full rounded-xl px-4 py-3 text-right transition ${
            selectedCategory === category
              ? "bg-amber-700 text-white"
              : "bg-amber-50 hover:bg-amber-100"
          }`}
        >
          {category}
        </button>
      ))}
    </aside>
  );
}


          
