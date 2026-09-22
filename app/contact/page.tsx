import React from "react";

export default function ContactPage() {
  const phone = "01553939342";
  const whatsapp = "201553939342";

  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#2b2118]">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-amber-700">
            الدَرْويش
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            تواصل معنا
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#6b5845]">
            عندك استفسار عن منتج أو عايز تعمل طلب؟ تواصل معنا مباشرة،
            وإحنا هنساعدك.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-amber-900/10 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">
              بيانات التواصل
            </h2>

            <div className="space-y-5">
              <div>
                <p className="mb-1 text-sm text-[#8a7763]">الهاتف</p>

                <a
                  href={`tel:${phone}`}
                  className="text-lg font-semibold text-[#5b3a24] hover:underline"
                >
                  {phone}
                </a>
              </div>

              <div>
                <p className="mb-1 text-sm text-[#8a7763]">واتساب</p>

                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-green-700 hover:underline"
                >
                  تواصل معنا عبر واتساب
                </a>
              </div>

              <div>
                <p className="mb-1 text-sm text-[#8a7763]">العنوان</p>

                <p className="text-lg font-semibold">
                  السويس — حي فيصل
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-amber-900/10 bg-[#2b2118] p-8 text-[#f5ead7] shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-[#e6c27a]">
              اطلب بسهولة
            </h2>

            <p className="mb-8 leading-8 text-[#d8c8b2]">
              شوف المنتجات واختار اللي محتاجه، وبعدها تقدر تتواصل معنا
              مباشرة على واتساب لإتمام طلبك.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/products"
                className="rounded-full bg-[#e6c27a] px-6 py-3 font-bold text-[#2b2118] transition hover:opacity-90"
              >
                المنتجات
              </a>

              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#e6c27a] px-6 py-3 font-bold text-[#e6c27a] transition hover:bg-[#e6c27a] hover:text-[#2b2118]"
              >
                واتساب
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

