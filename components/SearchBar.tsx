"use client";

import { Search } from "lucide-react";
import { useState } from "react";

type SearchBarProps = {
  onSearch?: (value: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full max-w-xl">
      <Search
        size={20}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400"
      />

      <input
        type="search"
        placeholder="ابحث عن منتج..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch?.(e.target.value);
        }}
        className="w-full rounded-2xl border border-amber-200 bg-white py-4 pr-12 pl-4 outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-200"
      />
    </div>
  );
}


