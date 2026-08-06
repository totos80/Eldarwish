"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import WishlistGrid from "@/components/WishlistGrid";

import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {

  const {

    items,

    clear,

  } = useWishlist();

  return (

    <>

      <Header />

      <main className="container py-14">

        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">

          <div>

            <h1 className="text-5xl font-extrabold">

              المفضلة

            </h1>

            <p className="mt-3 text-stone-500">

              جميع المنتجات التي قمت بحفظها.

            </p>

          </div>

          {items.length > 0 && (

            <button

              onClick={clear}

              className="rounded-xl bg-red-50 px-6 py-3 font-bold text-red-600 transition hover:bg-red-100"

            >

              حذف جميع المنتجات

            </button>

          )}

        </div>

        <WishlistGrid />

      </main>

      <Footer />

    </>

  );

}
