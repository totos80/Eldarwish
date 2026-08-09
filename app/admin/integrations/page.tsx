"use client";

import {
  Save,
  Globe,
  MessageCircle,
  CreditCard,
  BarChart3,
  Bell,
  CheckCircle2,
} from "lucide-react";

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-6xl">

        <div className="mb-8">

          <h1 className="text-4xl font-extrabold">

            التكاملات

          </h1>

          <p className="mt-2 text-stone-500">

            ربط المتجر بالخدمات الخارجية.

          </p>

        </div>

        <div className="grid gap-8">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Globe className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                Google Analytics

              </h2>

            </div>

            <input
              placeholder="G-XXXXXXXXXX"
              className="w-full rounded-xl border p-4"
            />

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <BarChart3 className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                Meta Pixel

              </h2>

            </div>

            <input
              placeholder="Meta Pixel ID"
              className="w-full rounded-xl border p-4"
            />

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <MessageCircle className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                WhatsApp Business

              </h2>

            </div>

            <input
              defaultValue="01011193720"
              className="w-full rounded-xl border p-4"
            />

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <CreditCard className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                بوابة الدفع

              </h2>

            </div>

            <select className="w-full rounded-xl border p-4">

              <option>غير متصل</option>
              <option>Paymob</option>
              <option>Fawry Pay</option>
              <option>Stripe</option>

            </select>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Bell className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                الإشعارات

              </h2>

            </div>

            <div className="space-y-4">

              <label className="flex items-center justify-between rounded-xl border p-4">

                <span>إشعار عند وصول طلب جديد</span>

                <CheckCircle2 className="text-green-600" />

              </label>

              <label className="flex items-center justify-between rounded-xl border p-4">

                <span>إشعار عند انخفاض المخزون</span>

                <CheckCircle2 className="text-green-600" />

              </label>

              <label className="flex items-center justify-between rounded-xl border p-4">

                <span>إشعار عند تسجيل عميل جديد</span>

                <CheckCircle2 className="text-green-600" />

              </label>

            </div>

          </div>

        </div>

        <div className="mt-8 flex justify-end">

          <button
            className="flex items-center gap-3 rounded-xl bg-amber-700 px-8 py-4 font-bold text-white hover:bg-amber-800"
          >

            <Save size={20} />

            حفظ التكاملات

          </button>

        </div>

      </div>

    </main>
  );
}
