"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "الأعشاب الطبيعية",
    image: "/images/categories/herbs.webp",
    href: "/products?category=herbs",
    products: "120+ منتج",
  },
  {
    id: 2,
    title: "التوابل",
    image: "/images/categories/spices.webp",
    href: "/products?category=spices",
    products: "85+ منتج",
  },
  {
    id: 3,
    title: "التمور",
    image: "/images/categories/dates.webp",
    href: "/products?category=dates",
    products: "40+ منتج",
  },
  {
    id: 4,
    title: "الزيوت الطبيعية",
    image: "/images/categories/oils.webp",
    href: "/products?category=oils",
    products: "55+ منتج",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-20">

      <div className="mb-14 flex items-end justify-between">

        <div>

          <h2 className="text-4xl font-extrabold">

            الأقسام المميزة

          </h2>

          <p className="mt-4 text-stone-600">

            اكتشف أشهر أقسام متجر عطارة الدرويش.

          </p>

        </div>

        <Link
          href="/categories"
          className="hidden items-center gap-2 font-bold text-amber-700 md:flex"
        >
          عرض جميع الأقسام
          <ArrowLeft size={18} />
        </Link>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {categories.map((category) => (

          <Link
            key={category.id}
            href={category.href}
            className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="relative h-64 overflow-hidden">

              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

            <div className="p-6">

              <h3 className="text-2xl font-bold">

                {category.title}

              </h3>

              <p className="mt-3 text-stone-500">

                {category.products}

              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}
