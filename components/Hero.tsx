import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-pattern" />

      <div className="container hero-brand-stage">
        <div className="hero-logo-wrap">
          <img
            src="/logo.png"
            alt="عطارة الدرويش"
            className="hero-logo"
          />
        </div>

        <div className="hero-intro">
          <span className="hero-kicker">عطارة الدرويش • السويس</span>

          <h1>
            أصالة تُرى...
            <br />
            <span>وجودة تُذاق</span>
          </h1>

          <p>
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
        </div>
      </div>
    </section>
  );
}
