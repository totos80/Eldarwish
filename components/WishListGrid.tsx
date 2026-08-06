"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, ShoppingCart } from "lucide-react";

import { useWishlist } from "@/context/WishlistContext";

interface WishlistGridProps {
  onAddToCart?: (id: number) => void;
}

export default function WishlistGrid({
  onAddToCart,
}: WishlistGridProps) {

  const {
    items,
    remove,
  } = useWishlist();

  if (!items.length) {

    return (

      <div className="rounded-3xl border border-dashed border-stone-300 bg-white p-16 text-center">

        <div className="text-6xl">
          ❤️
        </div>

        <h2 className="mt-6 text-3xl font-bold">

          لا توجد منتجات بالمفضلة

        </h2>

        <p className="mt-4 text-stone-500 leading-8">

          أضف المنتجات التي تعجبك حتى تستطيع الرجوع إليها بسهولة.

        </p>

        <Link
          href="/products"
          className="mt-8 inline-flex rounded-xl bg-amber-700 px-8 py-4 font-bold text-white transition hover:bg-amber-800"
        >
          تصفح المنتجات
        </Link>

      </div>

    );

  }

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {items.map((product) => (

        <div
          key={product.id}
          className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:shadow-lg"
        >

          <div className="relative h-64">

            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />

          </div>

          <div className="p-6">

            <h3 className="text-xl font-bold">

              {product.name}

            </h3>

            <p className="mt-3 text-2xl font-extrabold text-amber-700">

              {product.price} ج.م

            </p>

            <div className="mt-8 flex gap-3">

              <button

                onClick={() => {

                  if (onAddToCart) {

                    onAddToCart(product.id);

                  }

                }}

                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-700 py-3 font-bold text-white transition hover:bg-amber-800"

              >

                <ShoppingCart size={20} />

                أضف للسلة

              </button>

              <button

                onClick={() => remove(product.id)}

                className="rounded-xl border border-red-200 p-3 text-red-600 transition hover:bg-red-50"

              >

                <Trash2 size={20} />

              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  );

}
