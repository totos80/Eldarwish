"use client";

import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Percent,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const coupons = [
  {
    id: 1,
    code: "WELCOME10",
    discount: "10%",
    expiry: "31/12/2026",
    status: "نشط",
  },
  {
    id: 2,
    code: "HERBS20",
    discount: "20%",
    expiry: "15/09/2026",
    status: "نشط",
  },
  {
    id: 3,
    code: "SUMMER15",
    discount: "15%",
    expiry: "01/08/2026",
    status: "منتهي",
  },
];

export default function CouponsPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              كوبونات الخصم

            </h1>

            <p className="mt-2 text-stone-500">

              إنشاء وإدارة أكواد الخصم.

            </p>

          </div>

          <Link
            href="/admin/coupons/new"
            className="flex items-center gap-2 rounded-xl bg-amber-700 px-6 py-3 font-bold text-white"
          >

            <Plus size={20} />

            كوبون جديد

          </Link>

        </div>

        <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3 rounded-xl border px-4 py-3">

            <Search size={20} />

            <input
              className="w-full outline-none"
              placeholder="ابحث عن كوبون..."
            />

          </div>

        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

          <table className="w-full">

            <thead className="bg-stone-100">

              <tr>

                <th className="p-5 text-right">

                  الكود

                </th>

                <th className="p-5">

                  الخصم

                </th>

                <th className="p-5">

                  الانتهاء

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

              {coupons.map((coupon) => (

                <tr
                  key={coupon.id}
                  className="border-t"
                >

                  <td className="p-5 font-bold">

                    {coupon.code}

                  </td>

                  <td className="p-5 text-center">

                    <div className="flex items-center justify-center gap-2">

                      <Percent size={16} />

                      {coupon.discount}

                    </div>

                  </td>

                  <td className="p-5 text-center">

                    <div className="flex items-center justify-center gap-2">

                      <Calendar size={16} />

                      {coupon.expiry}

                    </div>

                  </td>

                  <td className="p-5 text-center">

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-bold ${
                        coupon.status === "نشط"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >

                      {coupon.status}

                    </span>

                  </td>

                  <td className="p-5">

                    <div className="flex justify-center gap-3">

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
