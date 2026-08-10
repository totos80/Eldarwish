import Link from "next/link";
import { ArrowLeft, Leaf, ShieldCheck, Truck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="dw-hero" dir="rtl">
      <div className="dw-hero-glow dw-hero-glow-one" />
      <div className="dw-hero-glow dw-hero-glow-two" />

      <div className="container dw-hero-inner">
        <div className="dw-hero-copy">
          <div className="dw-hero-badge">
            <Leaf size={16} />
            <span>عطارة الدرويش • السويس</span>
          </div>

          <h1>
            طعم الأصالة
            <br />
            <span>يبدأ من هنا.</span>
          </h1>

          <p>
            أعشاب وتوابل وبهارات وبذور وقهوة وزيوت طبيعية،
            مختارة بعناية لتصل إليك بجودة تثق بها.
          </p>

          <div className="dw-hero-actions">
            <Link href="/products" className="dw-hero-primary">
              اكتشف المنتجات
              <ArrowLeft size={19} />
            </Link>

            <a
              href="https://wa.me/201011193720"
              target="_blank"
              rel="noreferrer"
              className="dw-hero-secondary"
            >
              اطلب عبر واتساب
            </a>
          </div>

          <div className="dw-hero-trust">
            <div>
              <ShieldCheck size={19} />
              <span>اختيار بعناية</span>
            </div>
            <div>
              <Truck size={19} />
              <span>توصيل داخل السويس</span>
            </div>
            <div>
              <Sparkles size={19} />
              <span>جودة نثق بها</span>
            </div>
          </div>
        </div>

        <div className="dw-hero-art">
          <div className="dw-hero-frame">
            <div className="dw-hero-frame-top">
              <span>ELDARWISH</span>
              <span>EST. 2026</span>
            </div>

            <div className="dw-hero-logo">
              <img src="/logo.png" alt="عطارة الدرويش" />
            </div>

            <div className="dw-hero-frame-bottom">
              <span>أعشاب • توابل • قهوة</span>
              <span>🌿</span>
            </div>
          </div>

          <div className="dw-floating dw-floating-top">
            <span>🌿</span>
            <div>
              <strong>منتجات طبيعية</strong>
              <small>مختارة بعناية</small>
            </div>
          </div>

          <div className="dw-floating dw-floating-bottom">
            <strong>200+</strong>
            <span>منتج متنوع</span>
          </div>
        </div>
      </div>
    </section>
  );
}
