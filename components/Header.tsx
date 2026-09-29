"use client";

import Link from "next/link";
import { Search, ShoppingBag, ChevronDown, X } from "lucide-react";
import { useCart } from "@/context/CardContext";
import { useState } from "react";
import FloatingCartButton from "@/components/FloatingCartButton";
import { products } from "@/data/products";

function normalizeArabic(text: string) {
  return text
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ـ/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export default function Header() {
  const { items, total } = useCart();

  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const normalizedSearch = normalizeArabic(search);

  const searchResults =
    normalizedSearch.length > 0
      ? products
          .filter((product) => {
            const name = normalizeArabic(product.name);
            const category = normalizeArabic(product.category);

            return (
              name.includes(normalizedSearch) ||
              category.includes(normalizedSearch)
            );
          })
          .slice(0, 8)
      : [];

  const openSearch = () => {
    setSearchOpen(true);
    setCartOpen(false);
  };

  const openCart = () => {
    setCartOpen(true);
    setSearchOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-[9998] border-b border-amber-200/20 bg-[#183b2a]/95 shadow-xl backdrop-blur-md">
        <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-3 px-3 sm:px-5 lg:px-8">

          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2"
            onClick={() => {
              setSearchOpen(false);
              setCartOpen(false);
            }}
          >
            <div className="min-w-0">
              <div className="truncate text-xl font-bold tracking-wide text-amber-100 sm:text-2xl">
                الدَرْوِيش
              </div>

              <div className="hidden text-[10px] tracking-[0.18em] text-amber-200/70 sm:block">
                عطارة الدرويش
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-5 md:flex">
            <Link
              href="/"
              className="text-sm font-semibold text-amber-50 transition hover:text-amber-300"
            >
              الرئيسية
            </Link>

            <Link
              href="/products"
              className="text-sm font-semibold text-amber-50 transition hover:text-amber-300"
            >
              المنتجات
            </Link>

            <Link
              href="/offers"
              className="text-sm font-semibold text-amber-50 transition hover:text-amber-300"
            >
              العروض
            </Link>

            <Link
              href="/about"
              className="text-sm font-semibold text-amber-50 transition hover:text-amber-300"
            >
              عن الدرويش
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">

            {/* Search */}
            <button
              className="icon-button flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/20 text-amber-100 transition hover:bg-amber-100/10"
              aria-label="بحث"
              type="button"
              onClick={openSearch}
            >
              <Search size={21} />
            </button>

            {/* Cart */}
            <button
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/20 text-amber-100 transition hover:bg-amber-100/10"
              aria-label="سلة المشتريات"
              type="button"
