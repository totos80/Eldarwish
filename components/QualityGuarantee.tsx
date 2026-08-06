"use client";

import {
  ShieldCheck,
  Leaf,
  Award,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "مواد خام طبيعية",
    description:
      "نختار أفضل الأعشاب والتوابل من مصادر موثوقة.",
  },
  {
    icon: Award,
    title: "جودة ممتازة",
    description:
      "جميع المنتجات يتم فحصها بعناية قبل عرضها للبيع.",
  },
  {
    icon: ShieldCheck,
    title: "شراء آمن",
    description:
      "بياناتك وطلباتك تتمتع بأعلى درجات الخصوصية والأمان.",
  },
];

export default function QualityGuarantee() {
  return (
    <section className="py-20">

      <div className="rounded-3xl bg-stone-50 p-10">

        <div className="mb-12 text-center">

          <h2 className="text-4xl font-extrabold">

            ضمان الجودة

          </h2>

          <p className="mt-4 text-stone-600">

            نلتزم بتقديم منتجات عالية الجودة وخدمة تليق بثقة عملائنا.

          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {features.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">

                  <Icon
                    size={32}
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

        <div className="mt-12 rounded-2xl border border-green-200 bg-green-50 p-6">

          <div className="flex items-start gap-4">

            <CheckCircle2
              className="mt-1 text-green-600"
              size={28}
            />

            <div>

              <h3 className="text-xl font-bold text-green-700">

                وعد عطارة الدرويش

              </h3>

              <p className="mt-3 leading-8 text-stone-700">

                إذا لم تكن راضيًا عن جودة المنتج عند الاستلام،
                تواصل معنا مباشرة وسنعمل على حل المشكلة بأسرع وقت.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
