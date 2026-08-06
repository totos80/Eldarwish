
"use client";

import Link from "next/link";
import { MessageCircle, ShoppingBag, TicketPercent } from "lucide-react";

interface CheckoutSummaryProps {
  subtotal: number;
  shipping: number;
  discount: number;
  itemsCount: number;
  whatsappUrl: string;
}

export default function CheckoutSummary({
  subtotal,
  shipping,
  discount,
  itemsCount,
  whatsappUrl,
}: CheckoutSummaryProps) {
  const total = subtotal + shipping - discount;

  return (
    <aside className="sticky top-24 rounded-3xl border border-stone-200 bg-white p-7 shadow-lg">

      <h2 className="mb-8 text-3xl font-bold">
        ملخص الطلب
      </h2>

      <div className="space-y-5">

        <div className="flex items-center justify-between">
          <span className="text-stone-600">
            عدد المنتجات
          </span>

          <span className="font-bold">
            {itemsCount}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-stone-600">
            إجمالي المنتجات
          </span>

          <span className="font-bold">
            {subtotal.toFixed(2)} ج.م
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-stone-600">
            التوصيل
          </span>

          <span className="font-bold">
            {shipping.toFixed(2)} ج.م
          </span>
        </div>

        <div className="flex items-center justify-between text-green-700">
          <span>
            الخصم
          </span>

          <span className="font-bold">
            - {discount.toFixed(2)} ج.م
          </span>
        </div>

      </div>

      <hr className="my-8" />

      <div className="rounded-2xl bg-amber-50 p-4">

        <div className="flex items-center gap-3">

          <TicketPercent
            className="text-amber-700"
            size={22}
          />

          <input
            type="text"
            placeholder="كود الخصم"
            className="flex-1 rounded-xl border bg-white px-4 py-3 outline-none"
          />

        </div>

        <button
          className="mt-4 w-full rounded-xl border border-amber-700 py-3 font-bold text-amber-700 transition hover:bg-amber-700 hover:text-white"
        >
          تطبيق الكوبون
        </button>

      </div>

      <div className="mt-8 flex items-center justify-between text-2xl font-bold">

        <span>
          الإجمالي
        </span>

        <span className="text-amber-700">
          {total.toFixed(2)} ج.م
        </span>

      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-green-600 py-4 text-lg font-bold text-white transition hover:bg-green-700"
      >
        <MessageCircle size={24} />
        تأكيد الطلب عبر واتساب
      </a>

      <Link
        href="/products"
        className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl border border-stone-300 py-4 text-lg font-bold transition hover:bg-stone-100"
      >
        <ShoppingBag size={22} />
        متابعة التسوق
      </Link>

    </aside>
  );
}
