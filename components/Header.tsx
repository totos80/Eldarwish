"use client";

import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="site-header">

      {/* الشريط الإعلاني المتحرك */}
      <div className="promo-strip">
        <div className="promo-track">
          <span>
            عروض خاصة جدًا للطلبات من الموقع، شوف التخفيضات في صفحة العروض
          </span>
          <span aria-hidden="true">
            عروض خاصة جدًا للطلبات من الموقع، شوف التخفيضات في صفحة العروض
          </span>
        </div>
      </div>

      {/* الهيدر الرئيسي */}
      <div className="main-nav-wrap">
        <div className="main-nav">

          {/* البراند */}
          <Link href="/" className="brand-new" aria-label="الدَرْوِيش">
            <img src="/eldarwish-shop-interior.png" alt="عطارة الدرويش" className="brand-shop-photo" />
          </Link>

          {/* القائمة */}
          <nav className="desktop-nav">
            <Link className="active" href="/">الرئيسية</Link>
            <Link href="/products">المنتجات</Link>
            <Link href="/categories">التصنيفات</Link>
            <Link href="/offers">العروض</Link>
            <Link href="/about">من نحن</Link>
            <Link href="/contact">تواصل معنا</Link>
          </nav>

          {/* الأزرار */}
          <div className="nav-actions">

            <button
              className="icon-button"
              aria-label="بحث"
              type="button"
            >
              <Search size={21} />
            </button>

            <Link
              href="/cart"
              className="icon-button cart-button"
              aria-label="السلة"
            >
              <ShoppingBag size={21} />
              <span className="cart-count">0</span>
            </Link>

          </div>

        </div>
      </div>

    </header>
  );
}
