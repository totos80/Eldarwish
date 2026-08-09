"use client";

import {
  Package,
  Truck,
  Gift,
  ShoppingBag,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "بيع قطاعي وجملة",
    description:
      "نوفر المنتجات بالكميات الصغيرة والكبيرة بأسعار تنافسية.",
  },
  {
    icon: Package,
    title: "تغليف احترافي",
    description:
      "تعبئة وتغليف يحافظ على جودة الأعشاب والتوابل.",
  },
  {
    icon: Truck,
    title: "شحن لجميع المحافظات",
    description:
      "خدمة شحن سريعة وآمنة إلى جميع أنحاء مصر.",
  },
  {
    icon: Gift,
    title: "عروض موسمية",
    description:
      "خصومات وعروض مستمرة على العديد من المنتجات.",
  },
  {
    icon: PhoneCall,
    title: "الطلب عبر واتساب",
    description:
      "إمكانية إرسال الطلب مباشرة من خلال واتساب.",
  },
  {
    icon: ShieldCheck,
    title: "ضمان رضا العميل",
    description:
      "نسعى لتقديم أفضل خدمة ومنتجات بأعلى جودة.",
  },
];

export default function StoreServices() {
  return (
    <section className="py-20">

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-extrabold">

          خدماتنا

        </h2>

        <p className="mt-4 text-stone-600">

          كل ما تحتاجه من خدمات لتجربة شراء مميزة.

        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {services.map((service) => {

          const Icon = service.icon;

          return (

            <div
              key={service.title}
              className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">

                <Icon
                  size={30}
                  className="text-amber-700"
                />

              </div>

              <h3 className="mb-4 text-2xl font-bold">

                {service.title}

              </h3>

              <p className="leading-8 text-stone-600">

                {service.description}

              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}
