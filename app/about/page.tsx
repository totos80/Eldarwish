import React from "react";

export default function AboutPage() {
  const phone = "01553939342";

  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#2b2118]">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl border border-amber-900/10 bg-white/70 p-8 shadow-sm md:p-12">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-amber-700">
            عطار الدرويش
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            عن الدَرْويش
          </h1>

          <div className="space-y-5 text-base leading-8 text-[#5b4a3a]">
            <p>
              الدَرْويش اسم يجمع بين روح العطارة الأصيلة واختيار المنتجات
              بعناية، مع الاهتمام بالجودة والنظافة والسعر المناسب.
            </p>

            <p>
              نعمل على توفير مجموعة متنوعة من التوابل والأعشاب والبقوليات
              ومنتجات العطارة وغيرها من الأصناف التي يحتاجها البيت المصري.
            </p>

            <p>
              هدفنا أن تلاقي الصنف اللي بتدور عليه بسهولة، وتطلبه بسرعة،
              وتحصل على خدمة محترمة وجودة نحرص عليها في كل طلب.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/products"
              className="rounded-full bg-[#5b3a24] px-6 py-3 font-semibold text-white transition hover:bg-[#432918]"
            >
              تصفح المنتجات
            </a>

            <a
              href={`tel:${phone}`}
              className="rounded-full border border-[#5b3a24] px-6 py-3 font-semibold text-[#5b3a24] transition hover:bg-[#5b3a24] hover:text-white"
            >
              اتصل بنا
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

