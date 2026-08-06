"use client";

import {
  Users,
  ShoppingBag,
  PackageCheck,
  Star,
} from "lucide-react";

const statistics = [
  {
    icon: Users,
    value: "+10000",
    label: "عميل سعيد",
  },
  {
    icon: ShoppingBag,
    value: "+25000",
    label: "طلب تم تنفيذه",
  },
  {
    icon: PackageCheck,
    value: "+500",
    label: "منتج متوفر",
  },
  {
    icon: Star,
    value: "4.9",
    label: "متوسط تقييم العملاء",
  },
];

export default function NumbersSection() {
  return (
    <section className="bg-amber-700 py-20 text-white">

      <div className="container mx-auto px-4">

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-extrabold">

            عطارة الدرويش بالأرقام

          </h2>

          <p className="mt-5 text-amber-100">

            نفتخر بثقة عملائنا ونسعى دائماً لتقديم أفضل خدمة.

          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {statistics.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.label}
                className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm transition hover:bg-white/20"
              >

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/15">

                  <Icon size={36} />

                </div>

                <h3 className="text-5xl font-extrabold">

                  {item.value}

                </h3>

                <p className="mt-4 text-lg text-amber-100">

                  {item.label}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
