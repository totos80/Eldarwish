"use client";

import { Scale } from "lucide-react";
import { useCompare } from "@/context/CompareContext";

interface CompareButtonProps {
  product: {
    id: number;
    name: string;
    image: string;
    category: string;
    price: number;
    description: string;
  };
}

export default function CompareButton({
  product,
}: CompareButtonProps) {

  const {
    add,
    remove,
    exists,
    canAdd,
  } = useCompare();

  const selected = exists(product.id);

  function handleClick() {

    if (selected) {
      remove(product.id);
      return;
    }

    if (canAdd) {
      add(product);
    }

  }

  return (

    <button

      onClick={handleClick}

      disabled={!selected && !canAdd}

      className={`
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        px-5
        py-3
        font-semibold
        transition

        ${
          selected
            ? "border-blue-600 bg-blue-600 text-white"
            : "border-stone-300 bg-white hover:border-blue-600 hover:text-blue-600"
        }

        ${
          !selected && !canAdd
            ? "cursor-not-allowed opacity-50"
            : ""
        }
      `}

    >

      <Scale size={20} />

      {selected
        ? "إزالة من المقارنة"
        : "إضافة للمقارنة"}

    </button>

  );

}
