"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Leaf,
} from "lucide-react";

export default function FeatureBanner() {
  return (
    <section className="py-20">

      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-800 via-green-700 to-emerald-700">

        <div className="flex flex-col items-center justify-between gap-10 px-10 py-14 text-white lg:flex-row">

          <div>

            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/15">

              <Leaf size={42} />

            </div>

            <h2 className="text-4xl font-extrabold">

              منتجات طبيعية مختارة بعناية

            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-green-100">

              جميع الأعشاب والتوابل والزيوت الطبيعية يتم اختيارها
              بعناية للحفاظ على أعلى جودة وطعم ورائحة مميزة.

            </p>

          </div>

          <Link
            href="/products"
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-white
              px-8
              py-4
              font-bold
              text-green-800
              transition
              hover:scale-105
            "
          >

            تصفح المنتجات

            <ArrowLeft size={20} />

          </Link>

        </div>

      </div>

    </section>
  );
}
