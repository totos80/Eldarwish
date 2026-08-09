"use client";

import Link from "next/link";
import { ArrowRight, Save } from "lucide-react";

export default function NewCategoryPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-4xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              إضافة قسم جديد

            </h1>

            <p className="mt-2 text-stone-500">

              إنشاء قسم جديد داخل المتجر.

            </p>

          </div>

          <Link
            href="/admin/categories"
            className="flex items-center gap-2 rounded-xl border bg-white px-5 py-3"
          >

            <ArrowRight size={18} />

            رجوع

          </Link>

        </div>

        <form className="space-y-8">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              بيانات القسم

            </h2>

            <div className="space-y-6">

              <div>

                <label className="mb-2 block font-bold">

                  اسم القسم

                </label>

                <input
                  type="text"
                  placeholder="مثال: الأعشاب"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  رابط القسم (Slug)

                </label>

                <input
                  type="text"
                  placeholder="herbs"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  وصف القسم

                </label>

                <textarea
                  rows={6}
                  placeholder="اكتب وصف القسم..."
                  className="w-full resize-none rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  صورة القسم

                </label>

                <input
                  type="file"
                  className="w-full rounded-xl border border-dashed p-8"
                />

              </div>

              <div className="flex items-center gap-3">

                <input
                  id="active"
                  type="checkbox"
                  defaultChecked
                />

                <label htmlFor="active">

                  تفعيل القسم وإظهاره في الموقع

                </label>

              </div>

            </div>

          </div>

          <div className="flex justify-end">

            <button
              type="submit"
              className="flex items-center gap-3 rounded-xl bg-amber-700 px-8 py-4 font-bold text-white hover:bg-amber-800"
            >

              <Save size={20} />

              حفظ القسم

            </button>

          </div>

        </form>

      </div>

    </main>
  );
}
