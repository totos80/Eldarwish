"use client";

import Link from "next/link";
import {
  Plus,
  Search,
  User,
  Shield,
  Pencil,
  Trash2,
} from "lucide-react";

const users = [
  {
    id: 1,
    name: "مدير النظام",
    email: "admin@eldarwish.co",
    role: "Administrator",
    status: "نشط",
  },
  {
    id: 2,
    name: "موظف المبيعات",
    email: "sales@eldarwish.co",
    role: "Sales",
    status: "نشط",
  },
  {
    id: 3,
    name: "مسؤول المخزون",
    email: "stock@eldarwish.co",
    role: "Inventory",
    status: "موقوف",
  },
];

export default function UsersPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold">إدارة المستخدمين</h1>
            <p className="mt-2 text-stone-500">إدارة حسابات لوحة التحكم والصلاحيات.</p>
          </div>
          <Link
            href="/admin/users/new"
            className="flex items-center gap-2 rounded-xl bg-amber-700 px-6 py-3 font-bold text-white hover:bg-amber-800"
          >
            <Plus size={20} />
            مستخدم جديد
          </Link>
        </div>

        <div className="mb-8 rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3 rounded-xl border px-4 py-3">
            <Search size={20} />
            <input
              className="w-full outline-none"
              placeholder="ابحث عن مستخدم..."
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <table className="w-full">
            <thead className="bg-stone-100">
              <tr>
                <th className="p-5 text-right">المستخدم</th>
                <th className="p-5 text-right">البريد الإلكتروني</th>
                <th className="p-5 text-center">الصلاحية</th>
                <th className="p-5 text-center">الحالة</th>
                <th className="p-5 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                        <User size={22} className="text-amber-700" />
                      </div>
                      <span className="font-bold">{user.name}</span>
                    </div>
                  </td>
                  <td className="p-5 text-right">{user.email}</td>
                  <td className="p-5 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                      <Shield size={16} />
                      {user.role}
                    </div>
                  </td>
                  <td className="p-5 text-center">
                    <span className={`rounded-full px-4 py-2 text-sm font-bold ${user.status === "نشط" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-5">
                    <div className="flex justify-center gap-2">
                      <button className="rounded-lg bg-green-100 p-2 text-green-700 hover:bg-green-200">
                        <Pencil size={18} />
                      </button>
                      <button className="rounded-lg bg-red-100 p-2 text-red-700 hover:bg-red-200">
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
