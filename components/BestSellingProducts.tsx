"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "حبة البركة",
    image: "/images/products/habbat-albaraka.webp",
    price: 75,
    href: "/products/habbat-albaraka",
  },
  {
    id: 2,
    name: "قرفة عيدان",
    image: "/images/products/cinnamon.webp",
    price: 95,
    href: "/products/cinnamon",
  },
  {
    id: 3,
    name: "كركم مطحون",
    image: "/images/products/turmeric.webp",
    price: 60,
    href: "/products/turmeric",
  },
  {
    id: 4,
    name: "ينسون",
    image: "/images/products/anise.webp",
    price: 55,
    href: "/products/anise",
  },
];

export default function BestSellingProducts() {
  return (
    <section className="py-20">

      <div className="mb-12 flex items-center justify-between">

        <div>

          <h2 className="text-4xl font-extrabold">

            الأكثر مبيعًا

          </h2>

          <p className="mt-3 text-stone-600">

            المنتجات الأكثر طلبًا لدى عملائنا.

          </p>

        </div>

        <Link
          href="/products"
          className="font-bold text-amber-700"
        >
          عرض الكل
        </Link>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {products.map((product) => (

          <div
            key={product.id}
            className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >

            <Link href={product.href}>

              <div className="relative h-64">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />

              </div>

            </Link>

            <div className="p-6">

              <h3 className="text-xl font-bold">

                {product.name}

              </h3>

              <p className="mt-3 text-2xl font-extrabold text-amber-700">

                {product.price} ج.م

              </p>

              <div className="mt-6 flex gap-3">

                <Link
                  href={product.href}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border py-3 transition hover:border-amber-700 hover:text-amber-700"
                >

                  <Eye size={18} />

                  التفاصيل

                </Link>

                <button
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-700 py-3 font-bold text-white transition hover:bg-amber-800"
                >

                  <ShoppingCart size={18} />

                  شراء

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
