"use client";

import {
  Bell,
  Plus,
  Search,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import Link from "next/link";

const notifications = [
  {
    id: 1,
    title: "خصومات الصيف",
    audience: "جميع العملاء",
    date: "06/08/2026",
    status: "تم الإرسال",
  },
  {
    id: 2,
    title: "وصول منتجات جديدة",
    audience: "المشتركين",
    date: "05/08/2026",
    status: "مجدول",
  },
  {
    id: 3,
    title: "كوبون خصم 15%",
    audience: "عملاء الجملة",
    date: "03/08/2026",
    status: "تم الإرسال",
  },
];

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              الإشعارات

            </h1>

            <p className="mt-2 text-stone-500">

              إرسال وإدارة إشعارات العملاء.

            </p>

          </div>

          <Link
            href="/admin/notifications/new"
            className="flex items-center gap-2 rounded-xl bg-amber-700 px-6 py-3 font-bold text-white hover:bg-amber-800"
          >

            <Plus size={20} />

            إشعار جديد

          </Link>

        </div>

        <div className="mb-8 rounded-3xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3 rounded-xl border px-4 py-3">

            <Search size={20} />

            <input
              className="w-full outline-none"
              placeholder="ابحث عن إشعار..."
            />

          </div>

        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

          <table className="w-full">

            <thead className="bg-stone-100">

              <tr>

                <th className="p-5 text-right">

                  العنوان

                </th>

                <th className="p-5">

                  الجمهور

                </th>

                <th className="p-5">

                  التاريخ

                </th>

                <th className="p-5">

                  الحالة

                </th>

                <th className="p-5">

                  الإجراءات

                </th>

              </tr>

            </thead>

            <tbody>

              {notifications.map((item) => (

                <tr
                  key={item.id}
                  className="border-t"
                >

                  <td className="p-5">

                    <div className="flex items-center gap-3">

                      <Bell
                        size={18}
                        className="text-amber-700"
                      />

                      <span className="font-bold">

                        {item.title}

                      </span>

                    </div>

                  </td>

                  <td className="p-5 text-center">

                    {item.audience}

                  </td>

                  <td className="p-5 text-center">

                    {item.date}

                  </td>

                  <td className="p-5 text-center">

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-bold ${
                        item.status === "تم الإرسال"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >

                      {item.status}

                    </span>

                  </td>

                  <td className="p-5">

                    <div className="flex justify-center gap-2">

                      <button className="rounded-lg bg-blue-100 p-2 text-blue-700">

                        <Eye size={18} />

                      </button>

                      <button className="rounded-lg bg-green-100 p-2 text-green-700">

                        <Pencil size={18} />

                      </button>

                      <button className="rounded-lg bg-red-100 p-2 text-red-700">

                        <Trash2 size={18} />

                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}
