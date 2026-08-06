"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface RecentlyViewedProduct {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
}

const STORAGE_KEY = "eldarwish_recently_viewed";

export default function RecentlyViewed() {

  const [products, setProducts] = useState<
    RecentlyViewedProduct[]
  >([]);

  useEffect(() => {

    try {

      const saved = localStorage.getItem(
        STORAGE_KEY
      );

      if (!saved) return;

      setProducts(JSON.parse(saved));

    } catch {}

  }, []);

  if (!products.length) {

    return null;

  }

  return (

    <section className="mt-16">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold">

          شاهدتها مؤخراً

        </h2>

        <Link
          href="/products"
          className="text-amber-700 font-semibold"
        >
          عرض الكل
        </Link>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {products.map((product) => (

          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="relative h-52">

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />

            </div>

            <div className="p-5">

              <h3 className="line-clamp-2 text-lg font-bold">

                {product.name}

              </h3>

              <p className="mt-4 text-xl font-extrabold text-amber-700">

                {product.price} ج.م

              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );

}
