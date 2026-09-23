"use client";

import Image from "next/image";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  MessageCircle,
} from "lucide-react";
import { useCart } from "@/context/CardContext";

export default function CartSummary() {
  const {
    items,
    total,
    removeItem,
    updateQuantity,
    clearCart,
  } = useCart();

  const whatsappNumber = "201553939342";

  const getItemTotal = (item: (typeof items)[number]) => {
    if (item.pricingMode === "piece") {
      return item.price * item.quantity;
    }

    return (
      (item.price * item.quantity) /
      item.baseQuantity
    );
  };

  const getPriceLabel = (
    item: (typeof items)[number]
  ) => {
    if (item.pricingMode === "gram") {
      return `${item.price.toLocaleString("en-US")} ج.م / كجم`;
    }

    if (item.pricingMode === "liter") {
      const pricePerLiter =
        item.price / item.baseQuantity;

      return `${pricePerLiter.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })} ج.م / لتر`;
    }

    return `${item.price.toLocaleString("en-US")} ج.م / قطعة`;
  };

  const formatQuantity = (
    item: (typeof items)[number]
  ) => {
    if (item.pricingMode === "liter") {
      return item.quantity.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      });
    }

    return item.quantity.toLocaleString("en-US");
  };

  const getQuantityStep = (
    item: (typeof items)[number]
  ) => {
    if (item.pricingMode === "gram") {
      return 50;
    }

    if (item.pricingMode === "liter") {
      return 0.25;
    }

    return 1;
  };

  const getMinimumQuantity = (
    item: (typeof items)[number]
  ) => {
    if (item.pricingMode === "gram") {
      return 50;
    }

    if (item.pricingMode === "liter") {
      return 0.25;
    }

    return 1;
  };

  const createOrderMessage = () => {
    const lines = items.map((item, index) => {
      const itemTotal = getItemTotal(item);

      return `${index + 1}. ${item.name} - ${formatQuantity(
        item
      )} ${item.unit} - ${itemTotal.toFixed(2)} ج.م`;
    });

    return [
      "السلام عليكم، أريد عمل طلب من عطارة الدَرْويش.",
      "",
      "الأصناف:",
      ...lines,
      "",
      `الإجمالي: ${total.toFixed(2)} ج.م`,
      "",
      "برجاء التواصل معي لتأكيد الطلب وبيانات التوصيل.",
    ].join("\n");
  };

  const sendOrder = () => {
    const message = encodeURIComponent(
      createOrderMessage()
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-amber-100 bg-white p-12 text-center shadow-sm">
        <ShoppingBag
          size={54}
          className="mx-auto text-amber-600"
        />

        <h2 className="mt-5 text-2xl font-bold text-stone-800">
          الشنطة فاضية
        </h2>

        <p className="mt-3 text-stone-500">
          لم تضف أي منتجات إلى شنطة المشتريات حتى الآن.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="space-y-4">
        {items.map((item) => {
          const itemTotal = getItemTotal(item);
          const step = getQuantityStep(item);
          const minimum = getMinimumQuantity(item);

          return (
            <div
              key={item.id}
              className="flex flex-col gap-5 rounded-3xl border border-amber-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center"
            >
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-stone-800">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-stone-500">
                  {getPriceLabel(item)}
                </p>

                <p className="mt-2 text-lg font-extrabold text-amber-700">
                  {itemTotal.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{" "}
                  ج.م
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      Math.max(
                        minimum,
                        item.quantity - step
                      )
                    )
                  }
                  className="rounded-xl bg-amber-50 p-2 text-amber-800 transition hover:bg-amber-100"
                  aria-label="تقليل الكمية"
                >
                  <Minus size={20} />
                </button>

                <div className="min-w-[80px] text-center">
                  <strong className="text-xl text-stone-800">
                    {formatQuantity(item)}
                  </strong>

                  <p className="text-xs text-stone-400">
                    {item.unit}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity + step
                    )
                  }
                  className="rounded-xl bg-amber-50 p-2 text-amber-800 transition hover:bg-amber-100"
                  aria-label="زيادة الكمية"
                >
                  <Plus size={20} />
                </button>
              </div>

              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="self-end rounded-xl p-2 text-red-500 transition hover:bg-red-50 sm:self-auto"
                aria-label={`حذف ${item.name}`}
              >
                <Trash2 size={20} />
              </button>
            </div>
          );
        })}
      </div>

      <aside className="h-fit rounded-3xl border border-amber-100 bg-amber-50 p-6 lg:sticky lg:top-6">
        <h2 className="text-2xl font-extrabold text-stone-800">
          ملخص الطلب
        </h2>

        <div className="mt-6 flex items-center justify-between border-b border-amber-200 pb-4">
          <span className="text-stone-600">
            عدد الأصناف
          </span>

          <strong className="text-stone-800">
            {items.length}
          </strong>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-lg font-bold text-stone-700">
            الإجمالي
          </span>

          <strong className="text-2xl font-extrabold text-amber-700">
            {total.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            ج.م
          </strong>
        </div>

        <button
          type="button"
          onClick={sendOrder}
          className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-green-600 px-5 py-4 font-bold text-white transition hover:bg-green-700"
        >
          <MessageCircle size={22} />
          إرسال الطلب عبر واتساب
        </button>

        <button
          type="button"
          onClick={clearCart}
          className="mt-3 w-full rounded-2xl border border-red-200 bg-white px-5 py-3 font-bold text-red-600 transition hover:bg-red-50"
        >
          تفريغ الشنطة
        </button>
      </aside>
    </div>
  );
            }                    
