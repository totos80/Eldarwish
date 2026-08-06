"use client";

import { Save, CreditCard, Landmark, Wallet } from "lucide-react";

export default function PaymentSettingsPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-extrabold">

            إعدادات الدفع

          </h1>

          <p className="mt-2 text-stone-500">

            إدارة وسائل الدفع الخاصة بمتجر عطارة الدرويش.

          </p>

        </div>

        <form className="space-y-8">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              وسائل الدفع

            </h2>

            <div className="space-y-5">

              <label className="flex items-center justify-between rounded-2xl border p-5">

                <div className="flex items-center gap-4">

                  <CreditCard
                    className="text-amber-700"
                    size={26}
                  />

                  <span className="font-bold">

                    الدفع عند الاستلام

                  </span>

                </div>

                <input
                  type="checkbox"
                  defaultChecked
                />

              </label>

              <label className="flex items-center justify-between rounded-2xl border p-5">

                <div className="flex items-center gap-4">

                  <Wallet
                    className="text-amber-700"
                    size={26}
                  />

                  <span className="font-bold">

                    Vodafone Cash

                  </span>

                </div>

                <input
                  type="checkbox"
                  defaultChecked
                />

              </label>

              <label className="flex items-center justify-between rounded-2xl border p-5">

                <div className="flex items-center gap-4">

                  <Landmark
                    className="text-amber-700"
                    size={26}
                  />

                  <span className="font-bold">

                    التحويل البنكي

                  </span>

                </div>

                <input
                  type="checkbox"
                />

              </label>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              بيانات الدفع

            </h2>

            <div className="space-y-6">

              <div>

                <label className="mb-2 block font-bold">

                  رقم Vodafone Cash

                </label>

                <input
                  defaultValue="01011193720"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  اسم صاحب الحساب البنكي

                </label>

                <input
                  placeholder="اسم صاحب الحساب"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  رقم الحساب / IBAN

                </label>

                <textarea
                  rows={4}
                  placeholder="بيانات الحساب البنكي..."
                  className="w-full resize-none rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

            </div>

          </div>

          <div className="flex justify-end">

            <button
              type="submit"
              className="flex items-center gap-3 rounded-xl bg-amber-700 px-8 py-4 font-bold text-white hover:bg-amber-800"
            >

              <Save size={20} />

              حفظ إعدادات الدفع

            </button>

          </div>

        </form>

      </div>

    </main>
  );
}
