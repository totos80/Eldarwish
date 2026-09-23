"use client";

import Link from "next/link";
import { Search, ShoppingBag, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CardContext";
import { useState } from "react";

export default function Header() {
  const { items, total } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const getItemTotal = (item: (typeof items)[number]) => {
    if (item.pricingMode === "piece") {
      return item.price * item.quantity;
    }

    return (
      (item.price * item.quantity) /
      item.baseQuantity
    );
  };

  const formatQuantity = (
    item: (typeof items)[number]
  ) => {
    if (item.pricingMode === "liter") {
      return item.quantity.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      });
    }

    return item.quantity.toLocaleString("en-US");
  };

  return (
    <header className="site-header">
      <div className="promo-strip">
        <div className="promo-track">
          <span>
            عروض خاصة جدًا للطلبات من الموقع، شوف التخفيضات في صفحة العروض
          </span>

          <span aria-hidden="true">
            عروض خاصة جدًا للطلبات من الموقع، شوف التخفيضات في صفحة العروض
          </span>
        </div>
      </div>

      <div className="main-nav-wrap">
        <div className="main-nav">
          <Link
            href="/"
            className="brand-new"
            aria-label="الدَرْوِيش"
          >
            <img
              src="/eldarwish-shop-interior.png"
              alt="عطارة الدرويش"
              className="brand-shop-photo"
            />
          </Link>

          <nav className="desktop-nav">
            <Link className="active" href="/">
              الرئيسية
            </Link>

            <Link href="/products">
              المنتجات
            </Link>

            <Link href="/categories">
              التصنيفات
            </Link>

            <Link href="/offers">
              العروض
            </Link>

            <Link href="/about">
              من نحن
            </Link>

            <Link href="/contact">
              تواصل معنا
            </Link>
          </nav>

          <div className="nav-actions">
            <button
              className="icon-button"
              aria-label="بحث"
              type="button"
            >
              <Search size={21} />
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setCartOpen((open) => !open)
                }
                className="icon-button cart-button"
                aria-label="شنطة المشتريات"
                aria-expanded={cartOpen}
              >
                <ShoppingBag size={21} />

                <span className="cart-count">
                  {items.length}
                </span>
              </button>

              {cartOpen && (
                <div
                  dir="rtl"
                  className="absolute left-0 top-[calc(100%+14px)] z-[100] w-[330px] max-w-[90vw] overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-2xl"
                >
                  <div className="border-b border-amber-100 bg-amber-50 px-5 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-extrabold text-stone-800">
                          شنطة المشتريات
                        </h3>

                        <p className="mt-1 text-xs text-stone-500">
                          {items.length === 0
                            ? "لا توجد منتجات"
                            : `${items.length} صنف`}
                        </p>
                      </div>

                      <ShoppingBag
                        size={22}
                        className="text-amber-700"
                      />
                    </div>
                  </div>

                  {items.length === 0 ? (
                    <div className="px-5 py-8 text-center">
                      <ShoppingBag
                        size={38}
                        className="mx-auto text-stone-300"
                      />

                      <p className="mt-3 font-bold text-stone-600">
                        الشنطة فاضية
                      </p>

                      <p className="mt-1 text-sm text-stone-400">
                        أضف المنتجات اللي عايزها وهتظهر هنا.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="max-h-[320px] overflow-y-auto px-4 py-3">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between gap-3 border-b border-stone-100 py-3 last:border-b-0"
                          >
                            <div className="min-w-0 flex-1">
                              <p className="truncate font-bold text-stone-800">
                                {item.name}
                              </p>

                              <p className="mt-1 text-xs text-stone-500">
                                {formatQuantity(item)}{" "}
                                {item.unit}
                              </p>
                            </div>

                            <div className="shrink-0 text-left">
                              <p className="font-extrabold text-amber-700">
                                {getItemTotal(
                                  item
                                ).toLocaleString(
                                  "en-US",
                                  {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  }
                                )}{" "}
                                ج.م
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-amber-100 bg-stone-50 px-5 py-4">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="font-bold text-stone-600">
                            الإجمالي
                          </span>

                          <strong className="text-xl font-extrabold text-amber-700">
                            {total.toLocaleString(
                              "en-US",
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }
                            )}{" "}
                            ج.م
                          </strong>
                        </div>

                        <Link
                          href="/cart"
                          onClick={() =>
                            setCartOpen(false)
                          }
                          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-700 px-5 py-3 font-bold text-white transition hover:bg-amber-800"
                        >
                          عرض الشنطة كاملة

                          <ChevronDown
                            size={18}
                            className="rotate-90"
                          />
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
                                        
