"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CardContext";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

const GRAM_STEP = 50;

export default function ProductPurchase({ product }: Props) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(50);
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

  const unitPrice = product.price;
  const currentPrice = (unitPrice * quantity) / 1000;

  return (
    <div className="mt-8 rounded-3xl border border-amber-100 bg-amber-50/50 p-6">
      <div>
        <p className="text-sm text-stone-500">
          سعر الكيلو
        </p>

        <strong className="text-4xl font-extrabold text-amber-700">
          {unitPrice.toLocaleString("en-US")}
        </strong>

        <span className="mr-2 text-lg text-stone-600">
          ج.م / كجم
        </span>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-4 text-center">
        <p className="text-sm text-stone-500">
          سعر الكمية المختارة
        </p>

        <p className="mt-1 text-2xl font-extrabold text-amber-700">
          {currentPrice.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{" "}
          ج.م
        </p>
      </div>

      <div className="mt-5">
        <p className="mb-2 text-center text-sm font-bold text-stone-600">
          الكمية بالجرام
        </p>

        <div className="flex items-center justify-between rounded-2xl border border-amber-200 bg-white p-2">
          <button
            type="button"
            onClick={() =>
              setQuantity((q) => Math.max(GRAM_STEP, q - GRAM_STEP))
            }
            className="rounded-xl bg-amber-50 p-3 text-amber-800 transition hover:bg-amber-100"
            aria-label="تقليل الكمية"
          >
            <Minus size={22} />
          </button>

          <div className="text-center">
            <p className="text-3xl font-extrabold text-stone-800">
              {quantity}
            </p>

            <p className="text-sm text-stone-400">
              جرام
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setQuantity((q) => q + GRAM_STEP)
            }
            className="rounded-xl bg-amber-50 p-3 text-amber-800 transition hover:bg-amber-100"
            aria-label="زيادة الكمية"
          >
            <Plus size={22} />
          </button>
        </div>

        <p className="mt-2 text-center text-xs text-stone-400">
          أقل كمية 50 جرام — الزيادة بمقدار 50 جرام
        </p>
      </div>

      <button
        type="button"
        onClick={addToCart}
        className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-amber-700 px-6 py-4 text-lg font-bold text-white shadow-md transition hover:bg-amber-800 active:scale-[0.98]"
      >
        <ShoppingBag size={23} />

        {added
          ? "تمت الإضافة إلى السلة ✓"
          : "أضف إلى شنطة المشتريات"}
      </button>
    </div>
  );
}
