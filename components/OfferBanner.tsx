"use client";

import Link from "next/link";
import { Gift, ArrowLeft } from "lucide-react";

interface OfferBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function OfferBanner({
  title = "🔥 عروض خاصة من عطارة الدرويش",
  description = "خصومات على مجموعة مختارة من الأعشاب والتوابل والبهارات لفترة محدودة.",
  buttonText = "تسوق الآن",
  buttonLink = "/products",
}: OfferBannerProps) {
  return (
    <section className="my-12 overflow-hidden rounded-3xl bg-gradient-to-l from-amber-800 via-amber-700 to-amber-600">

      <div className="flex flex-col items-center justify-between gap-8 p-10 text-center text-white lg:flex-row lg:text-right">

        <div className="flex items-start gap-5">

          <div className="rounded-2xl bg-white/15 p-4">

            <Gift size={40} />

          </div>

          <div>

            <h2 className="text-3xl font-extrabold">

              {title}

            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-amber-100">

              {description}

            </p>

          </div>

        </div>

        <Link
          href={buttonLink}
          className="flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-amber-800 transition hover:scale-105"
        >

          {buttonText}

          <ArrowLeft size={20} />

        </Link>

      </div>

    </section>
  );
}
