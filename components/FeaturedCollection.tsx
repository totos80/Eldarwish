"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "منتجات التخسيس الطبيعية",
    description:
      "مجموعة مختارة من الأعشاب الطبيعية.",
    image: "/images/collections/slimming.webp",
    href: "/products?collection=slimming",
  },
  {
    id: 2,
    title: "منتجات المناعة",
    description:
      "أفضل الأعشاب والخلطات الطبيعية.",
    image: "/images/collections/immunity.webp",
    href: "/products?collection=immunity",
  },
  {
    id: 3,
    title: "القهوة العربية",
    description:
      "قهوة عربية فاخرة بأجود الأنواع.",
    image: "/images/collections/coffee.webp",
    href: "/products?category=coffee",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="py-20">

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-extrabold">

          مجموعات مميزة

        </h2>

        <p className="mt-4 text-stone-600">

          اختر من أفضل المجموعات التي أعددناها خصيصًا لك.

        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        {collections.map((item) => (

          <Link
            key={item.id}
            href={item.href}
            className="group overflow-hidden rounded-3xl shadow-lg"
          >

            <div className="relative h-[420px]">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-8 text-white">

                <h3 className="text-3xl font-extrabold">

                  {item.title}

                </h3>

                <p className="mt-4 leading-8 text-stone-200">

                  {item.description}

                </p>

                <div className="mt-6 flex items-center gap-2 font-bold text-amber-300">

                  اكتشف المجموعة

                  <ArrowLeft size={18} />

                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}
