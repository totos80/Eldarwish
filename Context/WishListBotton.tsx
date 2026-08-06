"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

interface WishlistButtonProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
  };

  className?: string;
}

export default function WishlistButton({
  product,
  className = "",
}: WishlistButtonProps) {

  const {
    toggle,
    exists,
  } = useWishlist();

  const favorite = exists(product.id);

  return (

    <button

      type="button"

      onClick={() => toggle(product)}

      aria-label="إضافة إلى المفضلة"

      className={`

        flex

        items-center

        justify-center

        rounded-xl

        border

        p-3

        transition-all

        duration-300

        hover:scale-105

        ${
          favorite
            ? "border-red-200 bg-red-50 text-red-600"
            : "border-stone-200 bg-white text-stone-600 hover:border-red-300 hover:text-red-600"
        }

        ${className}

      `}
    >

      <Heart

        size={22}

        fill={
          favorite
            ? "currentColor"
            : "none"
        }

      />

    </button>

  );

}
