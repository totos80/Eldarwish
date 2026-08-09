import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
            جودة طبيعية • أسعار منافسة
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-stone-900 md:text-6xl">
            عطارة الدرويش
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            نوفر أجود الأعشاب، التوابل، البهارات، العطارة، الزيوت الطبيعية،
            والبذور المختارة بعناية مع خدمة توصيل سريعة داخل السويس.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-xl bg-amber-700 px-6 py-3 font-semibold text-white hover:bg-amber-800"
            >
              تصفح المنتجات
            </Link>

            <a
              href="https://wa.me/201011193720"
              target="_blank"
              className="rounded-xl border border-amber-700 px-6 py-3 font-semibold text-amber-700 hover:bg-amber-50"
            >
              اطلب عبر واتساب
            </a>
          </div>

          <div className="mt-12 flex items-center gap-2 text-amber-700 font-semibold">
            اكتشف عروض الافتتاح
            <ArrowLeft size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}


