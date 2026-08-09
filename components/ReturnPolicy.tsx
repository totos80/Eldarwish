"use client";

import {
  RotateCcw,
  ShieldCheck,
  PackageCheck,
  Clock3,
} from "lucide-react";

const policies = [
  {
    icon: RotateCcw,
    title: "سهولة الاسترجاع",
    description:
      "يمكن طلب استرجاع المنتج خلال الفترة المسموح بها وفق سياسة المتجر.",
  },
  {
    icon: PackageCheck,
    title: "المنتج كما هو",
    description:
      "يشترط أن يكون المنتج بحالته الأصلية وغير مستخدم مع العبوة الأصلية.",
  },
  {
    icon: Clock3,
    title: "سرعة معالجة الطلب",
    description:
      "يتم مراجعة طلبات الاسترجاع والاستبدال في أسرع وقت ممكن.",
  },
  {
    icon: ShieldCheck,
    title: "ضمان الجودة",
    description:
      "في حالة وجود خطأ من جانبنا يتم الاستبدال أو الاسترجاع دون أي رسوم إضافية.",
  },
];

export default function ReturnPolicy() {
  return (
    <section className="py-20">

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-extrabold">

          سياسة الاستبدال والاسترجاع

        </h2>

        <p className="mt-4 text-stone-600">

          هدفنا هو رضا العميل وتقديم أفضل تجربة شراء ممكنة.

        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {policies.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">

                <Icon
                  size={30}
                  className="text-amber-700"
                />

              </div>

              <h3 className="mb-4 text-xl font-bold">

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
