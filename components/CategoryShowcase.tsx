"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "الأعشاب",
    image: "/categories/herbs.jpg",
    href: "/products?category=herbs",
  },
  {
    id: 2,
    title: "التوابل",
    image: "/categories/spices.jpg",
    href: "/products?category=spices",
  },
  {
    id: 3,
    title: "التمور",
    image: "/categories/dates.jpg",
    href: "/products?category=dates",
  },
  {
    id: 4,
    title: "العسل",
    image: "/categories/honey.jpg",
    href: "/products?category=honey",
  },
  {
    id: 5,
    title: "القهوة",
    image: "/categories/coffee.jpg",
    href: "/products?category=coffee",
  },
  {
    id: 6,
    title: "الزيوت الطبيعية",
    image: "/categories/oils.jpg",
    href: "/products?category=oils",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="py-20">

      <div className="mb-14 text-center">

        <h2 className="text-4xl font-extrabold">

          تسوق حسب القسم

        </h2>

        <p className="mt-4 text-stone-600">

          اختر القسم الذي تبحث عنه وابدأ التسوق بسهولة.

        </p>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {categories.map((category) => (

          <Link
            key={category.id}
            href={category.href}
            className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="relative h-64 overflow-hidden">

              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

            <div className="p-6 text-center">

              <h3 className="text-2xl font-bold">

                {category.title}

              </h3>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}
