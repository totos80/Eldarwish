"use client";

import { Save, Palette, ImageIcon, Type, Monitor } from "lucide-react";

export default function AppearancePage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-extrabold">

            تخصيص المظهر

          </h1>

          <p className="mt-2 text-stone-500">

            التحكم في هوية وتصميم متجر عطارة الدرويش.

          </p>

        </div>

        <form className="space-y-8">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Palette className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                الألوان

              </h2>

            </div>

            <div className="grid gap-6 md:grid-cols-3">

              <div>

                <label className="mb-2 block font-bold">

                  اللون الأساسي

                </label>

                <input
                  type="color"
                  defaultValue="#a16207"
                  className="h-14 w-full rounded-xl border"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  اللون الثانوي

                </label>

                <input
                  type="color"
                  defaultValue="#f5f5f4"
                  className="h-14 w-full rounded-xl border"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  لون الأزرار

                </label>

                <input
                  type="color"
                  defaultValue="#b45309"
                  className="h-14 w-full rounded-xl border"
                />

              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Type className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                الخطوط

              </h2>

            </div>

            <select className="w-full rounded-xl border p-4">

              <option>Cairo</option>
              <option>Tajawal</option>
              <option>Alexandria</option>
              <option>IBM Plex Sans Arabic</option>

            </select>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <ImageIcon className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                شعار الموقع

              </h2>

            </div>

            <input
              type="file"
              className="w-full rounded-xl border border-dashed p-8"
            />

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Monitor className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                إعدادات العرض

              </h2>

            </div>

            <div className="space-y-4">

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  defaultChecked
                />

                تفعيل الرسوم المتحركة

              </label>

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  defaultChecked
                />

                تفعيل الوضع المتجاوب

              </label>

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  defaultChecked
                />

                تحميل الصور بشكل Lazy Loading

              </label>

            </div>

          </div>

          <div className="flex justify-end">

            <button
              type="submit"
              className="flex items-center gap-3 rounded-xl bg-amber-700 px-8 py-4 font-bold text-white hover:bg-amber-800"
            >

              <Save size={20} />

              حفظ إعدادات المظهر

            </button>

          </div>

        </form>

      </div>

    </main>
  );
}
