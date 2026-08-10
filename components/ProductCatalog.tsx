"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { products } from "@/data/products";

const categories = [
  "الكل",
  ...Array.from(new Set(products.map((product) => product.category))),
];

export default function ProductCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("الكل");
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        category === "الكل" || product.category === category;

      const searchableText = [
        product.name,
        product.category,
        product.description,
        product.unit,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [query, category]);

  return (
    <>
      <div className="catalog-toolbar">
        <div className="catalog-title">
          <span className="section-kicker">اختياراتنا</span>
          <h2>تشكيلتنا المختارة</h2>
          <p>اختار المنتج الذي يناسبك وتعرف على تفاصيله.</p>
        </div>

        <SearchBar onSearch={setQuery} />

        <button
          type="button"
          className="catalog-filter"
          onClick={() => setFilterOpen((value) => !value)}
          aria-expanded={filterOpen}
        >
          <SlidersHorizontal size={18} />
          <span>التصنيفات</span>
        </button>
      </div>

      <div className={`catalog-category-panel ${filterOpen ? "open" : ""}`}>
        <div className="catalog-category-head">
          <strong>تصفح حسب التصنيف</strong>

          <button
            type="button"
            onClick={() => setFilterOpen(false)}
            aria-label="إغلاق التصنيفات"
          >
            <X size={18} />
          </button>
        </div>

        <div className="catalog-category-list">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                category === item
                  ? "catalog-category-chip active"
                  : "catalog-category-chip"
              }
              onClick={() => {
                setCategory(item);
                setFilterOpen(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="products-results-bar">
        <span>
          عرض <strong>{filteredProducts.length}</strong> منتج
        </span>

        <span className="results-note">
          {category === "الكل"
            ? "🌿 منتجات مختارة بعناية"
            : `🌿 ${category}`}
        </span>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="products-grid premium-products-grid">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className="products-empty">
          <strong>لم نجد المنتج المطلوب</strong>
          <span>جرّب كلمة بحث مختلفة أو اختر تصنيفًا آخر.</span>

          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("الكل");
            }}
          >
            عرض كل المنتجات
          </button>
        </div>
      )}
    </>
  );
}
