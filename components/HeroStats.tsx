"use client";

import {
  ShoppingBasket,
  Package,
  Truck,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: ShoppingBasket,
    value: "500+",
    title: "منتج متوفر",
  },
  {
    icon: Package,
    value: "25K+",
    title: "طلب مكتمل",
  },
  {
    icon: Truck,
    value: "24H",
    title: "سرعة التوصيل",
  },
  {
    icon: Star,
    value: "4.9",
    title: "تقييم العملاء",
  },
];

export default function HeroStats() {
  return (
    <section className="py-10">

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                rounded-3xl
                border
                border-stone-200
                bg-white
                p-8
                text-center
                shadow-sm
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">

                <Icon
                  size={30}
                  className="text-amber-700"
                />

              </div>

              <h3 className="text-4xl font-extrabold text-amber-700">

                {item.value}

              </h3>

              <p className="mt-3 text-stone-600">

                {item.title}

              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}
