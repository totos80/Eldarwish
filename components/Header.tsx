"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ShoppingBag, Search } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["الرئيسية", "/"],
    ["المنتجات", "/products"],
    ["التصنيفات", "/categories"],
    ["العروض", "/offers"],
    ["من نحن", "/about"],
    ["تواصل معنا", "/contact"],
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#352116] px-4 py-2 text-center text-xs font-medium text-[#f3dfb8]">
        🌿 جودة مختارة بعناية من عطارة الدرويش — السويس
      </div>

      <div className="border-b border-[#e8d5b4] bg-[#fbf8f1]/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-3 px-4">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#352116] text-xl shadow-md">
              🌿
            </div>

            <div>
              <div className="text-lg font-black text-[#352116] sm:text-2xl">
                عطارة الدرويش
              </div>
              <div className="text-[9px] font-bold tracking-[0.18em] text-[#a66b25]">
                أصالة • جودة • ثقة
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-bold text-[#594738] transition hover:text-[#a66b25]"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/products"
              className="hidden rounded-full border border-[#dfc9a3] bg-white p-2.5 text-[#352116] sm:block"
              aria-label="البحث"
            >
              <Search size={19} />
            </Link>

            <a
              href="tel:01011193720"
              className="hidden items-center gap-2 rounded-full bg-[#a66b25] px-4 py-2.5 text-sm font-bold text-white md:flex"
            >
              <Phone size={17} />
              01011193720
            </a>

            <Link
              href="/cart"
              className="relative rounded-full border border-[#dfc9a3] bg-white p-2.5 text-[#352116]"
              aria-label="السلة"
            >
              <ShoppingBag size={20} />
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#352116] px-1 text-[9px] text-white">
                0
              </span>
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="rounded-full border border-[#dfc9a3] bg-white p-2.5 text-[#352116] lg:hidden"
              aria-label="فتح القائمة"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-[#eadfce] bg-[#fbf8f1] px-5 py-3 lg:hidden">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block border-b border-[#eadfce] py-4 font-bold text-[#352116]"
              >
                {label}
              </Link>
            ))}

            <a
              href="https://wa.me/201011193720"
              target="_blank"
              rel="noreferrer"
              className="mt-4 block rounded-xl bg-[#352116] px-5 py-3 text-center font-bold text-white"
            >
              اطلب عبر واتساب
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
