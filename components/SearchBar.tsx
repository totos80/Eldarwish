"use client";

import { Search, X } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-xl">
      <Search
        size={20}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-stone-400"
      />

      <input
        type="search"
        dir="rtl"
        placeholder="ابحث عن اسم المنتج..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-amber-200 bg-white py-4 pr-12 pl-12 text-right text-lg text-stone-800 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="مسح البحث"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-stone-400 transition hover:bg-stone-100 hover:text-stone-700"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
