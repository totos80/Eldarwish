"use client";

import Image from "next/image";
import Link from "next/link";
import { Percent, ArrowLeft } from "lucide-react";

const offers = [
  {
    id: 1,
    title: "خصم 20%",
    subtitle: "على جميع أنواع التوابل",
    image: "/images/offers/spices-offer.webp",
    href: "/products?offer=spices",
  },
  {
    id: 2,
    title: "اشترِ 2 واحصل على الثالث مجانًا",
    subtitle: "على منتجات الأعشاب المختارة",
    image: "/images/offers/herbs-offer.webp",
    href: "/products?offer=herbs",
  },
];

export default function SeasonOffers() {
  return (
    <section className="py-20">

      <div className="mb-12 text-center">

        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-5 py-2 text-red-600">

          <Percent size={18} />

          عروض الموسم

        </div>

        <h2 className="text-4xl font-extrabold">

          لا تفوت أفضل العروض

        </h2>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {offers.map((offer) => (

          <Link
            key={offer.id}
            href={offer.href}
            className="group overflow-hidden rounded-3xl"
          >

            <div className="relative h-[320px]">

              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/45" />

              <div className="absolute inset-0 flex flex-col justify-center p-10 text-white">

                <span className="mb-4 text-5xl font-extrabold text-yellow-300">

                  {offer.title}

                </span>

                <p className="text-2xl">

                  {offer.subtitle}

                </p>

                <div className="mt-8 flex items-center gap-2 font-bold text-white">

                  تسوق الآن

                  <ArrowLeft size={20} />

                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}
