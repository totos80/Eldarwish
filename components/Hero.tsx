import Link from "next/link";
import { ArrowLeft, CheckCircle2, Truck, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-pattern" />

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow">
            <span>✦</span>
            عطارة الدرويش • السويس
          </div>

          <h1>
            نكهة أصيلة،
            <br />
            <span>وجودة تثق بها</span>
          </h1>

          <p className="hero-text">
            اكتشف تشكيلة مختارة من أجود الأعشاب والتوابل والبهارات
            والبذور والزيوت الطبيعية، بجودة نهتم بها من أول لحظة.
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
            <div>
              <CheckCircle2 size={18} />
              منتجات مختارة
            </div>
            <div>
              <Truck size={18} />
              توصيل داخل السويس
            </div>
            <div>
              <ShieldCheck size={18} />
              جودة نثق بها
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=90"
              alt="توابل وأعشاب"
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
