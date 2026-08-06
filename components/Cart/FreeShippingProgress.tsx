"use client";

import { Truck, CheckCircle } from "lucide-react";

interface FreeShippingProgressProps {
  subtotal: number;
  target?: number;
}

export default function FreeShippingProgress({
  subtotal,
  target = 1000,
}: FreeShippingProgressProps) {
  const progress = Math.min((subtotal / target) * 100, 100);

  const remaining = Math.max(target - subtotal, 0);

  const completed = subtotal >= target;

  return (
    <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">

      <div className="mb-5 flex items-center gap-3">

        {completed ? (
          <CheckCircle
            className="text-green-600"
            size={24}
          />
        ) : (
          <Truck
            className="text-amber-700"
            size={24}
          />
        )}

        <h3 className="text-xl font-bold">
          {completed
            ? "أصبحت مؤهلاً للشحن المجاني"
            : "الشحن المجاني"}
        </h3>

      </div>

      {!completed && (
        <p className="mb-5 leading-8 text-stone-600">
          أضف منتجات بقيمة{" "}
          <span className="font-bold text-amber-700">
            {remaining.toFixed(2)} ج.م
          </span>{" "}
          للحصول على شحن مجاني.
        </p>
      )}

      {completed && (
        <p className="mb-5 leading-8 text-green-700">
          تهانينا! سيتم احتساب تكلفة الشحن بقيمة صفر.
        </p>
      )}

      <div className="h-4 overflow-hidden rounded-full bg-stone-200">

        <div
          className={`h-full rounded-full transition-all duration-700 ${
            completed
              ? "bg-green-600"
              : "bg-amber-600"
          }`}
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <div className="mt-3 flex items-center justify-between text-sm text-stone-500">

        <span>
          0 ج.م
        </span>

        <span>
          {target} ج.م
        </span>

      </div>

      <div className="mt-6 rounded-xl bg-amber-50 p-4">

        <h4 className="font-bold text-amber-700">
          نصيحة
        </h4>

        <p className="mt-2 text-sm leading-7 text-stone-600">
          إضافة منتج أو منتجين قد توفر عليك رسوم التوصيل بالكامل.
        </p>

      </div>

    </div>
  );
}
