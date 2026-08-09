"use client";

import { Save, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NewProductPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              إضافة منتج جديد

            </h1>

            <p className="mt-2 text-stone-500">

              أضف منتجًا جديدًا إلى متجر عطارة الدرويش.

            </p>

          </div>

          <Link
            href="/admin/products"
            className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3 hover:bg-stone-50"
          >

            <ArrowRight size={18} />

            رجوع

          </Link>

        </div>

        <form className="space-y-8">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              البيانات الأساسية

            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-bold">

                  اسم المنتج

                </label>

                <input
                  type="text"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                  placeholder="مثال: قرفة عيدان"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  القسم

                </label>

                <select className="w-full rounded-xl border p-4 outline-none focus:border-amber-700">

                  <option>اختر القسم</option>
                  <option>الأعشاب</option>
                  <option>التوابل</option>
                  <option>العسل</option>
                  <option>التمور</option>
                  <option>القهوة</option>
                  <option>الزيوت</option>

                </select>

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  السعر

                </label>

                <input
                  type="number"
                  className="w-full rounded-xl border p-4 outline-none"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  الكمية

                </label>

                <input
                  type="number"
                  className="w-full rounded-xl border p-4 outline-none"
                />

              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              وصف المنتج

            </h2>

            <textarea
              rows={8}
              className="w-full rounded-xl border p-4 outline-none resize-none"
              placeholder="اكتب وصفًا تفصيليًا للمنتج..."
            />

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              صورة المنتج

            </h2>

            <input
              type="file"
              className="w-full rounded-xl border border-dashed p-10"
            />

          </div>

          <div className="flex justify-end">

            <button
              type="submit"
              className="flex items-center gap-3 rounded-xl bg-amber-700 px-8 py-4 font-bold text-white transition hover:bg-amber-800"
            >

              <Save size={20} />

              حفظ المنتج

            </button>

          </div>

        </form>

      </div>

    </main>
  );
}
