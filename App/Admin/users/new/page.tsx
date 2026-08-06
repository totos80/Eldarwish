"use client";

import Link from "next/link";
import { ArrowRight, Save } from "lucide-react";

export default function NewUserPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              إضافة مستخدم جديد

            </h1>

            <p className="mt-2 text-stone-500">

              إنشاء حساب جديد للوصول إلى لوحة التحكم.

            </p>

          </div>

          <Link
            href="/admin/users"
            className="flex items-center gap-2 rounded-xl border bg-white px-5 py-3"
          >

            <ArrowRight size={18} />

            رجوع

          </Link>

        </div>

        <form className="space-y-8">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              بيانات المستخدم

            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-bold">

                  الاسم

                </label>

                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  البريد الإلكتروني

                </label>

                <input
                  type="email"
                  placeholder="name@example.com"
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

              <div>

                <label className="mb-2 block font-bold">

                  تأكيد كلمة المرور

                </label>

                <input
                  type="password"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  الصلاحية

                </label>

                <select className="w-full rounded-xl border p-4 outline-none focus:border-amber-700">

                  <option>Administrator</option>
                  <option>Manager</option>
                  <option>Sales</option>
                  <option>Inventory</option>
                  <option>Editor</option>

                </select>

              </div>

              <div className="flex items-center gap-3 pt-10">

                <input
                  id="active"
                  type="checkbox"
                  defaultChecked
                />

                <label htmlFor="active">

                  الحساب مفعل

                </label>

              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              الصلاحيات

            </h2>

            <div className="grid gap-4 md:grid-cols-2">

              {[
                "إدارة المنتجات",
                "إدارة الطلبات",
                "إدارة العملاء",
                "إدارة الأقسام",
                "إدارة المخزون",
                "إدارة الكوبونات",
                "إدارة التقارير",
                "إعدادات المتجر",
              ].map((permission) => (

                <label
                  key={permission}
                  className="flex items-center gap-3 rounded-xl border p-4"
                >

                  <input
                    type="checkbox"
                    defaultChecked
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

              إنشاء المستخدم

            </button>

          </div>

        </form>

      </div>

    </main>
  );
}
