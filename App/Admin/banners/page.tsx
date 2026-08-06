"use client";

import Link from "next/link";
import {
  Image as ImageIcon,
  Plus,
  Pencil,
  Trash2,
  Eye,
} from "lucide-react";

const banners = [
  {
    id: 1,
    title: "عرض الافتتاح",
    location: "الصفحة الرئيسية",
    status: "نشط",
  },
  {
    id: 2,
    title: "خصومات التوابل",
    location: "قسم التوابل",
    status: "نشط",
  },
  {
    id: 3,
    title: "عروض العسل",
    location: "صفحة المنتجات",
    status: "غير نشط",
  },
];

export default function AdminBannersPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              إدارة البنرات

            </h1>

            <p className="mt-2 text-stone-500">

              إدارة صور العروض والإعلانات بالموقع.

            </p>

          </div>

          <Link
            href="/admin/banners/new"
            className="flex items-center gap-2 rounded-xl bg-amber-700 px-6 py-3 font-bold text-white hover:bg-amber-800"
          >

            <Plus size={20} />

            إضافة بنر

          </Link>

        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

          <table className="w-full">

            <thead className="bg-stone-100">

              <tr>

                <th className="p-5 text-right">

                  البنر

                </th>

                <th className="p-5">

                  مكان الظهور

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

              {banners.map((banner) => (

                <tr
                  key={banner.id}
                  className="border-t"
                >

                  <td className="p-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-stone-100">

                        <ImageIcon size={28} />

                      </div>

                      <span className="font-bold">

                        {banner.title}

                      </span>

                    </div>

                  </td>

                  <td className="p-5 text-center">

                    {banner.location}

                  </td>

                  <td className="p-5 text-center">

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-bold ${
                        banner.status === "نشط"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {banner.status}
                    </span>

                  </td>

                  <td className="p-5">

                    <div className="flex justify-center gap-3">

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
