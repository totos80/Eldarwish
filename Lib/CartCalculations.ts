export interface CartProduct {

  id: number;

  name: string;

  price: number;

  quantity: number;

}

export function calculateSubtotal(
  products: CartProduct[]
): number {

  return products.reduce(

    (total, product) =>

      total +
      product.price * product.quantity,

    0

  );

}

export function calculateItemsCount(
  products: CartProduct[]
): number {

  return products.reduce(

    (count, product) =>

      count + product.quantity,

    0

  );

}

export function calculateUniqueProducts(
  products: CartProduct[]
): number {

  return products.length;

}

export function calculateShipping(
  subtotal: number
): number {

  if (subtotal === 0)
    return 0;

  if (subtotal >= 1000)
    return 0;

  return 40;

}

export function calculateDiscount(
  subtotal: number
): number {

  if (subtotal >= 3000)
    return subtotal * 0.15;

  if (subtotal >= 2000)
    return subtotal * 0.10;

  if (subtotal >= 1000)
    return subtotal * 0.05;

  return 0;

}

export function calculateTax(
  subtotal: number,
  taxRate = 0
): number {

  return subtotal * taxRate;

}

export function calculateGrandTotal(
  subtotal: number,
  shipping: number,
  discount: number,
  tax = 0
): number {

  return (
    subtotal +
    shipping +
    tax -
    discount
  );

}

export function formatCurrency(
  value: number
): string {

  return new Intl.NumberFormat(
    "ar-EG",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  ).format(value) + " ج.م";

}

export function canCheckout(
  products: CartProduct[]
): boolean {

  return products.length > 0;

}

export function freeShippingRemaining(
  subtotal: number,
  target = 1000
): number {

  if (subtotal >= target)
    return 0;

  return target - subtotal;

}

export function freeShippingProgress(
  subtotal: number,
  target = 1000
): number {

  return Math.min(
    (subtotal / target) * 100,
    100
  );

}

export function estimateDeliveryDays(
  subtotal: number
): number {

  if (subtotal >= 1000)
    return 1;

  return 2;

}

export function averageItemPrice(
  products: CartProduct[]
): number {

  if (!products.length)
    return 0;

  return (
    calculateSubtotal(products) /
    calculateItemsCount(products)
  );

}
