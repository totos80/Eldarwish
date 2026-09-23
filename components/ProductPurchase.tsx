"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CardContext";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductPurchase({ product }: Props) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  return (
    <div className="mt-8 rounded-3xl border border-amber-100 bg-amber-50/50 p-6">
      <div className="flex items-end gap-3">
        <div>
          <p className="text-sm text-stone-500">
            سعر الوحدة
          </p>

          <strong className="text-4xl font-extrabold text-amber-700">
            {product.price.toLocaleString("en-US")}
          </strong>

          <span className="mr-2 text-lg text-stone-600">
            ج.م / {product.unit}
          </span>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between rounded-2xl border border-amber-200 bg-white p-2">
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="rounded-xl bg-amber-50 p-3 text-amber-800 transition hover:bg-amber-100"
          aria-label="تقليل الكمية"
        >
          <Minus size={22} />
        </button>

        <div className="text-center">
          <p className="text-xs text-stone-400">
            الكمية
          </p>

          <p className="text-2xl font-bold text-stone-800">
            {quantity}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setQuantity((q) => q + 1)}
          className="rounded-xl bg-amber-50 p-3 text-amber-800 transition hover:bg-amber-100"
          aria-label="زيادة الكمية"
        >
          <Plus size={22} />
        </button>
      </div>

      <button
        type="button"
        onClick={addToCart}
        className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-amber-700 px-6 py-4 text-lg font-bold text-white shadow-md transition hover:bg-amber-800 active:scale-[0.98]"
      >
        <ShoppingBag size={23} />

        {added ? "تمت الإضافة إلى السلة ✓" : "أضف إلى شنطة المشتريات"}
      </button>
    </div>
  );
}
