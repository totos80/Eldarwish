import { CartItem } from "@/context/CardContext";

interface CustomerInfo {
  name?: string;
  phone?: string;
  address?: string;
  notes?: string;
}

export function generateWhatsAppOrder(
  items: CartItem[],
  customer?: CustomerInfo
) {
  if (!items.length) return "";

  let subtotal = 0;

  const lines = items.map((item, index) => {
    const total = item.price * item.quantity;

    subtotal += total;

    return [
      `${index + 1}- ${item.name}`,
      `الكمية : ${item.quantity}`,
      `سعر الوحدة : ${item.price} ج.م`,
      `الإجمالي : ${total} ج.م`,
    ].join("\n");
  });

  const message = [
    "🌿 طلب جديد من موقع عطارة الدرويش",
    "",
    "========================",
    "",
    ...lines,
    "",
    "========================",
    "",
    `عدد المنتجات : ${items.length}`,
    `الإجمالي : ${subtotal} ج.م`,
    "",
    "بيانات العميل",
    "---------------",
    `الاسم : ${customer?.name || "-"}`,
    `الهاتف : ${customer?.phone || "-"}`,
    `العنوان : ${customer?.address || "-"}`,
    "",
    `ملاحظات :`,
    customer?.notes || "لا يوجد",
    "",
    "شكراً لكم 🌹",
  ].join("\n");

  return `https://wa.me/201011193720?text=${encodeURIComponent(
    message
  )}`;
}

export function generateSimpleOrder(items: CartItem[]) {
  return generateWhatsAppOrder(items);
}

export function calculateCartTotal(items: CartItem[]) {
  return items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

export function calculateItemsCount(items: CartItem[]) {
  return items.reduce(
    (count, item) => count + item.quantity,
    0
  );
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("ar-EG").format(price) + " ج.م";
}

export function hasItems(items: CartItem[]) {
  return items.length > 0;
}
