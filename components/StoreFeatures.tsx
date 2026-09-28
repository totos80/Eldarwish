"use client";

import Image from "next/image";

const features = [
  {
    title: "جودة مضمونة",
    desc: "منتجات مختارة بعناية",
    image: "/features/quality-spices.jpg",
    tone: "gold",
  },
  {
    title: "طبيعي 100%",
    desc: "من الطبيعة بدون إضافات",
    image: "/features/natural-herbs.jpg",
    tone: "leaf",
  },
  {
    title: "توصيل سريع",
    desc: "داخل السويس",
    image: "/features/fast-delivery.jpg",
    tone: "truck",
  },
  {
    title: "دعم العملاء",
    desc: "نحن هنا لخدمتك",
    image: "/features/customer-support.jpg",
    tone: "support",
  },
];

export default function StoreFeatures() {
  return (
    <section dir="rtl" className="features-section">
      <div className="features-container">
        <div className="features-heading">
          <span>لماذا الدَرْويش؟</span>

          <h2>جودة نحرص عليها... وخدمة تستحق ثقتك</h2>

          <div className="features-line">
            <i />
            <b>✦</b>
            <i />
          </div>

          <p>
            كل تفصيلة في الدَرْويش معمولة علشان نقدم لك تجربة مختلفة.
          </p>
        </div>

        <div className="features-grid">
          {features.map(({ title, desc, image, tone }, index) => (
            <div
              className="feature-item"
              key={title}
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              <div className={`feature-photo feature-photo-${tone}`}>
                <div className="photo-glow" />

                <div className="photo-img-wrapper">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 90px, 145px"
                    className="feature-img"
                  />
                </div>

                <div className="photo-ring" />
              </div>

              <div className="feature-copy">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>

              <div className="feature-number">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .features-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 70px 16px;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(180, 138, 54, 0.16),
              transparent 35%
            ),
            linear-gradient(
              180deg,
              #061c14 0%,
              #052116 48%,
              #03140e 100%
            );
        }

        .features-section::before {
          content: "";
          position: absolute;
          top: -120px;
          right: 50%;
          width: 420px;
          height: 420px;
          transform: translateX(50%);
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.08);
          filter: blur(80px);
          pointer-events: none;
        }

        .features-section::after {
          content: "";
          position: absolute;
          bottom: -180px;
          left: -100px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: rgba(245, 158, 11, 0.06);
          filter: blur(90px);
          pointer-events: none;
        }

        .features-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .features-heading {
          text-align: center;
          margin-bottom: 48px;
        }

        .features-heading > span {
          display: inline-block;
          margin-bottom: 10px;
          color: #f2c66d;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .features-heading h2 {
          margin: 0 auto;
          max-width: 850px;
          color: #fffaf0;
          font-size: clamp(28px, 4vw, 46px);
          line-height: 1.25;
          font-weight: 1000;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
        }

        .features-heading p {
          margin: 14px auto 0;
          color: rgba(255, 255, 255, 0.68);
          font-size: 16px;
          line-height: 1.8;
        }

        .features-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 18px auto 0;
          max-width: 190px;
        }

        .features-line i {
          height: 1px;
          flex: 1;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(242, 198, 109, 0.75)
          );
        }

        .features-line i:last-child {
          background: linear-gradient(
            90deg,
            rgba(242, 198, 109, 0.75),
            transparent
          );
        }

        .features-line b {
          color: #f2c66d;
          font-size: 18px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .feature-item {
          position: relative;
          min-height: 310px;
          overflow: hidden;
          padding: 28px 18px 24px;
          text-align: center;
          border: 1px solid rgba(242, 198, 109, 0.2);
          border-radius: 30px;
          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.09),
              rgba(255, 255, 255, 0.025)
            ),
            rgba(2, 20, 13, 0.78);
          box-shadow:
            0 20px 45px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          transition:
            transform 0.4s ease,
            border-color 0.4s ease,
            box-shadow 0.4s ease;
          animation: featureAppear 0.8s ease both;
        }

        .feature-item::before {
          content: "";
          position: absolute;
          top: -100px;
          left: 50%;
          width: 180px;
          height: 180px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: rgba(245, 158, 11, 0.08);
          filter: blur(35px);
          pointer-events: none;
        }

        .feature-item:hover {
          transform: translateY(-10px);
          border-color: rgba(242, 198, 109, 0.6);
          box-shadow:
            0 28px 55px rgba(0, 0, 0, 0.4),
            0 0 35px rgba(242, 198, 109, 0.1);
        }

        .feature-photo {
          position: relative;
          width: 145px;
          height: 145px;
          margin: 0 auto 24px;
        }

        .photo-img-wrapper {
          position: absolute;
          inset: 10px;
          z-index: 3;
          border-radius: 50%;
          border: 5px solid rgba(255, 250, 240, 0.96);
          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.38),
            0 0 0 2px rgba(242, 198, 109, 0.5);
          overflow: hidden;
          transition:
            transform 0.5s ease,
            box-shadow 0.5s ease;
        }

        :global(.feature-img) {
          object-fit: cover;
        }

        .feature-item:hover .photo-img-wrapper {
          transform: scale(1.08);
          box-shadow:
            0 15px 35px rgba(0, 0, 0, 0.45),
            0 0 0 3px rgba(242, 198, 109, 0.8);
        }

        .photo-ring {
          position: absolute;
          inset: 0;
          z-index: 2;
          border: 2px solid rgba(242, 198, 109, 0.65);
          border-radius: 50%;
          animation: ringPulse 2.8s ease-in-out infinite;
        }

        .photo-ring::after {
          content: "";
          position: absolute;
          inset: -7px;
          border: 1px dashed rgba(242, 198, 109, 0.3);
          border-radius: 50%;
        }

        .photo-glow {
          position: absolute;
          inset: 10px;
          z-index: 1;
          border-radius: 50%;
          background: rgba(242, 198, 109, 0.28);
          filter: blur(25px);
          animation: glowPulse 2.8s ease-in-out infinite;
        }

        .feature-copy {
          position: relative;
          z-index: 4;
        }

        .feature-copy h3 {
          margin: 0;
          color: #fff8e8;
          font-size: 23px;
          font-weight: 1000;
          line-height: 1.4;
        }

        .feature-copy p {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.62);
          font-size: 15px;
          font-weight: 600;
        }

        .feature-number {
          position: absolute;
          left: 16px;
          bottom: 12px;
          color: rgba(242, 198, 109, 0.18);
          font-size: 42px;
          line-height: 1;
          font-weight: 1000;
          font-family: Georgia, serif;
        }

        @keyframes featureAppear {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ringPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.65;
          }

          50% {
            transform: scale(1.06);
            opacity: 1;
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.5;
          }

          50% {
            transform: scale(1.15);
            opacity: 0.9;
          }
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* تعديلات الموبايل لإصلاح المشكلة بالكامل */
        @media (max-width: 640px) {
          .features-section {
            padding: 40px 16px;
          }

          .features-heading {
            margin-bottom: 32px;
          }

          .features-heading h2 {
            font-size: 24px;
          }

          .features-heading p {
            font-size: 14px;
          }

          /* عرض بطاقة واحدة في كل صف لإتاحة المساحة للنصوص والصور */
          .features-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            max-width: 380px;
            margin: 0 auto;
          }

          .feature-item {
            min-height: auto;
            padding: 24px 16px 20px;
            border-radius: 20px;
          }

          .feature-photo {
            width: 110px;
            height: 110px;
            margin-bottom: 16px;
          }

          .photo-img-wrapper {
            inset: 6px;
            border-width: 3px;
          }

          .feature-copy h3 {
            font-size: 19px;
          }

          .feature-copy p {
            font-size: 14px;
          }

          .feature-number {
            left: 12px;
            bottom: 8px;
            font-size: 28px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .feature-item,
          .photo-ring,
          .photo-glow {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
