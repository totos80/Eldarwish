"use client";

import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishListContext";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <WishlistProvider>
        {children}
      </WishlistProvider>
    </CartProvider>
  );
}
