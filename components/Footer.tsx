"use client";

import React from "react";

export default function Footer() {
  const phone = "01553939342";
  const whatsapp = "201553939342";

  return (
    <footer className="mt-16 border-t border-amber-900/20 bg-[#2b2118] text-[#f5ead7]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-wide">
              الدَرْويش
            </h2>

            <p className="max-w-md text-sm leading-7 text-[#d8c8b2]">
              عطارة الدرويش — منتجات مختارة بعناية وجودة نحرص عليها في كل
              صنف، مع خدمة توصيل داخل السويس.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-[#e6c27a]">
              تواصل معنا
            </h3>

            <div className="space-y-3 text-sm">
              <a
                href={`tel:${phone}`}
                className="block transition-colors hover:text-[#e6c27a]"
              >
                📞 {phone}
              </a>

              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-[#e6c27a]"
              >
                💬 تواصل معنا عبر واتساب
              </a>

              <p className="text-[#d8c8b2]">
                📍 السويس — حي فيصل
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-[#e6c27a]">
              روابط سريعة
            </h3>

            <nav className="space-y-3 text-sm">
              <a
                href="/"
                className="block transition-colors hover:text-[#e6c27a]"
              >
                الرئيسية
              </a>

              <a
                href="/products"
                className="block transition-colors hover:text-[#e6c27a]"
              >
                المنتجات
              </a>

              <a
                href="/about"
                className="block transition-colors hover:text-[#e6c27a]"
              >
                عن الدرويش
              </a>

              <a
                href="/contact"
                className="block transition-colors hover:text-[#e6c27a]"
              >
                اتصل بنا
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-[#bcae9a]">
          © {new Date().getFullYear()} الدَرْويش — جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
