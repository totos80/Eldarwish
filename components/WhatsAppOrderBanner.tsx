"use client";

import { MessageCircle } from "lucide-react";

interface WhatsAppOrderBannerProps {
  phone?: string;
}

export default function WhatsAppOrderBanner({
  phone = "201011193720",
}: WhatsAppOrderBannerProps) {
  const message = encodeURIComponent(
    "مرحباً، أريد الاستفسار عن منتجات عطارة الدرويش."
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <section className="my-16">

      <div className="overflow-hidden rounded-3xl bg-green-600 text-white shadow-xl">

        <div className="flex flex-col items-center justify-between gap-8 px-8 py-10 lg:flex-row">

          <div className="flex items-center gap-5">

            <div className="rounded-full bg-white/20 p-5">

              <MessageCircle size={42} />

            </div>

            <div>

              <h2 className="text-3xl font-extrabold">

                اطلب مباشرة عبر واتساب

              </h2>

              <p className="mt-3 max-w-2xl text-green-100 leading-8">

                إذا لم تجد المنتج الذي تبحث عنه أو تريد طلب كمية
                كبيرة، تواصل معنا مباشرة عبر واتساب وسنقوم بالرد
                عليك في أسرع وقت.

              </p>

            </div>

          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-green-700 transition hover:scale-105"
          >
            مراسلة واتساب
          </a>

        </div>

      </div>

    </section>
  );
}
