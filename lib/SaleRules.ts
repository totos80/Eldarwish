import { Product } from "@/types/product";

export type SaleMode = "gram" | "liter" | "piece";

export type SaleRule = {
  mode: SaleMode;
  min: number;
  step: number;
  baseQuantity: number;
  unit: string;
  priceLabel: string;
};

export function getSaleRule(product: Product): SaleRule {
  if (
    product.id === 105 ||
    product.name.includes("زيت زيتون ادمز")
  ) {
    return {
      mode: "liter",
      min: 0.25,
      step: 0.25,
      baseQuantity: 1,
      unit: "لتر",
      priceLabel: "سعر اللتر",
    };
  }

  if (
    product.category === "العطارة" ||
    product.category === "التوابل" ||
    product.category === "البذور" ||
    product.category === "الأعشاب" ||
    product.category === "القهوة"
  ) {
    const isCoffee = product.category === "القهوة";

    return {
      mode: "gram",
      min: isCoffee ? 200 : 50,
      step: 50,
      baseQuantity: 1000,
      unit: "جرام",
      priceLabel: "سعر الكيلو",
    };
  }

  return {
    mode: "piece",
    min: 1,
    step: 1,
    baseQuantity: 1,
    unit: "قطعة",
    priceLabel: "سعر الوحدة",
  };
}

export function calculateItemTotal(
  price: number,
  quantity: number,
  rule: SaleRule
): number {
  return (price * quantity) / rule.baseQuantity;
}
