"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "محمد أحمد",
    city: "السويس",
    rate: 5,
    comment:
      "أفضل عطارة تعاملت معها، جودة المنتجات ممتازة والأسعار مناسبة جدًا.",
  },
  {
    id: 2,
    name: "أسماء حسن",
    city: "القاهرة",
    rate: 5,
    comment:
      "التغليف ممتاز والطلب وصل بسرعة، بالتأكيد سأطلب مرة أخرى.",
  },
  {
    id: 3,
    name: "محمود علي",
    city: "الإسماعيلية",
    rate: 5,
    comment:
      "البهارات طازجة ورائحتها رائعة، خدمة محترمة جدًا.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-extrabold">

          آراء عملائنا

        </h2>

        <p className="mt-4 text-stone-600">

          نفخر بثقة عملائنا في عطارة الدرويش.

        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {testimonials.map((item) => (

          <div
            key={item.id}
            className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="mb-5 flex">

              {Array.from({
                length: item.rate,
              }).map((_, index) => (

                <Star
                  key={index}
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />

              ))}

            </div>

            <p className="leading-8 text-stone-600">

              "{item.comment}"

            </p>

            <div className="mt-8">

              <h3 className="font-bold">

                {item.name}

              </h3>

              <span className="text-sm text-stone-500">

                {item.city}

              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
