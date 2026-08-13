"use client";

import { useEffect, useState } from "react";
import { CartItem } from "@/context/CardContext";

const STORAGE_KEY = "eldarwish-cart";

export function useLocalCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  // تحميل السلة من LocalStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (error) {
      console.error(error);
    }

    setLoaded(true);
  }, []);

  // حفظ السلة تلقائياً
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(items)
    );
  }, [items, loaded]);

  function addItem(item: CartItem) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? {
                ...i,
                quantity: i.quantity + item.quantity,
              }
            : i
        );
      }

      return [...prev, item];
    });
  }

  function increase(id: number) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decrease(id: number) {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function remove(id: number) {
    setItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  function clear() {
    setItems([]);
  }

  function totalPrice() {
    return items.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );
  }

  function totalQuantity() {
    return items.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );
  }

  function isInCart(id: number) {
    return items.some((item) => item.id === id);
  }

  function getQuantity(id: number) {
    return (
      items.find((item) => item.id === id)
        ?.quantity || 0
    );
  }

  return {
    items,
    loaded,
    addItem,
    increase,
    decrease,
    remove,
    clear,
    totalPrice,
    totalQuantity,
    isInCart,
    getQuantity,
  };
}
