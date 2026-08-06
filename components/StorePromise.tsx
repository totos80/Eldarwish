"use client";

import {
  CheckCircle2,
  ShieldCheck,
  Truck,
  Leaf,
  Headset,
  BadgePercent,
} from "lucide-react";

const promises = [
  {
    icon: Leaf,
    title: "أجود الخامات",
    description:
      "نختار أفضل الأعشاب والتوابل من مصادر موثوقة.",
  },
  {
    icon: ShieldCheck,
    title: "جودة مضمونة",
    description:
      "فحص جميع المنتجات قبل وصولها للعميل.",
  },
  {
    icon: Truck,
    title: "توصيل سريع",
    description:
      "تنفيذ الطلبات وشحنها بأسرع وقت ممكن.",
  },
  {
    icon: BadgePercent,
    title: "أسعار عادلة",
    description:
      "أفضل جودة بأفضل سعر ممكن.",
  },
  {
    icon: Headset,
    title: "دعم مستمر",
    description:
      "متواجدون دائمًا للرد على جميع الاستفسارات.",
  },
];

export default function StorePromise() {
  return (
    <section className="py-20">

      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-amber-50 to-white border border-amber-200">

        <div className="p-10">

          <div className="mb-12 text-center">

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100">

              <CheckCircle2
                size={42}
                className="text-amber-700"
              />

            </div>

            <h2 className="text-4xl font-extrabold">

              وعد عطارة الدرويش

            </h2>

            <p className="mt-5 text-stone-600">

              نلتزم بتقديم تجربة شراء مميزة وجودة تستحق ثقة عملائنا.

            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

            {promises.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="text-center"
                >

                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">

                    <Icon
                      size={30}
                      className="text-amber-700"
                    />

                  </div>

                  <h3 className="mb-3 text-xl font-bold">

                    {item.title}

                  </h3>

                  <p className="leading-7 text-stone-600">

                    {item.description}

                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}
