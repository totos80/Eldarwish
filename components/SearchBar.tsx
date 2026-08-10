"use client";

import { Search, X, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

type SearchBarProps = {
  onSearch?: (value: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (value: string) => {
    setQuery(value);
    onSearch?.(value);
  };

  return (
    <div className="catalog-search">
      <div className="catalog-search-box">
        <Search className="catalog-search-icon" size={21} />

        <input
          type="search"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="ابحث عن أعشاب، توابل، بن، زيوت..."
          aria-label="البحث عن المنتجات"
        />

        {query && (
          <button
            type="button"
            className="catalog-search-clear"
            onClick={() => handleChange("")}
            aria-label="مسح البحث"
          >
            <X size={18} />
          </button>
        )}

        <button
          type="button"
          className="catalog-filter-button"
          aria-label="خيارات الفلترة"
        >
          <SlidersHorizontal size={19} />
          <span>فلترة</span>
        </button>
      </div>

      <div className="catalog-search-hint">
        <span>⌕</span>
        <span>اكتب اسم المنتج للعثور عليه بسرعة</span>
      </div>
    </div>
  );
}
