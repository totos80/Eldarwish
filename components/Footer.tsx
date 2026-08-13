"use client";

import Link from "next/link";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand footer-logo">
            <div className="brand-copy"><strong>عطارة الدرويش</strong><span>أصالة • جودة • ثقة</span></div>
            <div className="brand-mark"><span>🌿</span></div>
          </Link>
          <div className="socials">
            <a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="https://wa.me/201011193720" aria-label="WhatsApp"><MessageCircle size={17} /></a>
            <a href="tel:01011193720" aria-label="Phone"><Phone size={17} /></a>
            <a href="https://www.tiktok.com/@eldarwishelattar" aria-label="TikTok">♪</a>
          </div>
        </div>

        <div><h4>خدماتنا</h4><ul><li>توصيل داخل السويس</li><li>جودة مضمونة</li><li>منتجات طبيعية 100%</li><li>دعم العملاء</li></ul></div>
        <div><h4>روابط سريعة</h4><ul><li><Link href="/products">المنتجات</Link></li><li><Link href="/categories">التصنيفات</Link></li><li><Link href="/offers">العروض</Link></li><li><Link href="/about">من نحن</Link></li></ul></div>
        <div><h4>تواصل معنا</h4><ul><li><a href="tel:01011193720"><Phone size={16}/> 01011193720</a></li><li><a href="https://wa.me/201011193720"><MessageCircle size={16}/> واتساب</a></li><li><span><MapPin size={16}/> السويس - مصر</span></li></ul></div>
      </div>
      <div className="copyright">جميع الحقوق محفوظة © 2025 عطارة الدرويش</div>
    </footer>
  );
}
