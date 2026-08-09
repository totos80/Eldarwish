import Link from "next/link";
import {
  ArrowRight,
  User,
  Phone,
  Mail,
  MapPin,
  ShoppingBag,
  Wallet,
  Calendar,
} from "lucide-react";

export default async function CustomerDetailsPage({
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

              بيانات العميل

            </h1>

            <p className="mt-2 text-stone-500">

              رقم العميل: #{id}

            </p>

          </div>

          <Link
            href="/admin/customers"
            className="flex items-center gap-2 rounded-xl border bg-white px-5 py-3"
          >

            <ArrowRight size={18} />

            رجوع

          </Link>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="space-y-8">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <div className="mb-8 flex justify-center">

                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-100">

                  <User
                    size={42}
                    className="text-amber-700"
                  />

                </div>

              </div>

              <h2 className="text-center text-2xl font-bold">

                محمد أحمد

              </h2>

              <div className="mt-8 space-y-5">

                <div className="flex items-center gap-3">

                  <Phone size={18} />

                  01011193720

                </div>

                <div className="flex items-center gap-3">

                  <Mail size={18} />

                  mohamed@email.com

                </div>

                <div className="flex items-center gap-3">

                  <MapPin size={18} />

                  السويس - فيصل

                </div>

                <div className="flex items-center gap-3">

                  <Calendar size={18} />

                  عضو منذ يناير 2026

                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="mb-6 text-xl font-bold">

                الإحصائيات

              </h3>

              <div className="space-y-5">

                <div className="flex justify-between">

                  <span>عدد الطلبات</span>

                  <strong>8</strong>

                </div>

                <div className="flex justify-between">

                  <span>إجمالي المشتريات</span>

                  <strong>3250 ج.م</strong>

                </div>

                <div className="flex justify-between">

                  <span>آخر طلب</span>

                  <strong>منذ يومين</strong>

                </div>

              </div>

            </div>

          </div>

          <div className="lg:col-span-2">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="mb-8 text-2xl font-bold">

                آخر الطلبات

              </h2>

              <div className="space-y-5">

                {[1,2,3,4].map((order) => (

                  <div
                    key={order}
                    className="flex items-center justify-between rounded-2xl border p-5"
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100">

                        <ShoppingBag
                          className="text-amber-700"
                        />

                      </div>

                      <div>

                        <h3 className="font-bold">

                          الطلب #{1000 + order}

                        </h3>

                        <p className="text-sm text-stone-500">

                          12 أغسطس 2026

                        </p>

                      </div>

                    </div>

                    <div className="flex items-center gap-2 font-bold">

                      <Wallet size={18} />

                      {order * 250} ج.م

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
