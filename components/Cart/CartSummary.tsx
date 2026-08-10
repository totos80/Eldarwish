"use client";

import { useCart } from "@/context/CartContext";

export default function CartSummary() {
  const { items, total, clearCart } = useCart();

  return (
    <div className="card p-6">
      <h2>ملخص الطلب</h2>
      <p>المنتجات: {items.length}</p>
      <p>الإجمالي: {total} ج.م</p>
      <button onClick={clearCart}>تفريغ السلة</button>
    </div>
  );
}
