"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

type Props = {
  searchParams: {
    category?: string;
  };
};

export default function ProductsPage({
  searchParams,
}: Props) {
  const [search, setSearch] = useState("");

  const selectedCategory = searchParams?.category || "";

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products
      .filter((product) => {
        if (!selectedCategory) {
          return true;
        }

        return product.category === selectedCategory;
      })
      .filter((product) => {
        if (!query) {
          return true;
        }

        return product.name.toLowerCase().includes(query);
      })
      .sort((a, b) =>
        a.name.localeCompare(b.name, "ar")
      );
  }, [search, selectedCategory]);

  const title = selectedCategory
    ? selectedCategory
    : "جميع المنتجات";

  return (
    <>
      <Header />

      <main className="container py-12">
        <div className="mb-10">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-stone-900">
              {title}
            </h1>

            <p className="mt-2 text-stone-500">
              {selectedCategory
                ? `منتجات قسم ${selectedCategory} من عطارة الدَرْويش.`
                : "تصفح جميع منتجات عطارة الدَرْويش."}
            </p>
          </div>

          <SearchBar
            value={search}
            onChange={setSearch}
          />
        </div>

        {search && (
          <div className="mb-6 rounded-2xl border border-amber-100 bg-amber-50 px-5 py-4 text-right">
            <p className="font-bold text-stone-800">
              نتائج البحث عن:
              <span className="mr-2 text-amber-700">
                "{search}"
              </span>
            </p>

            <p className="mt-1 text-sm text-stone-500">
              تم العثور على {filteredProducts.length} منتج
            </p>
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl border border-amber-100 bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-stone-800">
              لا توجد نتائج
            </h2>

            <p className="mt-3 text-stone-500">
              جرّب كتابة اسم المنتج بطريقة مختلفة.
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
      </main>

      <Footer />
    </>
  );
}
