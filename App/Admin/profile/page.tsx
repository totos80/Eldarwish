"use client";

import { Save, Camera } from "lucide-react";

export default function AdminProfilePage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-extrabold">

            الملف الشخصي

          </h1>

          <p className="mt-2 text-stone-500">

            تعديل بيانات حساب مدير المتجر.

          </p>

        </div>

        <form className="space-y-8">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-8 flex flex-col items-center">

              <div className="relative">

                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-amber-100 text-5xl font-bold text-amber-700">

                  A

                </div>

                <button
                  type="button"
                  className="absolute bottom-2 right-2 rounded-full bg-amber-700 p-3 text-white"
                >

                  <Camera size={18} />

                </button>

              </div>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-bold">

                  الاسم

                </label>

                <input
                  defaultValue="مدير النظام"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  البريد الإلكتروني

                </label>

                <input
                  defaultValue="admin@eldarwish.co"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  رقم الهاتف

                </label>

                <input
                  defaultValue="01011193720"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  اسم المستخدم

                </label>

                <input
                  defaultValue="admin"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              تغيير كلمة المرور

            </h2>

            <div className="grid gap-6">

              <input
                type="password"
                placeholder="كلمة المرور الحالية"
                className="rounded-xl border p-4 outline-none focus:border-amber-700"
              />

              <input
                type="password"
                placeholder="كلمة المرور الجديدة"
                className="rounded-xl border p-4 outline-none focus:border-amber-700"
              />

              <input
                type="password"
                placeholder="تأكيد كلمة المرور الجديدة"
                className="rounded-xl border p-4 outline-none focus:border-amber-700"
              />

            </div>

          </div>

          <div className="flex justify-end">

            <button
              type="submit"
              className="flex items-center gap-3 rounded-xl bg-amber-700 px-8 py-4 font-bold text-white hover:bg-amber-800"
            >

              <Save size={20} />

              حفظ التغييرات

            </button>

          </div>

        </form>

      </div>

    </main>
  );
}
