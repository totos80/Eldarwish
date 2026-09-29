"use client";

import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { useCart } from "@/context/CardContext";
import { ShoppingBag, Star, ShieldCheck, Truck, Clock } from "lucide-react";

export default function HomePage() {
  const { addItem } = useCart();

  const featuredProducts = Array.isArray(products) ? products.slice(0, 8) : [];

  return (
    <main className="min-h-screen bg-[#f8f1df]">
      {/* 1. الهيدر الرئيسي */}
      <Header />

      {/* 2. بنر الترحيب والعلامة التجارية */}
      <section className="mx-auto max-w-7xl px-4 pt-6 pb-2">
        <div className="relative overflow-hidden rounded-3xl border border-[#183b2a]/15 bg-white/70 p-6 text-center shadow-lg backdrop-blur-md">
          <div className="relative z-10">
            <h1 className="text-3xl font-black text-[#183b2a] sm:text-5xl font-['Traditional_Arabic','Andalus','Amiri',serif] drop-shadow-sm">
              عطارة الدرويش
            </h1>
            <p className="mt-2 text-sm font-semibold text-[#183b2a]/80 sm:text-lg">
              أجود أنواع العطارة والبهارات المطحونة طازجاً والأقرب إليك دائماً
            </p>
          </div>
        </div>
      </section>

      {/* 3. شريط مميزات المتجر */}
      <section className="my-6 border-y border-[#183b2a]/10 bg-[#efe4cc] py-3.5 shadow-inner">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-4 px-4 text-center text-xs font-bold text-[#183b2a] sm:text-sm">
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-amber-700" />
            <span>توصيل سريع لجميع المناطق</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-amber-700" />
            <span>منتجات طبيعية 100%</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-amber-700" />
            <span>طحن طازج عند الطلب</span>
          </div>
        </div>
      </section>

      {/* 4. شبكة عرض المنتجات */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="mb-6 flex items-center justify-between border-b border-[#183b2a]/15 pb-3">
          <div>
            <h2 className="text-2xl font-black text-[#183b2a] sm:text-3xl font-['Traditional_Arabic','Andalus','Amiri',serif]">
              أحدث المنتجات
            </h2>
          </div>

          <Link
            href="/products"
            className="rounded-xl border border-[#183b2a] bg-[#183b2a] px-4 py-2 text-xs font-bold text-amber-100 shadow transition hover:bg-[#24543c] sm:text-sm"
          >
            عرض جميع المنتجات
          </Link>
        </div>

        {/* عرض شبكة المنتجات */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#183b2a]/10 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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

                <div className="mt-3 text-right">
                  <span className="inline-block rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                    {product.category}
                  </span>

                  <Link href={`/products/${product.slug}`}>
                    <h3 className="mt-1.5 truncate text-sm font-bold text-[#183b2a] sm:text-base">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="mt-1 flex items-center gap-1 text-amber-500">
                    <Star size={13} className="fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-[#183b2a]/70">4.9</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-[#183b2a]/10 pt-2.5">
                <div className="text-right">
                  <div className="text-sm font-black text-amber-800 sm:text-base">
                    {product.price} <span className="text-xs font-normal">ج.م</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    addItem({
                      ...product,
                      quantity: 1,
                      pricingMode: "gram",
                      baseQuantity: 1,
                    })
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#183b2a] text-amber-100 shadow-md transition hover:bg-amber-700 active:scale-95"
                  aria-label="إضافة للسلة"
                >
                  <ShoppingBag size={17} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
