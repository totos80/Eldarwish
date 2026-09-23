"use client";

import Image from "next/image";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CardContext";

const directProducts = [
  {
    id: 1001,
    name: "طحينة خام",
  },
  {
    id: 1002,
    name: "زبدة فول سوداني",
  },
];

const PRICE_PER_KG = 160;
const MIN_GRAMS = 50;
const STEP_GRAMS = 50;

export default function FreshGrindingSection() {
  const { addItem } = useCart();

  const [quantities, setQuantities] = useState<Record<number, number>>({
    1001: MIN_GRAMS,
    1002: MIN_GRAMS,
  });

  const [addedProduct, setAddedProduct] = useState<number | null>(null);

  const changeQuantity = (id: number, amount: number) => {
    setQuantities((current) => ({
      ...current,
      [id]: Math.max(
        MIN_GRAMS,
        (current[id] || MIN_GRAMS) + amount
      ),
    }));
  };

  const addDirectProduct = (id: number, name: string) => {
    const quantity = quantities[id] || MIN_GRAMS;

    addItem({
      id,
      name,
      price: PRICE_PER_KG,
      quantity,
      image: "/tahina-peanut-fresh.png",
      unit: "جرام",
      pricingMode: "gram",
      baseQuantity: 1000,
    });

    setAddedProduct(id);

    setTimeout(() => {
      setAddedProduct((current) =>
        current === id ? null : current
      );
    }, 1800);
  };

  return (
    <section
      className="fresh-grinding-section"
      aria-label="الطحينة وزبدة الفول السوداني الطازجة"
    >
      <div className="fresh-grinding-card">
        <div className="fresh-grinding-image-wrap">
          <Image
            src="/tahina-peanut-fresh.png"
            alt="طحن الطحينة وزبدة الفول السوداني الطازجة أمام العميل في عطارة الدرويش"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
            className="fresh-grinding-image"
          />
        </div>

        <div className="fresh-grinding-copy">
          <span className="fresh-grinding-kicker">
            طازج قدام عينيك
          </span>

          <h2>
            طحينة وزبدة فول سوداني خام… تُطحن قدامك
          </h2>

          <p>
            في عطارة الدرويش بنقدملك الطحينة وزبدة الفول السوداني
            من خامات مختارة، <strong>بدون أي إضافات</strong>،
            وتتطحن قدامك وقت الطلب عشان تاخدها طازة وبالجودة
            اللي تستحقها.
          </p>

          <p>
            <strong>جودة مضمونة، طعم أصيل، وسعر ممتاز.</strong>{" "}
            اطلب الكمية اللي تناسبك وخلي الجودة تحكم بنفسها.
          </p>

          <div className="fresh-grinding-points">
            <span>✓ خام بدون إضافات</span>
            <span>✓ طحن أمامك</span>
            <span>✓ طازة وقت الطلب</span>
            <span>✓ سعر ممتاز</span>
          </div>

          <div
            dir="rtl"
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {directProducts.map((product) => {
              const quantity =
                quantities[product.id] || MIN_GRAMS;

              const currentPrice =
                (PRICE_PER_KG * quantity) / 1000;

              const isAdded =
                addedProduct === product.id;

              return (
                <div
                  key={product.id}
                  className="rounded-3xl border border-amber-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-extrabold text-stone-800">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-sm text-stone-500">
                        160 ج.م / كجم
                      </p>
                    </div>

                    <div className="rounded-2xl bg-amber-50 px-3 py-2 text-left">
                      <strong className="text-lg font-extrabold text-amber-700">
                        {currentPrice.toFixed(2)}
                      </strong>

                      <span className="block text-[11px] text-stone-400">
                        ج.م
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-2xl border border-amber-100 bg-amber-50/50 p-2">
                    <button
                      type="button"
                      onClick={() =>
                        changeQuantity(
                          product.id,
                          -STEP_GRAMS
                        )
                      }
                      className="rounded-xl bg-white p-2.5 text-amber-800 shadow-sm transition hover:bg-amber-100"
                      aria-label={
                        "تقليل كمية " + product.name
                      }
                    >
                      <Minus size={20} />
                    </button>

                    <div className="text-center">
                      <strong className="text-2xl font-extrabold text-stone-800">
                        {quantity}
                      </strong>

                      <p className="text-xs text-stone-400">
                        جرام
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        changeQuantity(
                          product.id,
                          STEP_GRAMS
                        )
                      }
                      className="rounded-xl bg-white p-2.5 text-amber-800 shadow-sm transition hover:bg-amber-100"
                      aria-label={
                        "زيادة كمية " + product.name
                      }
                    >
                      <Plus size={20} />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      addDirectProduct(
                        product.id,
                        product.name
                      )
                    }
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-700 px-4 py-3 font-bold text-white transition hover:bg-amber-800 active:scale-[0.98]"
                  >
                    <ShoppingBag size={19} />

                    {isAdded
                      ? "تمت الإضافة للشنطة ✓"
                      : "أضف للشنطة مباشرة"}
                  </button>

                  <p className="mt-2 text-center text-[11px] text-stone-400">
                    أقل كمية 50 جرام — الزيادة 50 جرام
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
