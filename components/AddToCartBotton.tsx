"use client";

import { useEffect, useState } from "react";
import {
  ShoppingCart,
  Plus,
  Minus,
  Check,
} from "lucide-react";

interface AddToCartButtonProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
  };

  quantity?: number;

  onAdd: () => void;

  onIncrease: () => void;

  onDecrease: () => void;
}

export default function AddToCartButton({
  product,
  quantity = 0,
  onAdd,
  onIncrease,
  onDecrease,
}: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;

    const timer = setTimeout(() => {
      setAdded(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, [added]);

  if (quantity === 0) {
    return (
      <button
        onClick={() => {
          onAdd();
          setAdded(true);
        }}
        className="flex w-full items-center justify-center gap-3 rounded-2xl bg-amber-700 px-6 py-4 font-bold text-white transition hover:bg-amber-800 active:scale-95"
      >
        {added ? (
          <>
            <Check size={22} />
            تمت الإضافة
          </>
        ) : (
          <>
            <ShoppingCart size={22} />
            أضف إلى السلة
          </>
        )}
      </button>
    );
  }

  return (
    <div className="flex items-center justify-between rounded-2xl border border-amber-300 bg-amber-50 p-2">

      <button
        onClick={onDecrease}
        className="rounded-xl bg-white p-3 transition hover:bg-red-50"
      >
        <Minus size={20} />
      </button>

      <div className="text-center">

        <p className="text-sm text-stone-500">
          داخل السلة
        </p>

        <p className="text-2xl font-bold text-amber-700">
          {quantity}
        </p>

      </div>

      <button
        onClick={onIncrease}
        className="rounded-xl bg-white p-3 transition hover:bg-green-50"
      >
        <Plus size={20} />
      </button>

    </div>
  );
}
