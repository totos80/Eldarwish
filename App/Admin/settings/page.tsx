"use client";

import { Save } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-extrabold">

            إعدادات المتجر

          </h1>

          <p className="mt-2 text-stone-500">

            تعديل بيانات متجر عطارة الدرويش.

          </p>

        </div>

        <form className="space-y-8">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              البيانات الأساسية

            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-bold">

                  اسم المتجر

                </label>

                <input
                  defaultValue="عطارة الدرويش"
                  className="w-full rounded-xl border p-4 outline-none"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  رقم الهاتف

                </label>

                <input
                  defaultValue="01011193720"
                  className="w-full rounded-xl border p-4 outline-none"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  البريد الإلكتروني

                </label>

                <input
                  defaultValue="info@eldarwish.co"
                  className="w-full rounded-xl border p-4 outline-none"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  رابط واتساب

                </label>

                <input
                  defaultValue="https://wa.me/201011193720"
                  className="w-full rounded-xl border p-4 outline-none"
                />

              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              العنوان

            </h2>

            <textarea
              rows={5}
              defaultValue="السويس - فيصل - طريق ناصر"
              className="w-full resize-none rounded-xl border p-4 outline-none"
            />

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              روابط التواصل

            </h2>

            <div className="space-y-5">

              <input
                placeholder="Facebook"
                className="w-full rounded-xl border p-4"
              />

              <input
                defaultValue="https://www.tiktok.com/@eldarwishelattar?_r=1&_t=ZS-98cb6SN2lcn"
                className="w-full rounded-xl border p-4"
              />

              <input
                placeholder="Instagram"
                className="w-full rounded-xl border p-4"
              />

            </div>

          </div>

          <div className="flex justify-end">

            <button
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
