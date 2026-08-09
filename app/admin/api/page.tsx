"use client";

import {
  KeyRound,
  Copy,
  RefreshCw,
  Shield,
  Globe,
  Save,
} from "lucide-react";

export default function ApiSettingsPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-extrabold">

            إعدادات API

          </h1>

          <p className="mt-2 text-stone-500">

            إدارة مفاتيح API وربط الخدمات الخارجية.

          </p>

        </div>

        <div className="space-y-8">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <KeyRound className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                API Key

              </h2>

            </div>

            <div className="flex gap-3">

              <input
                readOnly
                value="sk_live_xxxxxxxxxxxxxxxxxxxxxxxxx"
                className="flex-1 rounded-xl border bg-stone-50 p-4"
              />

              <button className="rounded-xl bg-blue-100 px-5 text-blue-700">

                <Copy size={20} />

              </button>

              <button className="rounded-xl bg-green-100 px-5 text-green-700">

                <RefreshCw size={20} />

              </button>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Globe className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                Webhook URL

              </h2>

            </div>

            <input
              defaultValue="https://eldarwish.co/api/webhooks"
              className="w-full rounded-xl border p-4"
            />

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Shield className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                إعدادات الأمان

              </h2>

            </div>

            <div className="space-y-4">

              <label className="flex items-center justify-between rounded-xl border p-4">

                <span>تفعيل Rate Limit</span>

                <input type="checkbox" defaultChecked />

              </label>

              <label className="flex items-center justify-between rounded-xl border p-4">

                <span>السماح بطلبات خارجية</span>

                <input type="checkbox" />

              </label>

              <label className="flex items-center justify-between rounded-xl border p-4">

                <span>تسجيل جميع طلبات API</span>

                <input type="checkbox" defaultChecked />

              </label>

            </div>

          </div>

          <div className="flex justify-end">

            <button className="flex items-center gap-3 rounded-xl bg-amber-700 px-8 py-4 font-bold text-white hover:bg-amber-800">

              <Save size={20} />

              حفظ الإعدادات

            </button>

          </div>

        </div>

      </div>

    </main>
  );
}
