"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishListContext";

interface WishlistCounterProps {
  showText?: boolean;
}

export default function WishlistCounter({
  showText = false,
}: WishlistCounterProps) {
  const { count } = useWishlist();

  return (
    <Link
      href="/wishlist"
      className="relative inline-flex items-center gap-2 rounded-xl transition hover:text-amber-700"
    >
      <div className="relative">

        <Heart size={24} />

        {count > 0 && (
          <span
            className="
              absolute
              -right-2
              -top-2
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-red-600
              text-[11px]
              font-bold
              text-white
            "
          >
            {count > 99 ? "99+" : count}
          </span>
        )}

      </div>

      {showText && (
        <span className="font-semibold">
          المفضلة
        </span>
      )}
    </Link>
  );
}
