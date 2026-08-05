import Link from "next/link";
import { Menu, Phone, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-amber-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-amber-700">
          عطارة الدرويش
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/">الرئيسية</Link>
          <Link href="/products">المنتجات</Link>
          <Link href="/categories">التصنيفات</Link>
          <Link href="/offers">العروض</Link>
          <Link href="/about">من نحن</Link>
          <Link href="/contact">تواصل معنا</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:01011193720"
            className="hidden md:flex items-center gap-2 rounded-xl bg-amber-700 px-4 py-2 text-white"
          >
            <Phone size={18} />
            01011193720
          </a>

          <Link href="/cart" className="relative rounded-xl border p-2">
            <ShoppingCart size={22} />
          </Link>

          <button className="rounded-xl border p-2 md:hidden">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}


