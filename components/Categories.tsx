"use client";

import Link from "next/link";

const categories = [
  {
    title: "العروض",
    href: "/offers",
    image: "/offers.jpg",
  },
  {
    title: "الزيوت",
    href: "/products?category=الزيوت",
    image: "/oils.jpg",
  },
  {
    title: "منتجات غذائية",
    href: "/products?category=الأغذية",
    image: "/food.jpg",
  },
  {
    title: "حبوب البن و القهوة العربية",
    href: "/products?category=القهوة",
    image: "/coffee.jpg",
  },
  {
    title: "توابل و بهارات",
    href: "/products?category=التوابل",
    image: "/spices.jpg",
  },
  {
    title: "أعشاب و عطارة",
    href: "/products?category=الأعشاب",
    image: "/herbs.jpg",
  },
  {
    title: "تمر خليجي و بلح",
    href: "/products?category=التمور",
    image: "/dates.jpg",
  },
  {
    title: "منتجات ليبية و خليجية",
    href: "/products?category=خليجية",
    image: "/gulf-libya.jpg",
  },
];

export default function Categories() {
  return (
    <section
      dir="rtl"
      className="mx-auto w-full max-w-[1400px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16"
    >
      <div className="mb-8 text-center">
        <span className="mb-2 block text-sm font-extrabold tracking-wide text-amber-700">
          تسوق حسب التصنيف
        </span>

        <h2 className="text-3xl font-black text-stone-800 sm:text-4xl">
          اكتشف تشكيلتنا
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-12">
        {categories.map((category, index) => {
          const isOffers = index === 0;

          return (
            <Link
              key={category.title}
              href={category.href}
              className={`group block text-center ${
                isOffers ? "offers-card" : ""
              }`}
            >
              <div
                className={`relative aspect-square w-full overflow-hidden rounded-2xl bg-stone-100 shadow-md ring-1 ring-black/5 transition-all duration-300 ${
                  isOffers
                    ? "offers-image-box"
                    : "group-hover:-translate-y-1 group-hover:shadow-xl"
                }`}
              >
                {isOffers && (
                  <>
                    <div className="offers-glow" />
                    <div className="offers-badge">
                      🔥 خصومات
                    </div>
                  </>
                )}

                <img
                  src={category.image}
                  alt={category.title}
                  className={`absolute inset-0 h-full w-full object-cover ${
                    isOffers
                      ? "offers-image"
                      : "transition-transform duration-500 group-hover:scale-105"
                  }`}
                  loading="lazy"
                />

                {isOffers && <div className="offers-shine" />}
              </div>

              <h3
                className={`mt-4 px-1 font-black leading-7 ${
                  isOffers
                    ? "offers-title text-xl sm:text-2xl lg:text-[26px]"
                    : "text-lg text-stone-800 transition-colors duration-300 group-hover:text-amber-700 sm:text-xl lg:text-[22px]"
                }`}
              >
                {category.title}
              </h3>
            </Link>
          );
        })}
      </div>

      <style jsx>{`
        .offers-card {
          position: relative;
          animation: offersFloat 3.2s ease-in-out infinite;
        }

        .offers-card:hover {
          animation-play-state: paused;
          transform: translateY(-6px) scale(1.02);
        }

        .offers-image-box {
          isolation: isolate;
          border: 3px solid rgba(245, 158, 11, 0.9);
          box-shadow:
            0 0 0 3px rgba(239, 68, 68, 0.12),
            0 0 18px rgba(245, 158, 11, 0.45),
            0 10px 30px rgba(0, 0, 0, 0.18);
          animation: offersBox 2.4s ease-in-out infinite;
        }

        .offers-image {
          transform: scale(1.02);
          animation: offersZoom 2.2s ease-in-out infinite;
        }

        .offers-glow {
          position: absolute;
          inset: -20%;
          z-index: 2;
          pointer-events: none;
          border-radius: 50%;
          background:
            conic-gradient(
              from 0deg,
              #ef4444,
              #f97316,
              #facc15,
              #22c55e,
              #06b6d4,
              #6366f1,
              #ec4899,
              #ef4444
            );
          filter: blur(18px);
          opacity: 0.28;
          animation: offersColors 4s linear infinite;
        }

        .offers-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 5;
          padding: 6px 11px;
          border-radius: 999px;
          color: white;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.3px;
          background: linear-gradient(
            90deg,
            #dc2626,
            #f97316,
            #eab308,
            #dc2626
          );
          background-size: 300% 100%;
          box-shadow:
            0 4px 12px rgba(0, 0, 0, 0.25),
            0 0 16px rgba(239, 68, 68, 0.55);
          animation:
            offersBadge 1.15s ease-in-out infinite,
            offersGradient 2.5s linear infinite;
        }

        .offers-shine {
          position: absolute;
          inset: 0;
          z-index: 4;
          pointer-events: none;
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255, 255, 255, 0.5) 45%,
            transparent 65%
          );
          transform: translateX(-130%);
          animation: offersShine 3.2s ease-in-out infinite;
        }

        .offers-title {
          display: inline-block;
          font-weight: 1000;
          background: linear-gradient(
            90deg,
            #dc2626,
            #f97316,
            #eab308,
            #16a34a,
            #0891b2,
            #7c3aed,
            #db2777,
            #dc2626
          );
          background-size: 500% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.18));
          animation:
            offersText 3.5s linear infinite,
            offersTextPop 1.8s ease-in-out infinite;
        }

        @keyframes offersFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes offersBox {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.035);
          }
        }

        @keyframes offersZoom {
          0%,
          100% {
            transform: scale(1.02);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes offersBadge {
          0%,
          100% {
            transform: scale(1) rotate(-2deg);
          }
          50% {
            transform: scale(1.13) rotate(2deg);
          }
        }

        @keyframes offersGradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 300% 50%;
          }
        }

        @keyframes offersColors {
          0% {
            transform: rotate(0deg) scale(0.9);
            filter: blur(18px) hue-rotate(0deg);
          }
          50% {
            transform: rotate(180deg) scale(1.08);
            filter: blur(22px) hue-rotate(100deg);
          }
          100% {
            transform: rotate(360deg) scale(0.9);
            filter: blur(18px) hue-rotate(360deg);
          }
        }

        @keyframes offersShine {
          0%,
          45% {
            transform: translateX(-130%);
          }
          70%,
          100% {
            transform: translateX(130%);
          }
        }

        @keyframes offersText {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 500% 50%;
          }
        }

        @keyframes offersTextPop {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .offers-card,
          .offers-image-box,
          .offers-image,
          .offers-glow,
          .offers-badge,
          .offers-shine,
          .offers-title {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
