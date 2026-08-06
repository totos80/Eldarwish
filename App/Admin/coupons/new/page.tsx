"use client";

import Link from "next/link";
import { ArrowRight, Save } from "lucide-react";

export default function NewCouponPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              إنشاء كوبون جديد

            </h1>

            <p className="mt-2 text-stone-500">

              أضف كوبون خصم جديد للمتجر.

            </p>

          </div>

          <Link
            href="/admin/coupons"
            className="flex items-center gap-2 rounded-xl border bg-white px-5 py-3"
          >

            <ArrowRight size={18} />

            رجوع

          </Link>

        </div>

        <form className="space-y-8">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              بيانات الكوبون

            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-bold">

                  كود الخصم

                </label>

                <input
                  type="text"
                  placeholder="WELCOME10"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  نوع الخصم

                </label>

                <select className="w-full rounded-xl border p-4 outline-none focus:border-amber-700">

                  <option>نسبة مئوية</option>

                  <option>قيمة ثابتة</option>

                </select>

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  قيمة الخصم

                </label>

                <input
                  type="number"
                  placeholder="10"
                  className="w-full rounded-xl border p-4 outline-none"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  الحد الأدنى للطلب

                </label>

                <input
                  type="number"
                  placeholder="0"
                  className="w-full rounded-xl border p-4 outline-none"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  تاريخ البداية

                </label>

                <input
                  type="date"
                  className="w-full rounded-xl border p-4 outline-none"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  تاريخ الانتهاء

                </label>

                <input
                  type="date"
                  className="w-full rounded-xl border p-4 outline-none"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  الحد الأقصى للاستخدام

                </label>

                <input
                  type="number"
                  placeholder="100"
                  className="w-full rounded-xl border p-4 outline-none"
                />

              </div>

              <div className="flex items-center gap-3 pt-10">

                <input
                  id="active"
                  type="checkbox"
                  defaultChecked
                />

                <label htmlFor="active">

                  تفعيل الكوبون

                </label>

              </div>

            </div>

          </div>

          <div className="flex justify-end">

            <button
              type="submit"
              className="flex items-center gap-3 rounded-xl bg-amber-700 px-8 py-4 font-bold text-white transition hover:bg-amber-800"
            >

              <Save size={20} />

              حفظ الكوبون

            </button>

          </div>

        </form>

      </div>

    </main>
  );
}
