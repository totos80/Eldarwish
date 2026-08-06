"use client";

import {
  Lock,
  Shield,
  Eye,
  Database,
} from "lucide-react";

const items = [
  {
    icon: Lock,
    title: "حماية البيانات",
    description:
      "جميع البيانات التي يرسلها العميل يتم التعامل معها بسرية تامة.",
  },
  {
    icon: Shield,
    title: "اتصال آمن",
    description:
      "الموقع يعمل من خلال اتصال HTTPS لحماية المعلومات أثناء التصفح.",
  },
  {
    icon: Eye,
    title: "عدم مشاركة البيانات",
    description:
      "لا يتم بيع أو مشاركة بيانات العملاء مع أي جهة خارجية.",
  },
  {
    icon: Database,
    title: "استخدام البيانات",
    description:
      "تستخدم البيانات فقط لتنفيذ الطلبات والتواصل مع العملاء وتحسين الخدمة.",
  },
];

export default function PrivacySection() {
  return (
    <section className="py-20">

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-extrabold">

          سياسة الخصوصية

        </h2>

        <p className="mt-4 text-stone-600">

          خصوصية عملائنا وأمان بياناتهم من أهم أولوياتنا.

        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {items.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
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
