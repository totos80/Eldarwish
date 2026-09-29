"use client";

import Header from "@/components/Header";
import HeaderLuckyWheel from "@/components/HeaderLuckyWheel";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { useCart } from "@/context/CardContext";
import { ShoppingBag, Star, ShieldCheck, Truck, Clock } from "lucide-react";

export default function HomePage() {
  const { addToCart } = useCart();

  // تجميع الأقسام الفرعية أو المميزة
  const featuredProducts = products.slice(0, 8);

  return (
    <main className="min-h-screen bg-[#f8f1df]">
      {/* 1. الهيدر الذي يحتوي على اللوجو العريض والـ 3D */}
      <Header />

      {/* 2. عجلة الحظ أسفل الهيدر مباشرة */}
      <HeaderLuckyWheel />

      {/* 3. مميزات المتجر السريعة */}
      <section className="border-b border-[#183b2a]/10 bg-[#efe4cc] py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-4 px-4 text-center text-xs font-bold text-[#183b2a] sm:text-sm">
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-amber-700" />
            <span>توصيل سريع لجميع المحافظات</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-amber-700" />
            <span>منتجات عطارة طبيعية 100%</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-amber-700" />
            <span>طحن طازج عند الطلب</span>
          </div>
        </div>
      </section>

      {/* 4. قسم المنتجات الأحدث / الأكثر مبيعاً */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8 flex items-center justify-between border-b border-[#183b2a]/15 pb-4">
          <div>
            <h2 className="text-2xl font-black text-[#183b2a] sm:text-3xl font-['Traditional_Arabic','Andalus','Amiri',serif]">
              أجود منتجات العطارة والبهارات
            </h2>
            <p className="mt-1 text-xs text-[#183b2a]/70 sm:text-sm">
              اختر من بين تشكيلاتنا العالية الجودة والمطحونة طازجاً
            </p>
          </div>

          <Link
            href="/products"
            className="rounded-xl border border-[#183b2a] px-4 py-2 text-xs font-bold text-[#183b2a] transition hover:bg-[#183b2a] hover:text-amber-100 sm:text-sm"
          >
            عرض الكل
          </Link>
        </div>

        {/* شبكة عرض المنتجات Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#183b2a]/10 bg-white p-3 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                {/* صورة المنتج */}
                <Link
                  href={`/products/${product.slug}`}
                  className="relative block aspect-square w-full overflow-hidden rounded-xl bg-[#f8f1df]"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* تفاصيل المنتج */}
                <div className="mt-3 text-right">
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                    {product.category}
                  </span>

                  <Link href={`/products/${product.slug}`}>
                    <h3 className="mt-1.5 truncate text-sm font-bold text-[#183b2a] sm:text-base">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="mt-1 flex items-center gap-1 text-amber-500">
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-[#183b2a]/70">4.9</span>
                  </div>
                </div>
              </div>

              {/* السعر وزر الإضافة للسلة */}
              <div className="mt-4 flex items-center justify-between border-t border-[#183b2a]/10 pt-3">
                <div className="text-right">
                  <span className="text-xs text-[#183b2a]/60">السعر</span>
                  <div className="text-sm font-black text-amber-800 sm:text-base">
                    {product.price} <span className="text-xs font-normal">ج.م</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#183b2a] text-amber-100 transition hover:bg-amber-600 active:scale-95"
                  aria-label="إضافة للسلة"
                >
                  <ShoppingBag size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
