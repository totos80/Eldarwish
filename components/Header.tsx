"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, ChevronDown, X, Sparkles } from "lucide-react";
import { useCart } from "@/context/CardContext";
import { useState, useEffect } from "react";
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

          {/* Banner & 3D Interactive Logo Link */}
          <Link
            href="/"
            aria-label="الرئيسية - عطارة الدرويش"
            className="group relative flex flex-1 items-center justify-center overflow-hidden py-1"
            onClick={() => {
              setSearchOpen(false);
              setCartOpen(false);
            }}
          >
            <div className="relative flex h-16 w-full items-center justify-center overflow-hidden rounded-xl border border-amber-300/40 bg-gradient-to-r from-[#0d2218] via-[#183b2a] to-[#0d2218] shadow-[0_0_25px_rgba(217,119,6,0.3)] transition duration-500 hover:border-amber-400 hover:shadow-[0_0_35px_rgba(245,158,11,0.5)]">
              
              {/* صورة خلفية الرفوف والبرطمانات */}
              <Image
                src="/banner-jars.jpg"
                alt="عطارة الدرويش"
                fill
                priority
                className="object-cover opacity-30 transition-transform duration-700 group-hover:scale-110"
              />

              {/* هالة ذهبية مشعة خلف النص */}
              <div className="absolute h-10 w-2/3 rounded-full bg-amber-400/20 blur-xl transition-all duration-500 group-hover:bg-amber-300/40 group-hover:blur-2xl" />

              {/* النص المجسم الـ 3D مع النجوم المتلألئة */}
              <div className="relative z-10 flex items-center justify-center">
                <span className="relative inline-block text-2xl font-black tracking-widest text-amber-200 sm:text-3xl font-['Traditional_Arabic','Andalus','Amiri',serif] [text-shadow:_0_1px_0_#b45309,_0_2px_0_#92400e,_0_3px_0_#78350f,_0_4px_8px_rgba(0,0,0,0.9)] transition-all duration-300 group-hover:[text-shadow:_0_2px_0_#f59e0b,_0_4px_0_#b45309,_0_6px_0_#78350f,_0_10px_15px_rgba(0,0,0,0.95)]">
                  الأقرب إليك
                  
                  {/* نجمة 1: تنبض وتضوي أعلى اليمين */}
                  <span className="absolute -top-2 -right-4 flex h-3 w-3 items-center justify-center text-amber-200">
                    <Sparkles className="h-4 w-4 animate-bounce text-amber-200 drop-shadow-[0_0_8px_rgba(253,230,138,1)]" />
                  </span>
                  
                  {/* نجمة 2: وميض ناعم أسفل اليسار */}
                  <span className="absolute -bottom-1 -left-4 flex h-3 w-3 items-center justify-center text-amber-300">
                    <span className="absolute h-2 w-2 animate-ping rounded-full bg-amber-300 opacity-75" />
                    <Sparkles className="h-3 w-3 text-amber-300 drop-shadow-[0_0_6px_rgba(252,211,77,1)]" />
                  </span>
                </span>
              </div>

              {/* شعاع إضاءة مذهب متألق يمر بشكل دوري وعند الوقوف بالماوس */}
              <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-amber-100/25 to-transparent transition-all duration-1000 group-hover:left-full" />

            </div>
          </Link>

          {/* Actions: أزرار البحث والسلة */}
          <div className="flex shrink-0 items-center gap-2">

            {/* Search Button */}
            <button
              className="icon-button flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/20 text-amber-100 transition hover:bg-amber-100/10"
              aria-label="بحث"
              type="button"
              onClick={openSearch}
            >
              <Search size={21} />
            </button>

            {/* Cart Button */}
            <button
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/20 text-amber-100 transition hover:bg-amber-100/10"
              aria-label="سلة المشتريات"
              type="button"
              onClick={openCart}
            >
              <ShoppingBag size={21} />

              {isMounted && items.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-bold text-[#183b2a]">
                  {items.length}
                </span>
              )}
            </button>

            <Link
              href="/products"
              className="hidden items-center gap-1 text-sm font-semibold text-amber-100 md:flex"
            >
              تصفح المنتجات
              <ChevronDown size={16} />
            </Link>
          </div>
        </div>

        {/* Search Box */}
        {searchOpen && (
          <div className="border-t border-amber-100/10 bg-[#123021] px-3 py-3 shadow-2xl">
            <div className="mx-auto max-w-3xl">
              <div className="relative">
                <Search
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-200/60"
                />

                <input
                  autoFocus
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="ابحث عن صنف..."
                  className="w-full rounded-xl border border-amber-200/20 bg-white/10 py-3 pl-12 pr-12 text-right text-sm text-white outline-none placeholder:text-amber-100/50 focus:border-amber-300/60"
                />

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setSearchOpen(false);
                  }}
                  className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center justify-center text-amber-100/70 transition hover:text-white"
                  aria-label="إغلاق البحث"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search Results */}
              {normalizedSearch.length > 0 && (
                <div className="mt-2 overflow-hidden rounded-xl border border-amber-200/10 bg-[#f8f1df] shadow-2xl">
                  {searchResults.length > 0 ? (
                    <div className="max-h-[420px] overflow-y-auto">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.slug}`}
                          onClick={() => {
                            setSearchOpen(false);
                            setSearch("");
                          }}
                          className="flex items-center gap-3 border-b border-[#183b2a]/10 p-3 text-right transition last:border-b-0 hover:bg-[#efe4cc]"
                        >
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-white">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="truncate text-sm font-bold text-[#183b2a]">
                              {product.name}
                            </div>

                            <div className="mt-1 text-xs text-[#183b2a]/60">
                              {product.category}
                            </div>

                            <div className="mt-1 text-sm font-bold text-amber-700">
                              {product.price} جنيه
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-5 text-center text-sm font-semibold text-[#183b2a]/70">
                      مفيش أصناف مطابقة للبحث
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-[10000]">
          <button
            type="button"
            aria-label="إغلاق السلة"
            className="absolute inset-0 bg-black/50"
            onClick={() => setCartOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-[#f8f1df] p-5 shadow-2xl">
            <div className="mb-5 flex items-center justify-between border-b border-[#183b2a]/15 pb-4">
              <h2 className="text-xl font-bold text-[#183b2a]">
                سلة المشتريات
              </h2>

              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#183b2a] text-white"
                aria-label="إغلاق"
              >
                <X size={20} />
              </button>
            </div>

            {!isMounted || items.length === 0 ? (
              <div className="py-16 text-center">
                <ShoppingBag
                  size={42}
                  className="mx-auto mb-4 text-[#183b2a]/40"
                />

                <p className="font-semibold text-[#183b2a]/70">
                  السلة فاضية
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-[#183b2a]/10 bg-white p-3"
                  >
                    <div className="font-bold text-[#183b2a]">
                      {item.name}
                    </div>

                    <div className="mt-1 text-sm text-[#183b2a]/60">
                      الكمية: {item.quantity}
                    </div>

                    <div className="mt-1 font-bold text-amber-700">
                      {item.price} جنيه
                    </div>
                  </div>
                ))}

                <div className="mt-5 border-t border-[#183b2a]/15 pt-4">
                  <div className="flex items-center justify-between text-lg font-bold text-[#183b2a]">
                    <span>الإجمالي</span>
                    <span>{total} جنيه</span>
                  </div>

                  <Link
                    href="/cart"
                    onClick={() => setCartOpen(false)}
                    className="mt-4 block rounded-xl bg-[#183b2a] px-4 py-3 text-center font-bold text-amber-100 transition hover:bg-[#24543c]"
                  >
                    عرض السلة وإتمام الطلب
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {isMounted && <FloatingCartButton />}
    </>
  );
              }
