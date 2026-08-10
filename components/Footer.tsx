import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, ArrowLeft, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer" dir="rtl">
      <div className="site-footer-main">
        <div className="container site-footer-grid">

          <div className="site-footer-brand">
            <div className="site-footer-brand-title">
              <span className="site-footer-leaf">
                <Leaf size={25} />
              </span>
              <div>
                <h2>عطارة الدرويش</h2>
                <span>أصالة • جودة • ثقة</span>
              </div>
            </div>

            <p>
              أجود الأعشاب والتوابل والبهارات والبذور والزيوت الطبيعية،
              مختارة بعناية لتصلك بالجودة التي نثق بها.
            </p>

            <a
              href="https://wa.me/201011193720"
              target="_blank"
              rel="noreferrer"
              className="site-footer-whatsapp"
            >
              <MessageCircle size={20} />
              اطلب الآن عبر واتساب
              <ArrowLeft size={18} />
            </a>
          </div>

          <div className="site-footer-column">
            <h3>روابط سريعة</h3>

            <Link href="/">
              الرئيسية
              <ArrowLeft size={16} />
            </Link>

            <Link href="/products">
              المنتجات
              <ArrowLeft size={16} />
            </Link>

            <Link href="/about">
              من نحن
              <ArrowLeft size={16} />
            </Link>

            <Link href="/contact">
              تواصل معنا
              <ArrowLeft size={16} />
            </Link>
          </div>

          <div className="site-footer-column">
            <h3>أقسام المنتجات</h3>

            <Link href="/products">
              الأعشاب
              <ArrowLeft size={16} />
            </Link>

            <Link href="/products">
              التوابل والبهارات
              <ArrowLeft size={16} />
            </Link>

            <Link href="/products">
              البذور
              <ArrowLeft size={16} />
            </Link>

            <Link href="/products">
              القهوة والمشروبات
              <ArrowLeft size={16} />
            </Link>
          </div>

          <div className="site-footer-column site-footer-contact">
            <h3>تواصل معنا</h3>

            <a href="tel:01011193720">
              <span className="footer-contact-icon">
                <Phone size={18} />
              </span>
              <span>01011193720</span>
            </a>

            <a href="mailto:contact@eldarwish.co">
              <span className="footer-contact-icon">
                <Mail size={18} />
              </span>
              <span>contact@eldarwish.co</span>
            </a>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <MapPin size={18} />
              </span>
              <span>السويس — مصر</span>
            </div>

            <div className="footer-location-note">
              🌿 خدمة توصيل داخل السويس
            </div>
          </div>

        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="container">
          <span>© 2026 عطارة الدرويش — جميع الحقوق محفوظة.</span>
          <span>صُنع بحب في السويس 🌿</span>
        </div>
      </div>
    </footer>
  );
}
