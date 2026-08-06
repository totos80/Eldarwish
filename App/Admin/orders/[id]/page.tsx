import Link from "next/link";
import {
  ArrowRight,
  User,
  Phone,
  MapPin,
  Package,
  CreditCard,
  Truck,
} from "lucide-react";

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              الطلب #{id}

            </h1>

            <p className="mt-2 text-stone-500">

              تفاصيل الطلب بالكامل.

            </p>

          </div>

          <Link
            href="/admin/orders"
            className="flex items-center gap-2 rounded-xl border bg-white px-5 py-3"
          >

            <ArrowRight size={18} />

            رجوع

          </Link>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="space-y-8 lg:col-span-2">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="mb-6 text-2xl font-bold">

                المنتجات

              </h2>

              <div className="space-y-5">

                {[1,2,3].map((item)=>(
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border p-5"
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-stone-100">

                        <Package />

                      </div>

                      <div>

                        <h3 className="font-bold">

                          منتج رقم {item}

                        </h3>

                        <p className="text-sm text-stone-500">

                          الكمية: 2

                        </p>

                      </div>

                    </div>

                    <span className="font-bold">

                      180 ج.م

                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

          <div className="space-y-8">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="mb-6 text-xl font-bold">

                بيانات العميل

              </h2>

              <div className="space-y-5">

                <div className="flex gap-3">

                  <User />

                  محمد أحمد

                </div>

                <div className="flex gap-3">

                  <Phone />

                  01011193720

                </div>

                <div className="flex gap-3">

                  <MapPin />

                  السويس - فيصل

                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="mb-6 text-xl font-bold">

                معلومات الطلب

              </h2>

              <div className="space-y-5">

                <div className="flex justify-between">

                  <span>طريقة الدفع</span>

                  <span className="flex items-center gap-2">

                    <CreditCard size={18} />

                    عند الاستلام

                  </span>

                </div>

                <div className="flex justify-between">

                  <span>الشحن</span>

                  <span className="flex items-center gap-2">

                    <Truck size={18} />

                    قيد التجهيز

                  </span>

                </div>

                <div className="border-t pt-5">

                  <div className="flex justify-between text-xl font-bold">

                    <span>الإجمالي</span>

                    <span>

                      540 ج.م

                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
