"use client";

import Link from "next/link";
import { ArrowRight, Save } from "lucide-react";

export default function NewBannerPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              إضافة بنر جديد

            </h1>

            <p className="mt-2 text-stone-500">

              إنشاء بنر جديد لعرضه داخل الموقع.

            </p>

          </div>

          <Link
            href="/admin/banners"
            className="flex items-center gap-2 rounded-xl border bg-white px-5 py-3"
          >

            <ArrowRight size={18} />

            رجوع

          </Link>

        </div>

        <form className="space-y-8">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              بيانات البنر

            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-bold">

                  عنوان البنر

                </label>

                <input
                  type="text"
                  placeholder="مثال: عروض الافتتاح"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  مكان الظهور

                </label>

                <select className="w-full rounded-xl border p-4 outline-none focus:border-amber-700">

                  <option>الصفحة الرئيسية</option>
                  <option>صفحة المنتجات</option>
                  <option>داخل قسم</option>
                  <option>صفحة العروض</option>

                </select>

              </div>

              <div className="md:col-span-2">

                <label className="mb-2 block font-bold">

                  رابط البنر

                </label>

                <input
                  type="text"
                  placeholder="/offers"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div className="md:col-span-2">

                <label className="mb-2 block font-bold">

                  وصف مختصر

                </label>

                <textarea
                  rows={5}
                  placeholder="وصف يظهر داخل البنر..."
                  className="w-full resize-none rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div className="md:col-span-2">

                <label className="mb-2 block font-bold">

                  صورة البنر

                </label>

                <input
                  type="file"
                  className="w-full rounded-xl border border-dashed p-10"
                />

              </div>

              <div className="flex items-center gap-3">

                <input
                  id="active"
                  type="checkbox"
                  defaultChecked
                />

                <label htmlFor="active">

                  تفعيل البنر

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

              حفظ البنر

            </button>

          </div>

        </form>

      </div>

    </main>
  );
}
