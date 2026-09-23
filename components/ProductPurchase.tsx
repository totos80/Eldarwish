"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CardContext";
import { Product } from "@/types/product";
import {
  calculateItemTotal,
  getSaleRule,
} from "@/lib/SaleRules";

type Props = {
  product: Product;
};

export default function ProductPurchase({
  product,
}: Props) {
  const { addItem } = useCart();

  const rule = getSaleRule(product);

  const [quantity, setQuantity] = useState(rule.min);
  const [added, setAdded] = useState(false);

  const currentPrice = calculateItemTotal(
    product.price,
    quantity,
    rule
  );

  const increaseQuantity = () => {
    setQuantity((current) => current + rule.step);
  };

  const decreaseQuantity = () => {
    setQuantity((current) =>
      Math.max(rule.min, current - rule.step)
    );
  };

  const addToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
      unit: rule.unit,
      pricingMode: rule.mode,
      baseQuantity: rule.baseQuantity,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  const formattedQuantity =
    rule.mode === "liter"
      ? quantity.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        })
      : quantity.toLocaleString("en-US");

  const priceLabel =
    rule.mode === "gram"
      ? `${product.price.toLocaleString("en-US")} ج.م / كجم`
      : rule.mode === "liter"
        ? `${(
            product.price / rule.baseQuantity
          ).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} ج.م / لتر`
        : `${product.price.toLocaleString("en-US")} ج.م / قطعة`;

  return (
    <div className="mt-8 rounded-3xl border border-amber-100 bg-amber-50/50 p-6">
      <div>
        <p className="text-sm text-stone-500">
          {rule.priceLabel}
        </p>

        <strong className="text-4xl font-extrabold text-amber-700">
          {rule.mode === "liter"
            ? (product.price / rule.baseQuantity).toLocaleString(
                "en-US",
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }
              )
            : product.price.toLocaleString("en-US")}
        </strong>

        <span className="mr-2 text-lg text-stone-600">
          {rule.mode === "gram"
            ? "ج.م / كجم"
            : rule.mode === "liter"
              ? "ج.م / لتر"
              : "ج.م / قطعة"}
        </span>

        {rule.mode === "liter" && (
          <p className="mt-2 text-xs text-stone-400">
            العبوة الأصلية: {rule.baseQuantity} لتر
          </p>
        )}

        {rule.mode !== "liter" && (
          <p className="sr-only">{priceLabel}</p>
        )}
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
          {rule.mode === "gram"
            ? "الكمية بالجرام"
            : rule.mode === "liter"
              ? "الكمية باللتر"
              : "الكمية"}
        </p>

        <div className="flex items-center justify-between rounded-2xl border border-amber-200 bg-white p-2">
          <button
            type="button"
            onClick={decreaseQuantity}
            className="rounded-xl bg-amber-50 p-3 text-amber-800 transition hover:bg-amber-100"
            aria-label="تقليل الكمية"
          >
            <Minus size={22} />
          </button>

          <div className="text-center">
            <p className="text-3xl font-extrabold text-stone-800">
              {formattedQuantity}
            </p>

            <p className="text-sm text-stone-400">
              {rule.unit}
            </p>
          </div>

          <button
            type="button"
            onClick={increaseQuantity}
            className="rounded-xl bg-amber-50 p-3 text-amber-800 transition hover:bg-amber-100"
            aria-label="زيادة الكمية"
          >
            <Plus size={22} />
          </button>
        </div>

        <p className="mt-2 text-center text-xs text-stone-400">
          أقل كمية {rule.min} {rule.unit} — الزيادة بمقدار{" "}
          {rule.step} {rule.unit}
        </p>
      </div>

      <button
        type="button"
        onClick={addToCart}
        className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-amber-700 px-6 py-4 text-lg font-bold text-white shadow-md transition hover:bg-amber-800 active:scale-[0.98]"
      >
        <ShoppingBag size={23} />

        {added
          ? "تمت الإضافة إلى الشنطة ✓"
          : "أضف إلى شنطة المشتريات"}
      </button>
    </div>
  );
} 
