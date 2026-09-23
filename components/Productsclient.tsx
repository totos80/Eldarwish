"use client";

import { useMemo, useState } from "react";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

type Props = {
  products: Product[];
};

function normalizeArabic(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ـ/g, "")
    .replace(/\s+/g, " ");
}

export default function ProductsClient({
  products,
}: Props) {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const query = normalizeArabic(search);

    if (!query) {
      return products;
    }

    return products.filter((product) => {
      const productName = normalizeArabic(product.name);
      const productCategory = normalizeArabic(product.category);

      return (
        productName.includes(query) ||
        productCategory.includes(query)
      );
    });
  }, [products, search]);

  return (
    <>
      <div className="mb-8">
        <SearchBar
          value={search}
          onChange={setSearch}
        />
      </div>

      {search.trim() && (
        <div className="mb-6 rounded-2xl border border-amber-100 bg-amber-50 px-5 py-4 text-right">
          <p className="font-bold text-stone-800">
            نتائج البحث عن:
            <span className="mr-2 text-amber-700">
              "{search}"
            </span>
          </p>

          <p className="mt-1 text-sm text-stone-500">
            عدد النتائج: {filteredProducts.length}
          </p>
        </div>
      )}

      {filteredProducts.length === 0 ? (
        <div className="rounded-3xl border border-amber-100 bg-white p-12 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-stone-800">
            لا توجد نتائج
          </h2>

          <p className="mt-3 text-stone-500">
            جرّب كتابة جزء من اسم المنتج بطريقة مختلفة.
          </p>

          <button
            type="button"
            onClick={() => setSearch("")}
            className="mt-6 rounded-xl bg-amber-700 px-6 py-3 font-bold text-white transition hover:bg-amber-800"
          >
            عرض جميع المنتجات
          </button>
        </div>
      ) : (
        <section className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </section>
      )}
    </>
  );
}
