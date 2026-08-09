"use client";

interface CartTotalsProps {
  subtotal: number;
  shipping: number;
  discount: number;
  tax?: number;
}

export default function CartTotals({
  subtotal,
  shipping,
  discount,
  tax = 0,
}: CartTotalsProps) {

  const total =
    subtotal +
    shipping +
    tax -
    discount;

  return (

    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">

        ملخص الفاتورة

      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">

          <span>

            إجمالي المنتجات

          </span>

          <strong>

            {subtotal.toFixed(2)} ج.م

          </strong>

        </div>

        <div className="flex justify-between">

          <span>

            الشحن

          </span>

          <strong>

            {shipping.toFixed(2)} ج.م

          </strong>

        </div>

        <div className="flex justify-between">

          <span>

            الضريبة

          </span>

          <strong>

            {tax.toFixed(2)} ج.م

          </strong>

        </div>

        <div className="flex justify-between text-green-700">

          <span>

            الخصم

          </span>

          <strong>

            - {discount.toFixed(2)} ج.م

          </strong>

        </div>

      </div>

      <hr className="my-6" />

      <div className="flex justify-between text-2xl font-bold">

        <span>

          الإجمالي

        </span>

        <span className="text-amber-700">

          {total.toFixed(2)} ج.م

        </span>

      </div>

    </div>

  );

}
