"use client";

import Link from "next/link";
import {
  Headphones,
  Phone,
  MessageCircle,
  Mail,
  Clock,
} from "lucide-react";

export default function CustomerSupport() {
  return (
    <section className="py-20">

      <div className="rounded-3xl bg-gradient-to-r from-stone-900 to-stone-800 p-10 text-white">

        <div className="mb-12 text-center">

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-700">

            <Headphones size={40} />

          </div>

          <h2 className="text-4xl font-extrabold">

            خدمة العملاء

          </h2>

          <p className="mt-5 text-stone-300">

            فريقنا جاهز للإجابة على جميع استفساراتك ومساعدتك في اختيار المنتجات المناسبة.

          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <a
            href="tel:01011193720"
            className="rounded-2xl bg-white/10 p-6 transition hover:bg-white/20"
          >

            <Phone className="mb-5 text-amber-400" size={30} />

            <h3 className="mb-2 text-xl font-bold">

              اتصل بنا

            </h3>

            <p className="text-stone-300">

              01011193720

            </p>

          </a>

          <a
            href="https://wa.me/201011193720"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white/10 p-6 transition hover:bg-white/20"
          >

            <MessageCircle
              className="mb-5 text-green-400"
              size={30}
            />

            <h3 className="mb-2 text-xl font-bold">

              واتساب

            </h3>

            <p className="text-stone-300">

              تواصل معنا مباشرة

            </p>

          </a>

          <Link
            href="/contact"
            className="rounded-2xl bg-white/10 p-6 transition hover:bg-white/20"
          >

            <Mail className="mb-5 text-blue-400" size={30} />

            <h3 className="mb-2 text-xl font-bold">

              نموذج التواصل

            </h3>

            <p className="text-stone-300">

              أرسل استفسارك بسهولة

            </p>

          </Link>

          <div className="rounded-2xl bg-white/10 p-6">

            <Clock className="mb-5 text-amber-400" size={30} />

            <h3 className="mb-2 text-xl font-bold">

              ساعات العمل

            </h3>

            <p className="text-stone-300">

              يوميًا من 9 صباحًا حتى 11 مساءً

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
