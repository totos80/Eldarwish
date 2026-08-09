"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "هل جميع المنتجات طبيعية؟",
    answer:
      "نعم، نحرص على اختيار أفضل الأعشاب والتوابل والمنتجات الطبيعية من موردين موثوقين.",
  },
  {
    question: "هل يوجد توصيل داخل السويس؟",
    answer:
      "نعم، نوفر خدمة التوصيل داخل محافظة السويس، ويمكن الشحن لباقي المحافظات.",
  },
  {
    question: "كيف أطلب المنتجات؟",
    answer:
      "يمكنك إضافة المنتجات إلى السلة ثم إرسال الطلب مباشرة عبر واتساب.",
  },
  {
    question: "هل الأسعار محدثة باستمرار؟",
    answer:
      "نقوم بتحديث الأسعار بشكل دوري لضمان عرض أحدث الأسعار والعروض.",
  },
  {
    question: "هل يمكن شراء كميات كبيرة؟",
    answer:
      "نعم، نوفر البيع بالقطاعي والجملة حسب الكمية المطلوبة.",
  },
];

export default function FAQ() {

  const [opened, setOpened] =
    useState<number | null>(0);

  return (

    <section className="py-20">

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-extrabold">

          الأسئلة الشائعة

        </h2>

        <p className="mt-4 text-stone-600">

          إجابات على أكثر الأسئلة التي يطرحها عملاؤنا.

        </p>

      </div>

      <div className="mx-auto max-w-4xl space-y-5">

        {questions.map((item, index) => {

          const open = opened === index;

          return (

            <div
              key={index}
              className="overflow-hidden rounded-2xl border bg-white"
            >

              <button

                onClick={() =>
                  setOpened(
                    open ? null : index
                  )
                }

                className="flex w-full items-center justify-between p-6 text-right"

              >

                <span className="text-lg font-bold">

                  {item.question}

                </span>

                <ChevronDown
                  className={`transition ${
                    open ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open && (

                <div className="border-t px-6 py-5 leading-8 text-stone-600">

                  {item.answer}

                </div>

              )}

            </div>

          );

        })}

      </div>

    </section>

  );

}
