"use client";

import {
  Store,
  Package,
  Truck,
  Smile,
} from "lucide-react";

const steps = [
  {
    icon: Store,
    title: "اختر المنتجات",
    description:
      "تصفح جميع منتجات عطارة الدرويش واختر ما يناسبك.",
  },
  {
    icon: Package,
    title: "تأكيد الطلب",
    description:
      "أرسل طلبك بسهولة عبر الموقع أو من خلال واتساب.",
  },
  {
    icon: Truck,
    title: "تجهيز وشحن الطلب",
    description:
      "يتم تجهيز الطلب بعناية ثم شحنه في أسرع وقت.",
  },
  {
    icon: Smile,
    title: "استلام الطلب",
    description:
      "استمتع بمنتجات طبيعية عالية الجودة مع خدمة مميزة.",
  },
];

export default function StoreTimeline() {
  return (
    <section className="py-20">

      <div className="mb-14 text-center">

        <h2 className="text-4xl font-extrabold">

          كيف تتم عملية الطلب؟

        </h2>

        <p className="mt-4 text-stone-600">

          خطوات بسيطة للحصول على منتجاتك.

        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {steps.map((step, index) => {

          const Icon = step.icon;

          return (

            <div
              key={index}
              className="relative rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <span className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-amber-700 text-sm font-bold text-white">

                {index + 1}

              </span>

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">

                <Icon
                  size={30}
                  className="text-amber-700"
                />

              </div>

              <h3 className="mb-4 text-2xl font-bold">

                {step.title}

              </h3>

              <p className="leading-8 text-stone-600">

                {step.description}

              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}
