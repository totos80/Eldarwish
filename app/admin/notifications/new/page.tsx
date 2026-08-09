"use client";

import Link from "next/link";
import { ArrowRight, Save, Bell } from "lucide-react";

export default function NewNotificationPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              إرسال إشعار جديد

            </h1>

            <p className="mt-2 text-stone-500">

              أرسل إشعارًا إلى العملاء أو المشتركين.

            </p>

          </div>

          <Link
            href="/admin/notifications"
            className="flex items-center gap-2 rounded-xl border bg-white px-5 py-3"
          >

            <ArrowRight size={18} />

            رجوع

          </Link>

        </div>

        <form className="space-y-8">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              بيانات الإشعار

            </h2>

            <div className="space-y-6">

              <div>

                <label className="mb-2 block font-bold">

                  عنوان الإشعار

                </label>

                <input
                  type="text"
                  placeholder="مثال: خصومات الصيف"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  الجمهور المستهدف

                </label>

                <select className="w-full rounded-xl border p-4 outline-none focus:border-amber-700">

                  <option>جميع العملاء</option>
                  <option>عملاء الجملة</option>
                  <option>العملاء الجدد</option>
                  <option>المشتركين فقط</option>

                </select>

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  نص الإشعار

                </label>

                <textarea
                  rows={8}
                  placeholder="اكتب نص الإشعار..."
                  className="w-full resize-none rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block font-bold">

                    تاريخ الإرسال

                  </label>

                  <input
                    type="date"
                    className="w-full rounded-xl border p-4 outline-none"
                  />

                </div>

                <div>

                  <label className="mb-2 block font-bold">

                    وقت الإرسال

                  </label>

                  <input
                    type="time"
                    className="w-full rounded-xl border p-4 outline-none"
                  />

                </div>

              </div>

              <div className="flex items-center gap-3">

                <input
                  id="sendNow"
                  type="checkbox"
                  defaultChecked
                />

                <label htmlFor="sendNow">

                  إرسال الإشعار فورًا

                </label>

              </div>

            </div>

          </div>

          <div className="flex justify-end">

            <button
              type="submit"
              className="flex items-center gap-3 rounded-xl bg-amber-700 px-8 py-4 font-bold text-white transition hover:bg-amber-800"
            >

              <Bell size={20} />

              إرسال الإشعار

            </button>

          </div>

        </form>

      </div>

    </main>
  );
}
