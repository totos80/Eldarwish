"use client";

import {
  Users,
  Package,
  Star,
  Award,
} from "lucide-react";

const stats = [
  {
    id: 1,
    title: "عميل سعيد",
    value: "10,000+",
    icon: Users,
  },
  {
    id: 2,
    title: "منتج متوفر",
    value: "200+",
    icon: Package,
  },
  {
    id: 3,
    title: "تقييم العملاء",
    value: "4.9/5",
    icon: Star,
  },
  {
    id: 4,
    title: "سنوات الخبرة",
    value: "25+",
    icon: Award,
  },
];

export default function StatsSection() {
  return (
    <section className="py-20">

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.id}
              className="rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100">

                <Icon
                  size={36}
                  className="text-amber-700"
                />

              </div>

              <h3 className="text-4xl font-extrabold text-amber-700">

                {item.value}

              </h3>

              <p className="mt-3 text-lg font-medium text-stone-600">

                {item.title}

              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}
