"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Sparkles } from "lucide-react";

const products = [
  {
    id: 1,
    name: "هيل حب فاخر",
    image: "/images/products/cardamom.webp",
    price: 185,
    href: "/products/cardamom",
  },
  {
    id: 2,
    name: "زعتر بري",
    image: "/images/products/thyme.webp",
    price: 90,
    href: "/products/thyme",
  },
  {
    id: 3,
    name: "عسل السدر",
    image: "/images/products/sidr-honey.webp",
    price: 420,
    href: "/products/sidr-honey",
  },
  {
    id: 4,
    name: "قهوة عربية",
    image: "/images/products/arabic-coffee.webp",
    price: 260,
    href: "/products/arabic-coffee",
  },
];

export default function NewArrivals() {
  return (
    <section className="py-20">

      <div className="mb-12 flex items-center justify-between">

        <div>

          <div className="mb-3 flex items-center gap-2 text-amber-700">

            <Sparkles size={22} />

            <span className="font-bold">

              جديد المتجر

            </span>

          </div>

          <h2 className="text-4xl font-extrabold">

            أحدث المنتجات

          </h2>

        </div>

        <Link
          href="/products?sort=newest"
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

              <div className="mt-4 flex items-center justify-between">

                <span className="text-2xl font-extrabold text-amber-700">

                  {product.price} ج.م

                </span>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">

                  جديد

                </span>

              </div>

              <button
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-700 py-3 font-bold text-white transition hover:bg-amber-800"
              >

                <ShoppingCart size={18} />

                أضف للسلة

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
