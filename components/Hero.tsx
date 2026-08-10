import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-pattern" />

      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">
            <span>✦</span>
            عطارة الدرويش • السويس
          </span>

          <h1>
            أصالة تُرى...
            <br />
            <span>وجودة تُذاق</span>
          </h1>

          <p className="hero-text">
            عالم من الأعشاب والتوابل والبهارات والبذور والزيوت الطبيعية،
            مختارة بعناية لتصل إليك كما نحبها نحن.
          </p>

          <div className="hero-buttons">
            <Link href="/products" className="primary-btn">
              تصفح المنتجات
              <ArrowLeft size={19} />
            </Link>

            <a
              href="https://wa.me/201011193720"
              target="_blank"
              rel="noreferrer"
              className="outline-btn"
            >
              اطلب عبر واتساب
            </a>
          </div>

          <div className="hero-benefits">
            <div>✓ منتجات مختارة</div>
            <div>✓ توصيل داخل السويس</div>
            <div>✓ جودة نثق بها</div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-card">
            <img
              src="/logo.png"
              alt="عطارة الدرويش"
            />
            <div className="hero-image-overlay">
              <span>مختارات الدرويش</span>
              <strong>طبيعة • جودة • أصالة</strong>
            </div>
          </div>

          <div className="floating-card floating-top">
            <span>🌿</span>
            <div>
              <strong>جودة طبيعية</strong>
              <small>اختيار بعناية</small>
            </div>
          </div>

          <div className="floating-card floating-bottom">
            <strong>200+</strong>
            <small>منتج متنوع</small>
          </div>
        </div>
      </div>
    </section>
  );
}
