import Link from "next/link";
import { Phone, Mail, MapPin, ArrowLeft } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span>🌿</span>
              <strong>عطارة الدرويش</strong>
            </div>

            <p>
              أجود الأعشاب والتوابل والمنتجات الطبيعية، مع خدمة توصيل داخل
              السويس.
            </p>

            <a
              href="https://wa.me/201011193720"
              target="_blank"
              rel="noreferrer"
              className="footer-order"
            >
              اطلب الآن عبر واتساب
              <ArrowLeft size={17} />
            </a>
          </div>

          <div className="footer-column">
            <h3>روابط سريعة</h3>
            <Link href="/">الرئيسية</Link>
            <Link href="/products">المنتجات</Link>
            <Link href="#categories">التصنيفات</Link>
            <Link href="#offers">العروض</Link>
            <Link href="/about">من نحن</Link>
          </div>

          <div className="footer-column">
            <h3>تواصل معنا</h3>
            <a href="tel:01011193720">
              <Phone size={17} />
              01011193720
            </a>
            <a href="mailto:info@eldarwish.co">
              <Mail size={17} />
              info@eldarwish.co
            </a>
            <span>
              <MapPin size={17} />
              السويس — مصر
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Eldarwish — جميع الحقوق محفوظة.</span>
          <span>صُنع بحب في السويس 🌿</span>
        </div>
      </div>
    </footer>
  );
}
