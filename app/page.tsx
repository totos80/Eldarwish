"use client";

import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
// تعديل المسار لضمان التوافق مع CartContext
import { useCart } from "@/context/CartContext"; 
import { ShoppingBag, Star, ShieldCheck, Truck, Clock } from "lucide-react";

export default function HomePage() {
  const { addToCart } = useCart();

  // جلب أول 8 منتجات بشكل آمن
  const featuredProducts = Array.isArray(products) ? products.slice(0, 8) : [];

  return (
    <main className="min-h-screen bg-[#f8f1df]">
      {/* 1. الهيدر */}
      <Header />

      {/* 2. بنر الترحيب */}
      <section className="mx-auto max-w-7xl px-4 pt-6 pb-2">
        <div className="rounded-3xl border border-[#183b2a]/15 bg-white/60 p-6 text-center shadow-sm backdrop-blur-sm">
          <h1 className="text-2xl font-black text-[#183b2a] sm:text-4xl font-['Traditional_Arabic','Andalus','Amiri',serif]">
            مرحباً بك في عطارة الدرويش
          </h1>
          <p className="mt-2 text-xs text-[#183b2a]/80 sm:text-base">
            أجود أنواع العطارة والبهارات المطحونة طازجاً والأقرب إليك دائماً.
          </p>
        </div>
      </section>

      {/* 3. مميزات المتجر */}
      <section className="my-4 border-y border-[#183b2a]/10 bg-[#efe4cc] py-3">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-3 px-4 text-center text-xs font-bold text-[#183b2a]">
          <div className="flex items-center gap-1.5">
            <Truck className="h-4 w-4 text-amber-700" />
            <span>توصيل سريع</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-amber-700" />
            <span>منتجات طبيعية 100%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-amber-700" />
            <span>طحن طازج</span>
          </div>
        </div>
      </section>

      {/* 4. شبكة عرض المنتجات */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="mb-6 flex items-center justify-between border-b border-[#183b2a]/15 pb-3">
          <div>
            <h2 className="text-xl font-black text-[#183b2a] sm:text-2xl font-['Traditional_Arabic','Andalus','Amiri',serif]">
              أحدث المنتجات
            </h2>
          </div>

          <Link
            href="/products"
            className="rounded-xl border border-[#183b2a] px-3 py-1.5 text-xs font-bold text-[#183b2a] transition hover:bg-[#183b2a] hover:text-amber-100"
          >
            عرض الكل
          </Link>
        </div>

        {/* عرض المنتجات */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-5">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#183b2a]/10 bg-white p-2.5 shadow-sm transition duration-300 hover:shadow-md"
            >
              <div>
                <Link
                  href={`/products/${product.slug}`}
                  className="relative block aspect-square w-full overflow-hidden rounded-xl bg-[#f8f1df]"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </Link>

                <div className="mt-2 text-right">
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">
                    {product.category}
                  </span>

                  <Link href={`/products/${product.slug}`}>
                    <h3 className="mt-1 truncate text-xs font-bold text-[#183b2a] sm:text-sm">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="mt-1 flex items-center gap-1 text-amber-500">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span className="text-[10px] font-bold text-[#183b2a]/70">4.9</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-[#183b2a]/10 pt-2">
                <div className="text-right">
                  <div className="text-xs font-black text-amber-800 sm:text-sm">
                    {product.price} <span className="text-[10px] font-normal">ج.م</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#183b2a] text-amber-100 transition hover:bg-amber-700 active:scale-95"
                  aria-label="إضافة للسلة"
                >
                  <ShoppingBag size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
