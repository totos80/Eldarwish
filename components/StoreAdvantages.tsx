"use client";

import {
  ShieldCheck,
  Truck,
  Leaf,
  BadgeCheck,
  Wallet,
  Clock3,
} from "lucide-react";

const advantages = [
  {
    icon: Leaf,
    title: "منتجات طبيعية",
    description:
      "أعشاب وتوابل وزيوت طبيعية مختارة بعناية.",
  },
  {
    icon: BadgeCheck,
    title: "جودة مضمونة",
    description:
      "نفحص جميع المنتجات قبل وصولها إلى العميل.",
  },
  {
    icon: Truck,
    title: "شحن سريع",
    description:
      "توصيل داخل السويس والشحن لجميع المحافظات.",
  },
  {
    icon: Wallet,
    title: "أسعار منافسة",
    description:
      "أفضل سعر مقابل أعلى جودة ممكنة.",
  },
  {
    icon: ShieldCheck,
    title: "شراء آمن",
    description:
      "خصوصية كاملة وحماية لجميع بيانات العملاء.",
  },
  {
    icon: Clock3,
    title: "دعم سريع",
    description:
      "الرد على الاستفسارات والطلبات بأسرع وقت.",
  },
];

export default function StoreAdvantages() {
  return (
    <section className="py-20">

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-extrabold">

          مميزات التسوق معنا

        </h2>

        <p className="mt-4 text-stone-600">

          نسعى لتقديم أفضل تجربة شراء لعملائنا.

        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {advantages.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">

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
