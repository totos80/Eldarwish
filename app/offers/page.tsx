"use client";

import Image from "next/image";
import Link from "next/link";
import { Gift, ShoppingBag, Sparkles, Tag } from "lucide-react";

const WHATSAPP = "https://wa.me/201553939342?text=";

const offers = [
  {
    id: 1,
    title: "عرض كيلو البهار",
    subtitle: "10 خلطات توابل مميزة + 150 جرام فيجيتار الدرويش هدية!",
    image: "/offers-kilo-bahar.png",
    price: 210,
    oldPrice: 250,
    saving: 40,
    items: [
      "توابل سمك — 100 جرام",
      "توابل فراخ — 100 جرام",
      "توابل لحمة مشوية — 100 جرام",
      "توابل فراخ مشوية — 100 جرام",
      "توابل كبسة — 100 جرام",
      "توابل محشي — 100 جرام",
      "توابل شرق أقصى (توابل بطاطس) — 100 جرام",
      "توابل شاورما لحمة — 100 جرام",
      "توابل تندوري — 100 جرام",
      "توابل كفتة — 100 جرام",
    ],
    gift: "150 جرام فيجيتار الدرويش هدية، بارد أو حار حسب اختيارك",
    message: "عايز أطلب عرض كيلو البهار بسعر 210 جنيه من عطارة الدرويش",
  },
  {
    id: 2,
    title: "عرض الـ100 جنيه",
    subtitle: "11 صنف بسعر 100 جنيه + زجاجة خل هدية!",
    image: "/offers-100-geneh.png",
    price: 100,
    oldPrice: null,
    saving: null,
    items: [
      "فلفل مطحون   ",
      "كمون ناعم   ",
      "شطة ناعمة  ",
      "كزبرة ناعمة   ",
      "ثوم بودر   ",
      "بصل بودر  ",
      "بهار سمك   ",
      "بهارات بطاطس  ",
      "بابريكا   ",
      "ملح  ",
      " مرقة دجاج ",
    ],
    gift: "150 زجاجة خل هدية",
    message: "عايز أطلب عرض الـ100 جنيه من عطارة الدرويش",
  },
];

export default function OffersPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f7f1e6] px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#163d28] px-5 py-2 text-sm font-bold text-white">
            <Sparkles size={17} />
            عروض عطارة الدرويش
          </span>

          <h1 className="mt-5 text-3xl font-black text-[#163d28] sm:text-5xl">
            عروض الافتتاح اللي ميتفوتش!
          </h1>

          <p className="mt-3 text-base text-stone-600 sm:text-lg">
            اختار عرضك واستمتع بالطعم الأصيل والتوفير
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {offers.map((offer) => (
            <article
              key={offer.id}
              className="overflow-hidden rounded-3xl border border-[#e3d4b9] bg-white shadow-xl"
            >
              <div className="relative aspect-[4/5] w-full bg-[#eee2cd]">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />

                <span className="absolute right-4 top-4 rounded-full bg-red-600 px-4 py-2 font-black text-white shadow-lg">
                  عرض افتتاح
                </span>
              </div>

              <div className="p-5 sm:p-7">
                <h2 className="text-2xl font-black text-[#163d28]">
                  {offer.title}
                </h2>

                <p className="mt-2 text-stone-600">{offer.subtitle}</p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="text-4xl font-black text-red-600">
                    {offer.price} جنيه
                  </span>

                  {offer.oldPrice && (
                    <span className="text-lg text-stone-400 line-through">
                      {offer.oldPrice} جنيه
                    </span>
                  )}

                  {offer.saving && (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-800">
                      وفّر {offer.saving} جنيه
                    </span>
                  )}
                </div>

                <div className="mt-6 rounded-2xl bg-[#faf6ed] p-4">
                  <h3 className="mb-3 flex items-center gap-2 font-extrabold text-[#163d28]">
                    <ShoppingBag size={19} />
                    محتويات العرض
                  </h3>

                  <ul className="space-y-2">
                    {offer.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-6 text-stone-700">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b79255]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {offer.gift && (
                  <div className="mt-4 flex items-start gap-3 rounded-2xl border border-dashed border-red-300 bg-red-50 p-4">
                    <Gift size={25} className="shrink-0 text-red-600" />
                    <div>
                      <p className="font-black text-red-700">هدية مع العرض!</p>
                      <p className="mt-1 text-sm leading-6 text-stone-700">
                        {offer.gift}
                      </p>
                    </div>
                  </div>
                )}

                <Link
                  href={`${WHATSAPP}${encodeURIComponent(offer.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#163d28] px-5 py-4 text-center font-extrabold text-white transition hover:bg-[#24583a]"
                >
                  <Tag size={19} />
                01553939342  اطلب العرض عبر واتساب
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-stone-500">
          عطارة الدرويش — أصالة وجودة وثقة
        </p>
      </div>
    </main>
  );
}
