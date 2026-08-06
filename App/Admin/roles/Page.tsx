"use client";

import Link from "next/link";
import {
  Shield,
  Plus,
  Pencil,
  Trash2,
  Users,
  KeyRound,
} from "lucide-react";

const roles = [
  {
    id: 1,
    name: "Administrator",
    users: 1,
    permissions: 48,
    color: "bg-red-100 text-red-700",
  },
  {
    id: 2,
    name: "Manager",
    users: 2,
    permissions: 35,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    name: "Sales",
    users: 4,
    permissions: 18,
    color: "bg-green-100 text-green-700",
  },
  {
    id: 4,
    name: "Inventory",
    users: 2,
    permissions: 14,
    color: "bg-amber-100 text-amber-700",
  },
];

export default function RolesPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              إدارة الصلاحيات

            </h1>

            <p className="mt-2 text-stone-500">

              إنشاء وإدارة أدوار المستخدمين.

            </p>

          </div>

          <Link
            href="/admin/roles/new"
            className="rounded-xl bg-amber-700 px-6 py-3 font-bold text-white hover:bg-amber-800"
          >

            <div className="flex items-center gap-2">

              <Plus size={20} />

              صلاحية جديدة

            </div>

          </Link>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {roles.map((role) => (

            <div
              key={role.id}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >

              <div className="mb-6 flex items-center justify-between">

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${role.color}`}
                >

                  <Shield size={30} />

                </div>

                <span className="rounded-full bg-stone-100 px-4 py-2">

                  #{role.id}

                </span>

              </div>

              <h2 className="text-2xl font-bold">

                {role.name}

              </h2>

              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-3">

                  <Users size={18} />

                  {role.users} مستخدم

                </div>

                <div className="flex items-center gap-3">

                  <KeyRound size={18} />

                  {role.permissions} صلاحية

                </div>

              </div>

              <div className="mt-8 flex gap-3">

                <button className="flex-1 rounded-xl bg-green-100 py-3 font-bold text-green-700">

                  <div className="flex items-center justify-center gap-2">

                    <Pencil size={18} />

                    تعديل

                  </div>

                </button>

                <button className="flex-1 rounded-xl bg-red-100 py-3 font-bold text-red-700">

                  <div className="flex items-center justify-center gap-2">

                    <Trash2 size={18} />

                    حذف

                  </div>

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}
