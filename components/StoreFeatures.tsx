"use client";

import {
  Truck,
  ShieldCheck,
  BadgePercent,
  Leaf,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: Truck,
    title: "توصيل سريع",
    description:
      "توصيل الطلبات بأسرع وقت داخل السويس والمحافظات.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "جودة مضمونة",
    description:
      "منتجات مختارة بعناية من أفضل الموردين.",
  },
  {
    id: 3,
    icon: BadgePercent,
    title: "أفضل الأسعار",
    description:
      "أسعار منافسة وعروض مستمرة طوال العام.",
  },
  {
    id: 4,
    icon: Leaf,
    title: "منتجات طبيعية",
    description:
      "أعشاب، توابل، وعطارة بجودة عالية.",
  },
];

export default function StoreFeatures() {
  return (
    <section className="py-16">

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {features.map((feature) => {

          const Icon = feature.icon;

          return (

            <div
              key={feature.id}
              className="rounded-2xl border border-stone-200 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">

                <Icon
                  size={30}
                  className="text-amber-700"
                />

              </div>

              <h3 className="text-xl font-bold">

                {feature.title}

              </h3>

              <p className="mt-4 leading-7 text-stone-600">

                {feature.description}

              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}
