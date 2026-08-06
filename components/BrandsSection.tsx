"use client";

import Image from "next/image";

const brands = [
  {
    id: 1,
    name: "الدرويش",
    image: "/brands/brand1.png",
  },
  {
    id: 2,
    name: "أعشاب طبيعية",
    image: "/brands/brand2.png",
  },
  {
    id: 3,
    name: "بهارات",
    image: "/brands/brand3.png",
  },
  {
    id: 4,
    name: "تمور",
    image: "/brands/brand4.png",
  },
  {
    id: 5,
    name: "عسل",
    image: "/brands/brand5.png",
  },
  {
    id: 6,
    name: "قهوة",
    image: "/brands/brand6.png",
  },
];

export default function BrandsSection() {
  return (
    <section className="py-20 bg-stone-50">

      <div className="container mx-auto px-4">

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-extrabold">

            أشهر المنتجات

          </h2>

          <p className="mt-4 text-stone-600">

            تشكيلة متنوعة من أفضل المنتجات المتوفرة لدينا.

          </p>

        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

          {brands.map((brand) => (

            <div
              key={brand.id}
              className="flex h-40 items-center justify-center rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <Image
                src={brand.image}
                alt={brand.name}
                width={120}
                height={120}
                className="object-contain"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
