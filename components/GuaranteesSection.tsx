"use client";

import {
  ShieldCheck,
  BadgeCheck,
  RotateCcw,
  Headset,
} from "lucide-react";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "ضمان الجودة",
    description:
      "جميع المنتجات يتم اختيارها وفحصها بعناية قبل البيع.",
  },
  {
    icon: BadgeCheck,
    title: "منتجات أصلية",
    description:
      "نلتزم بتوفير منتجات أصلية وعالية الجودة فقط.",
  },
  {
    icon: RotateCcw,
    title: "سهولة الاستبدال",
    description:
      "في حالة وجود مشكلة بالطلب سنساعدك في أسرع وقت.",
  },
  {
    icon: Headset,
    title: "دعم مستمر",
    description:
      "فريق خدمة العملاء متواجد للإجابة عن جميع استفساراتك.",
  },
];

export default function GuaranteesSection() {
  return (
    <section className="py-20">

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-extrabold">

          ضماناتنا لك

        </h2>

        <p className="mt-4 text-stone-600">

          لأن ثقة عملائنا هي أهم ما نملك.

        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {guarantees.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">

                <Icon
                  size={36}
                  className="text-green-700"
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
