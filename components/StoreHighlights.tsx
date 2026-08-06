"use client";

import {
  Sparkles,
  Leaf,
  PackageCheck,
  Truck,
  Wallet,
  HeartHandshake,
} from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "خبرة طويلة",
    description:
      "سنوات من الخبرة في مجال العطارة والأعشاب الطبيعية.",
  },
  {
    icon: Leaf,
    title: "أعشاب طازجة",
    description:
      "تخزين احترافي للحفاظ على الرائحة والطعم والجودة.",
  },
  {
    icon: PackageCheck,
    title: "تعبئة احترافية",
    description:
      "تغليف يحافظ على جودة المنتج حتى يصل إليك.",
  },
  {
    icon: Truck,
    title: "توصيل سريع",
    description:
      "شحن سريع داخل السويس وإلى جميع المحافظات.",
  },
  {
    icon: Wallet,
    title: "أفضل قيمة",
    description:
      "أسعار مناسبة مع عروض وخصومات بشكل مستمر.",
  },
  {
    icon: HeartHandshake,
    title: "رضا العميل",
    description:
      "نسعى دائمًا لتقديم أفضل تجربة شراء ممكنة.",
  },
];

export default function StoreHighlights() {
  return (
    <section className="py-20">

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-extrabold">

          لماذا يختارنا العملاء؟

        </h2>

        <p className="mt-4 text-stone-600">

          الجودة والثقة والالتزام هي أساس عملنا.

        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {highlights.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-3xl border border-stone-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">

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
