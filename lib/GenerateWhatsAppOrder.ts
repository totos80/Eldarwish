export type WhatsAppOrderItem = {
  name: string;
  quantity: number;
  price: number;
};

export function GenerateWhatsAppOrder(
  items: WhatsAppOrderItem[]
): string {
  const phone = "201553939342";

  const lines = items.map((item, index) => {
    const total = item.quantity * item.price;

    return `${index + 1}. ${item.name} × ${item.quantity} = ${total.toFixed(
      2
    )} ج.م`;
  });

  const grandTotal = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const message = [
    "السلام عليكم، أريد عمل طلب من عطارة الدَرْويش.",
    "",
    "الأصناف:",
    ...lines,
    "",
    `الإجمالي: ${grandTotal.toFixed(2)} ج.م`,
    "",
    "برجاء التواصل معي لتأكيد الطلب وبيانات التوصيل.",
  ].join("\n");

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export default GenerateWhatsAppOrder;
