"use client";

import {
  FileText,
  ShoppingBag,
  RefreshCcw,
  AlertCircle,
} from "lucide-react";

const terms = [
  {
    icon: ShoppingBag,
    title: "الطلبات",
    description:
      "يعتبر الطلب مؤكداً بعد التواصل مع العميل عبر الهاتف أو واتساب وتأكيد بيانات الطلب.",
  },
  {
    icon: RefreshCcw,
    title: "الاستبدال والاسترجاع",
    description:
      "يمكن استبدال أو استرجاع المنتجات في حالة وجود خطأ في الطلب أو وجود عيب بالمنتج وفق سياسة المتجر.",
  },
  {
    icon: AlertCircle,
    title: "الأسعار",
    description:
      "قد يتم تحديث الأسعار بشكل دوري طبقاً لأسعار السوق، ويتم اعتماد السعر الظاهر وقت تأكيد الطلب.",
  },
  {
    icon: FileText,
    title: "شروط الاستخدام",
    description:
      "باستخدامك للموقع فإنك توافق على جميع الشروط والأحكام الخاصة بعطارة الدرويش.",
  },
];

export default function TermsSection() {
  return (
    <section className="py-20">

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-extrabold">

          الشروط والأحكام

        </h2>

        <p className="mt-4 text-stone-600">

          نرجو قراءة الشروط التالية قبل استخدام الموقع.

        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {terms.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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
