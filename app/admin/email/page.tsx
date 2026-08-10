"use client";

import {
  Mail,
  Save,
  Send,
  Server,
} from "lucide-react";

export default function EmailSettingsPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-extrabold">

            إعدادات البريد الإلكتروني

          </h1>

          <p className="mt-2 text-stone-500">

            إعداد SMTP ورسائل المتجر.

          </p>

        </div>

        <form className="space-y-8">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Server className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                إعدادات SMTP

              </h2>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-bold">

                  SMTP Host

                </label>

                <input
                  placeholder="smtp.example.com"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  SMTP Port

                </label>

                <input
                  placeholder="587"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  البريد الإلكتروني

                </label>

                <input
                  placeholder="contact@eldarwish.co"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  كلمة المرور

                </label>

                <input
                  type="password"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Mail className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                إعدادات الرسائل

              </h2>

            </div>

            <div className="space-y-6">

              <div>

                <label className="mb-2 block font-bold">

                  اسم المرسل

                </label>

                <input
                  defaultValue="عطارة الدرويش"
                  className="w-full rounded-xl border p-4"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  بريد الرد

                </label>

                <input
                  defaultValue="contact@eldarwish.co"
                  className="w-full rounded-xl border p-4"
                />

              </div>

            </div>

          </div>

          <div className="flex justify-between">

            <button
              type="button"
              className="flex items-center gap-3 rounded-xl bg-blue-700 px-8 py-4 font-bold text-white hover:bg-blue-800"
            >

              <Send size={20} />

              إرسال رسالة اختبار

            </button>

            <button
              type="submit"
              className="flex items-center gap-3 rounded-xl bg-amber-700 px-8 py-4 font-bold text-white hover:bg-amber-800"
            >

              <Save size={20} />

              حفظ الإعدادات

            </button>

          </div>

        </form>

      </div>

    </main>
  );
}
