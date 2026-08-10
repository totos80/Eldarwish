"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  ShoppingBag,
  Search,
  ChevronLeft,
} from "lucide-react";

const links = [
  { label: "الرئيسية", href: "/" },
  { label: "المنتجات", href: "/products" },
  { label: "التصنيفات", href: "/categories" },
  { label: "العروض", href: "/offers" },
  { label: "من نحن", href: "/about" },
  { label: "تواصل معنا", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="announcement">
        <div className="container announcement-inner">
          <span>🌿 جودة مختارة بعناية من عطارة الدرويش</span>
          <span className="announcement-hide">— السويس</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">

          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(true)}
            aria-label="فتح القائمة"
          >
            <Menu size={25} />
          </button>

          <Link href="/" className="brand">
            <span className="brand-mark">🌿</span>
            <span>
              <strong>عطارة الدرويش</strong>
              <small>أصالة • جودة • ثقة</small>
            </span>
          </Link>

          <nav className="desktop-nav">
            {links.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">

            <a
              href="tel:01011193720"
              className="phone-btn"
              aria-label="الاتصال بعطارة الدرويش"
            >
              <Phone size={18} />
              <span>01011193720</span>
            </a>

            <Link
              href="/products"
              className="icon-btn"
              aria-label="البحث عن المنتجات"
            >
              <Search size={21} />
            </Link>

            <Link
              href="/cart"
              className="cart-btn"
              aria-label="السلة"
            >
              <ShoppingBag size={21} />
            </Link>

          </div>
        </div>
      </header>

      {open && (
        <div
          className="mobile-overlay"
          onClick={() => setOpen(false)}
        >
          <aside
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="drawer-head">
              <div className="drawer-brand">
                <span>🌿</span>
                <strong>عطارة الدرويش</strong>
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="إغلاق القائمة"
              >
                <X size={25} />
              </button>
            </div>

            <div className="drawer-links">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <ChevronLeft size={18} />
                </Link>
              ))}
            </div>

            <a
              href="tel:01011193720"
              className="drawer-phone"
            >
              <Phone size={19} />
              اتصل بنا: 01011193720
            </a>

            <a
              href="https://wa.me/201011193720"
              target="_blank"
              rel="noreferrer"
              className="drawer-whatsapp"
            >
              اطلب عبر واتساب
            </a>

          </aside>
        </div>
      )}
    </>
  );
}
