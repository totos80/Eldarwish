"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

export interface CartItemData {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartItemProps {
  item: CartItemData;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex gap-5 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">

      <div className="relative h-28 w-28 overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col">

        <h3 className="text-xl font-bold">
          {item.name}
        </h3>

        <p className="mt-2 text-lg font-bold text-amber-700">
          {item.price} ج.م
        </p>

        <div className="mt-auto flex items-center justify-between">

          <div className="flex items-center gap-3">

            <button
              onClick={() => onDecrease(item.id)}
              className="rounded-lg border p-2 hover:bg-stone-100"
            >
              <Minus size={18} />
            </button>

            <span className="w-8 text-center font-bold">
              {item.quantity}
            </span>

            <button
              onClick={() => onIncrease(item.id)}
              className="rounded-lg border p-2 hover:bg-stone-100"
            >
              <Plus size={18} />
            </button>

          </div>

          <button
            onClick={() => onRemove(item.id)}
            className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-red-600 hover:bg-red-100"
          >
            <Trash2 size={18} />
            حذف
          </button>

        </div>

      </div>

    </div>
  );
}
