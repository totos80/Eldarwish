"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, ChevronDown, X, Menu } from "lucide-react";
import { useCart } from "@/context/CardContext";
import { useState, useEffect } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  return (
    <>
      <header className="sticky top-0 z-[9998] border-b border-amber-200/20 bg-[#183b2a] shadow-xl">
        <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-3 px-3 sm:px-5 lg:px-8">

          {/* اللوجو العودة للصفحة الرئيسية بالضغط على البنر/اللوجو */}
          <Link href="/" className="relative flex items-center gap-2 overflow-hidden py-1 group">
            <div className="relative h-12 w-36 sm:w-48 overflow-hidden rounded-xl border border-amber-200/20 shadow-md transition group-hover:scale-105">
              <Image
                src="/banner-jars.jpg"
                alt="عطارة الدرويش"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-1 right-2 text-xs sm:text-sm font-black text-amber-100 drop-shadow-md font-['Traditional_Arabic','Andalus','Amiri',serif]">
                عطارة الدرويش
              </div>
            </div>
          </Link>

          {/* القوائم الرئيسية (Navigation Links) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-amber-100">
            <Link href="/" className="transition hover:text-amber-300">
              الرئيسية
            </Link>
            <Link href="/products" className="transition hover:text-amber-300">
              جميع المنتجات
            </Link>
            <Link href="/categories" className="transition hover:text-amber-300">
              الأقسام
            </Link>

            {/* رابط الواتساب المباشر في الهيدر */}
            <a
              href="https://wa.me/201000000000" // استبدل برقم الواتساب الخاص بك
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs text-white transition hover:bg-emerald-500 shadow"
            >
              تواصل واتساب
            </a>
          </nav>

          {/* أزرار التحكم (البحث - السلة - الموبايل) */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/20 text-amber-100 transition hover:bg-amber-100/10"
              aria-label="بحث"
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search size={20} />
            </button>

            <button
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/20 text-amber-100 transition hover:bg-amber-100/10"
              aria-label="سلة المشتريات"
              type="button"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={20} />
              {isMounted && items && items.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-bold text-[#183b2a]">
                  {items.length}
                </span>
              )}
            </button>

            {/* قائمة الموبايل */}
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/20 text-amber-100 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* القائمة المنسدلة للموبايل */}
        {menuOpen && (
          <div className="border-t border-amber-100/10 bg-[#123021] p-4 md:hidden">
            <div className="flex flex-col gap-3 font-bold text-amber-100">
              <Link href="/" onClick={() => setMenuOpen(false)}>الرئيسية</Link>
              <Link href="/products" onClick={() => setMenuOpen(false)}>جميع المنتجات</Link>
              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center rounded-xl bg-emerald-600 py-2 text-white"
              >
                تواصل عبر الواتساب
              </a>
            </div>
          </div>
        )}

        {/* مربع البحث */}
        {searchOpen && (
          <div className="border-t border-amber-100/10 bg-[#123021] px-3 py-3">
            <div className="mx-auto max-w-3xl relative">
              <input
                autoFocus
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ابحث عن صنف..."
                className="w-full rounded-xl border border-amber-200/20 bg-white/10 py-2.5 pl-10 pr-10 text-right text-sm text-white outline-none focus:border-amber-300"
              />
              <X
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer text-amber-100/70"
                onClick={() => setSearchOpen(false)}
              />
            </div>
          </div>
        )}
      </header>

      {/* زر الواتساب العائم الأسفل (WhatsApp Floating Button) */}
      <a
        href="https://wa.me/201000000000" // ضع رقمك هنا
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition hover:scale-110 active:scale-95"
        aria-label="تواصل معنا عبر واتساب"
      >
        <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
      </a>
    </>
  );
}
