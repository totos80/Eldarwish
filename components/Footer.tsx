import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-200">
      <div className="container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold text-white">عطارة الدرويش</h3>
          <p className="mt-4 leading-8 text-stone-400">
            أجود الأعشاب والتوابل والمنتجات الطبيعية مع خدمة توصيل داخل السويس.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">روابط سريعة</h4>
          <ul className="space-y-3">
            <li><Link href="/">الرئيسية</Link></li>
            <li><Link href="/products">المنتجات</Link></li>
            <li><Link href="/offers">العروض</Link></li>
            <li><Link href="/about">من نحن</Link></li>
            <li><Link href="/contact">تواصل معنا</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">تواصل معنا</h4>

          <a href="tel:01011193720" className="mb-3 flex items-center gap-3">
            <Phone size={18}/>01011193720
          </a>

          <a href="mailto:info@eldarwish.co" className="mb-3 flex items-center gap-3">
            <Mail size={18}/>info@eldarwish.co
          </a>

          <div className="flex items-center gap-3">
            <MapPin size={18}/>
            السويس - مصر
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800 py-6 text-center text-sm text-stone-400">
        © 2026 Eldarwish.co - جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}


