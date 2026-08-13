"use client";

import { CartProvider } from "@/context/CardContext";
import { WishlistProvider } from "@/context/WishListContext";
import { CompareProvider } from "@/context/CompareContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <WishlistProvider>
        <CompareProvider>
          {children}
        </CompareProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
