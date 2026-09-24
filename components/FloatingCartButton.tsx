"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CardContext";

export default function FloatingCartButton() {
const { items } = useCart();

const count = items.length;

return (
<Link
href="/cart"
aria-label="فتح شنطة المشتريات"
title="شنطة المشتريات"
className="fixed bottom-[152px] left-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full border-2 border-amber-200 bg-amber-700 text-white shadow-2xl transition duration-200 hover:scale-110 hover:bg-amber-800 active:scale-95"
>
<ShoppingBag size={26} strokeWidth={2.2} />

  {count > 0 && (
    <span
      className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-red-600 px-1 text-xs font-extrabold text-white shadow-md"
    >
      {count > 99 ? "99+" : count}
    </span>
  )}
</Link>

);
}
