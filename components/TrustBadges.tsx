"use client";

import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Wallet,
  Clock3,
  Headphones,
} from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "تسوق آمن",
    text: "بياناتك محمية بالكامل.",
  },
  {
    icon: Truck,
    title: "شحن سريع",
    text: "داخل السويس وجميع المحافظات.",
  },
  {
    icon: BadgeCheck,
    title: "جودة مضمونة",
    text: "منتجات مختارة بعناية.",
  },
  {
    icon: Wallet,
    title: "دفع مرن",
    text: "الدفع عند الاستلام وفودافون كاش.",
  },
  {
    icon: Clock3,
    title: "استجابة سريعة",
    text: "الرد على الطلبات في أسرع وقت.",
  },
  {
    icon: Headphones,
    title: "دعم مستمر",
    text: "خدمة عملاء قبل وبعد الشراء.",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16">

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {badges.map((badge) => {

          const Icon = badge.icon;

          return (

            <div
              key={badge.title}
              className="flex items-start gap-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-500 hover:shadow-xl"
            >

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber-100">

                <Icon
                  size={30}
                  className="text-amber-700"
                />

              </div>

              <div>

                <h3 className="text-xl font-bold">

                  {badge.title}

                </h3>

                <p className="mt-2 leading-7 text-stone-600">

                  {badge.text}

                </p>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}
