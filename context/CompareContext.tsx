"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface CompareProduct {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  description: string;
}

interface CompareContextType {
  products: CompareProduct[];

  add: (product: CompareProduct) => void;

  remove: (id: number) => void;

  clear: () => void;

  exists: (id: number) => boolean;

  canAdd: boolean;

  count: number;
}

const STORAGE_KEY = "eldarwish_compare";

const CompareContext =
  createContext<CompareContextType | null>(
    null
  );

export function CompareProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [products, setProducts] =
    useState<CompareProduct[]>([]);

  useEffect(() => {

    const saved =
      localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    try {

      setProducts(JSON.parse(saved));

    } catch {}

  }, []);

  useEffect(() => {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(products)
    );

  }, [products]);

  function add(product: CompareProduct) {

    setProducts((old) => {

      if (
        old.find(
          (item) =>
            item.id === product.id
        )
      ) {
        return old;
      }

      if (old.length >= 3) {
        return old;
      }

      return [...old, product];

    });

  }

  function remove(id: number) {

    setProducts((old) =>
      old.filter(
        (item) =>
          item.id !== id
      )
    );

  }

  function clear() {

    setProducts([]);

  }

  function exists(id: number) {

    return products.some(
      (item) =>
        item.id === id
    );

  }

  const value = useMemo(
    () => ({

      products,

      add,

      remove,

      clear,

      exists,

      canAdd:
        products.length < 3,

      count:
        products.length,

    }),
    [products]
  );

  return (

    <CompareContext.Provider
      value={value}
    >

      {children}

    </CompareContext.Provider>

  );

}

export function useCompare() {

  const context =
    useContext(
      CompareContext
    );

  if (!context) {

    throw new Error(
      "CompareProvider missing"
    );

  }

  return context;

}
