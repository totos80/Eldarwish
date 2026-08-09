"use client";

import {
  CreditCard,
  Wallet,
  Landmark,
  Banknote,
} from "lucide-react";

const methods = [
  {
    id: 1,
    title: "الدفع عند الاستلام",
    description:
      "يمكنك الدفع نقداً عند استلام الطلب.",
    icon: Banknote,
  },
  {
    id: 2,
    title: "فودافون كاش",
    description:
      "تحويل سريع وآمن عبر Vodafone Cash.",
    icon: Wallet,
  },
  {
    id: 3,
    title: "تحويل بنكي",
    description:
      "متاح للشركات وطلبات الجملة.",
    icon: Landmark,
  },
  {
    id: 4,
    title: "بطاقات الدفع",
    description:
      "جاهز لإضافة الدفع الإلكتروني مستقبلاً.",
    icon: CreditCard,
  },
];

export default function PaymentMethods() {
  return (
    <section className="py-20">

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-extrabold">

          طرق الدفع

        </h2>

        <p className="mt-4 text-stone-600">

          اختر الطريقة الأنسب لإتمام طلبك.

        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {methods.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.id}
              className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl"
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
