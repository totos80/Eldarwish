"use client";

import {
  Save,
  Shield,
  Lock,
  KeyRound,
  Smartphone,
  AlertTriangle,
} from "lucide-react";

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-extrabold">

            إعدادات الأمان

          </h1>

          <p className="mt-2 text-stone-500">

            حماية لوحة التحكم وبيانات المتجر.

          </p>

        </div>

        <form className="space-y-8">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Shield className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                الحماية العامة

              </h2>

            </div>

            <div className="space-y-5">

              <label className="flex items-center justify-between rounded-xl border p-5">

                <span>تفعيل المصادقة الثنائية (2FA)</span>

                <input type="checkbox" />

              </label>

              <label className="flex items-center justify-between rounded-xl border p-5">

                <span>قفل الحساب بعد 5 محاولات فاشلة</span>

                <input type="checkbox" defaultChecked />

              </label>

              <label className="flex items-center justify-between rounded-xl border p-5">

                <span>إجبار المستخدمين على تغيير كلمة المرور كل 90 يومًا</span>

                <input type="checkbox" />

              </label>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Lock className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                إعدادات الجلسة

              </h2>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-bold">

                  مدة انتهاء الجلسة (بالدقائق)

                </label>

                <input
                  type="number"
                  defaultValue="60"
                  className="w-full rounded-xl border p-4"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  الحد الأقصى للأجهزة

                </label>

                <input
                  type="number"
                  defaultValue="3"
                  className="w-full rounded-xl border p-4"
                />

              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <KeyRound className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                مفاتيح API

              </h2>

            </div>

            <textarea
              rows={4}
              placeholder="ضع مفاتيح API هنا..."
              className="w-full resize-none rounded-xl border p-4"
            />

          </div>

          <div className="rounded-3xl bg-amber-50 border border-amber-200 p-6">

            <div className="flex items-start gap-4">

              <AlertTriangle className="text-amber-700" />

              <div>

                <h3 className="font-bold">

                  تنبيه أمني

                </h3>

                <p className="mt-2 text-stone-600">

                  لا تشارك مفاتيح API أو كلمات المرور مع أي شخص، واستخدم كلمات مرور قوية ومختلفة لكل حساب.

                </p>

              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Smartphone className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                الأجهزة الموثوقة

              </h2>

            </div>

            <button
              type="button"
              className="rounded-xl bg-red-100 px-6 py-3 font-bold text-red-700 hover:bg-red-200"
            >
              تسجيل الخروج من جميع الأجهزة
            </button>

          </div>

          <div className="flex justify-end">

            <button
              type="submit"
              className="flex items-center gap-3 rounded-xl bg-amber-700 px-8 py-4 font-bold text-white hover:bg-amber-800"
            >

              <Save size={20} />

              حفظ إعدادات الأمان

            </button>

          </div>

        </form>

      </div>

    </main>
  );
}
