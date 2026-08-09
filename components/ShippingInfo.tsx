"use client";

import {
  Truck,
  Clock3,
  MapPinned,
  ShieldCheck,
} from "lucide-react";

const shipping = [
  {
    icon: Truck,
    title: "توصيل داخل السويس",
    description:
      "توصيل سريع داخل جميع أحياء محافظة السويس.",
  },
  {
    icon: MapPinned,
    title: "شحن لجميع المحافظات",
    description:
      "نقوم بالشحن إلى جميع محافظات مصر.",
  },
  {
    icon: Clock3,
    title: "سرعة التنفيذ",
    description:
      "يتم تجهيز الطلبات خلال أقل وقت ممكن.",
  },
  {
    icon: ShieldCheck,
    title: "تغليف آمن",
    description:
      "تغليف احترافي يحافظ على جودة المنتجات أثناء الشحن.",
  },
];

export default function ShippingInfo() {
  return (
    <section className="py-20">

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-extrabold">

          الشحن والتوصيل

        </h2>

        <p className="mt-4 text-stone-600">

          نهتم بوصول طلبك بأفضل حالة وفي أسرع وقت.

        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {shipping.map((item, index) => {

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
