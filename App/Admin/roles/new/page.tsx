"use client";

import Link from "next/link";
import { ArrowRight, Save } from "lucide-react";

const permissions = [
  "إدارة المنتجات",
  "إدارة الأقسام",
  "إدارة الطلبات",
  "إدارة العملاء",
  "إدارة المخزون",
  "إدارة الكوبونات",
  "إدارة البنرات",
  "إدارة الرسائل",
  "إدارة التقييمات",
  "إدارة المستخدمين",
  "إدارة الصلاحيات",
  "إدارة التقارير",
  "إعدادات الموقع",
  "إعدادات الدفع",
  "إعدادات الشحن",
  "إعدادات SEO",
];

export default function NewRolePage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              إنشاء صلاحية جديدة

            </h1>

            <p className="mt-2 text-stone-500">

              إنشاء دور جديد وتحديد الصلاحيات الخاصة به.

            </p>

          </div>

          <Link
            href="/admin/roles"
            className="flex items-center gap-2 rounded-xl border bg-white px-5 py-3"
          >

            <ArrowRight size={18} />

            رجوع

          </Link>

        </div>

        <form className="space-y-8">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              بيانات الدور

            </h2>

            <div className="space-y-6">

              <div>

                <label className="mb-2 block font-bold">

                  اسم الدور

                </label>

                <input
                  type="text"
                  placeholder="مثال: مدير المبيعات"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  وصف الدور

                </label>

                <textarea
                  rows={4}
                  placeholder="وصف مختصر للدور..."
                  className="w-full resize-none rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-8 text-2xl font-bold">

              الصلاحيات

            </h2>

            <div className="grid gap-4 md:grid-cols-2">

              {permissions.map((permission) => (

                <label
                  key={permission}
                  className="flex items-center gap-3 rounded-xl border p-4 hover:bg-stone-50"
                >

                  <input
                    type="checkbox"
                  />

                  {permission}

                </label>

              ))}

            </div>

          </div>

          <div className="flex justify-end">

            <button
              type="submit"
              className="flex items-center gap-3 rounded-xl bg-amber-700 px-8 py-4 font-bold text-white hover:bg-amber-800"
            >

              <Save size={20} />

              حفظ الدور

            </button>

          </div>

        </form>

      </div>

    </main>
  );
}
