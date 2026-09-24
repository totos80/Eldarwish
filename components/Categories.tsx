"use client";

import Link from "next/link";

const categories = [
  {
    title: "العروض",
    href: "/offers",
    image: "/offers.jpg",
  },
  {
    title: "الزيوت",
    href: "/products?category=الزيوت",
    image: "/oils.jpg",
  },
  {
    title: "منتجات غذائية",
    href: "/products?category=الأغذية",
    image: "/food.jpg",
  },
  {
    title: "حبوب البن و القهوة العربية",
    href: "/products?category=القهوة",
    image: "/coffee.jpg",
  },
  {
    title: "توابل و بهارات",
    href: "/products?category=التوابل",
    image: "/spices.jpg",
  },
  {
    title: "أعشاب و عطارة",
    href: "/products?category=الأعشاب",
    image: "/herbs.jpg",
  },
  {
    title: "تمر خليجي و بلح",
    href: "/products?category=التمور",
    image: "/dates.jpg",
  },
  {
    title: "منتجات ليبية و خليجية",
    href: "/products?category=خليجية",
    image: "/gulf-libya.jpg",
  },
];

export default function Categories() {
  return (
    <section
      dir="rtl"
      className="mx-auto w-full max-w-[1400px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16"
    >
      <div className="mb-8 text-center">
        <span className="mb-2 block text-sm font-extrabold tracking-wide text-amber-700">
          تسوق حسب التصنيف
        </span>

        <h2 className="text-3xl font-black text-stone-800 sm:text-4xl">
          اكتشف تشكيلتنا
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-12">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="group block text-center"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-stone-100 shadow-md ring-1 ring-black/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <h3 className="mt-4 px-1 text-lg font-black leading-7 text-stone-800 transition-colors duration-300 group-hover:text-amber-700 sm:text-xl lg:text-[22px]">
              {category.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
