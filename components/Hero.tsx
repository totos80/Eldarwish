"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section" aria-label="عطارة الدرويش">
      <img
        className="hero-main-image"
        src="/hero-main.png"
        alt="عطارة الدرويش - أصالة تُرى وجودة تُذاق"
      />
      <div className="hero-image-shade" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-buttons">
          <a className="hero-primary" href="https://wa.me/201011193720">
            <MessageCircle size={19} /> اطلب الآن عبر واتساب
          </a>
          <Link className="hero-secondary" href="/products">
            تصفح المنتجات
          </Link>
        </div>
      </div>
    </section>
  );
}
