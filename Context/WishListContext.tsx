"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface WishlistItem {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface WishlistContextType {
  items: WishlistItem[];

  add: (item: WishlistItem) => void;

  remove: (id: number) => void;

  toggle: (item: WishlistItem) => void;

  clear: () => void;

  exists: (id: number) => boolean;

  count: number;
}

const WishlistContext =
  createContext<WishlistContextType | null>(
    null
  );

const STORAGE_KEY =
  "eldarwish-wishlist";

export function WishlistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<
    WishlistItem[]
  >([]);

  useEffect(() => {
    const saved =
      localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    try {
      setItems(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(items)
    );
  }, [items]);

  function add(item: WishlistItem) {
    setItems((old) => {
      if (
        old.find(
          (product) =>
            product.id === item.id
        )
      )
        return old;

      return [...old, item];
    });
  }

  function remove(id: number) {
    setItems((old) =>
      old.filter(
        (product) =>
          product.id !== id
      )
    );
  }

  function toggle(item: WishlistItem) {
    setItems((old) => {
      const exists = old.find(
        (p) => p.id === item.id
      );

      if (exists) {
        return old.filter(
          (p) => p.id !== item.id
        );
      }

      return [...old, item];
    });
  }

  function clear() {
    setItems([]);
  }

  function exists(id: number) {
    return items.some(
      (item) => item.id === id
    );
  }

  const value = useMemo(
    () => ({
      items,

      add,

      remove,

      toggle,

      clear,

      exists,

      count: items.length,
    }),
    [items]
  );

  return (
    <WishlistContext.Provider
      value={value}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context =
    useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "WishlistProvider is missing"
    );
  }

  return context;
}
