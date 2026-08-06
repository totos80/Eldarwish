"use client";

import {
  Leaf,
  ShieldCheck,
  Truck,
  BadgeDollarSign,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const items = [
  {
    icon: Leaf,
    title: "منتجات طبيعية 100%",
    description:
      "نوفر أعشاب وتوابل ومنتجات طبيعية مختارة بعناية للحفاظ على أعلى جودة.",
  },
  {
    icon: ShieldCheck,
    title: "جودة مضمونة",
    description:
      "جميع المنتجات يتم اختيارها من موردين موثوقين مع الاهتمام بالتخزين السليم.",
  },
  {
    icon: Truck,
    title: "توصيل سريع",
    description:
      "توصيل داخل السويس وخارجها بأسرع وقت ممكن.",
  },
  {
    icon: BadgeDollarSign,
    title: "أفضل الأسعار",
    description:
      "أسعار تنافسية مع عروض وخصومات مستمرة.",
  },
  {
    icon: HeartHandshake,
    title: "خدمة عملاء مميزة",
    description:
      "نساعدك في اختيار المنتجات المناسبة والإجابة عن جميع استفساراتك.",
  },
  {
    icon: Sparkles,
    title: "تجربة شراء سهلة",
    description:
      "موقع سريع وسهل الاستخدام مع إمكانية الطلب مباشرة عبر واتساب.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">

      <div className="mb-14 text-center">

        <h2 className="text-4xl font-extrabold text-stone-900">

          لماذا عطارة الدرويش؟

        </h2>

        <p className="mx-auto mt-5 max-w-3xl leading-8 text-stone-600">

          نسعى لتقديم أفضل تجربة شراء لمنتجات العطارة والأعشاب
          الطبيعية مع جودة عالية وخدمة احترافية.

        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {items.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-3xl border border-stone-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">

                <Icon
                  size={30}
                  className="text-amber-700"
                />

              </div>

              <h3 className="mb-4 text-2xl font-bold">

                {item.title}

              </h3>

              <p className="leading-8 text-stone-600">

                {item.description}

              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}
