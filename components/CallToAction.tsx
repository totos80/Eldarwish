"use client";

import Link from "next/link";
import { ArrowLeft, PhoneCall } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="my-20 overflow-hidden rounded-3xl bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700 text-white">

      <div className="flex flex-col items-center justify-between gap-10 px-8 py-14 lg:flex-row">

        <div>

          <h2 className="text-4xl font-extrabold">

            اطلب منتجاتك الآن من عطارة الدرويش

          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-9 text-amber-100">

            أكثر من 200 منتج من الأعشاب والتوابل والتمور والعسل
            والقهوة والبخور والزيوت الطبيعية بأفضل جودة وأفضل
            الأسعار.

          </p>

        </div>

        <div className="flex flex-wrap gap-4">

          <Link
            href="/products"
            className="flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-amber-800 transition hover:scale-105"
          >

            تصفح المنتجات

            <ArrowLeft size={20} />

          </Link>

          <a
            href="tel:01011193720"
            className="flex items-center gap-2 rounded-2xl border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-amber-800"
          >

            <PhoneCall size={20} />

            اتصل بنا

          </a>

        </div>

      </div>

    </section>
  );
}
