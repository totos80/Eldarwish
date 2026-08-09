

"use client";

import CartItem, { CartItemData } from "components/Cart/CartItem";

interface CartListProps {
  items: CartItemData[];

  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function CartList({
  items,
  onIncrease,
  onDecrease,
  onRemove,
}: CartListProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-16 text-center">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-stone-100">
          🛒
        </div>

        <h2 className="text-3xl font-bold">
          السلة فارغة
        </h2>

        <p className="mt-4 text-stone-500">
          لم تقم بإضافة أي منتجات بعد.
        </p>

      </div>
    );
  }

  return (
    <div className="space-y-5">

      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
        />
      ))}

    </div>
  );
}
