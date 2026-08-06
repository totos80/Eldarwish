"use client";

import {
  Database,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  HardDrive,
  Save,
} from "lucide-react";

export default function DatabasePage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-6xl">

        <div className="mb-8">

          <h1 className="text-4xl font-extrabold">

            إدارة قاعدة البيانات

          </h1>

          <p className="mt-2 text-stone-500">

            مراقبة وصيانة قاعدة بيانات المتجر.

          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <Database
              className="mb-4 text-amber-700"
              size={34}
            />

            <p className="text-stone-500">

              الجداول

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              18

            </h2>

          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <HardDrive
              className="mb-4 text-blue-700"
              size={34}
            />

            <p className="text-stone-500">

              حجم القاعدة

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              148 MB

            </h2>

          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <RefreshCw
              className="mb-4 text-green-700"
              size={34}
            />

            <p className="text-stone-500">

              آخر مزامنة

            </p>

            <h2 className="mt-2 text-xl font-bold">

              منذ 5 دقائق

            </h2>

          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <Save
              className="mb-4 text-purple-700"
              size={34}
            />

            <p className="text-stone-500">

              آخر نسخة

            </p>

            <h2 className="mt-2 text-xl font-bold">

              اليوم

            </h2>

          </div>

        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="mb-8 text-2xl font-bold">

            أدوات قاعدة البيانات

          </h2>

          <div className="grid gap-5 md:grid-cols-2">

            <button className="flex items-center justify-center gap-3 rounded-2xl bg-green-700 p-5 font-bold text-white hover:bg-green-800">

              <RefreshCw size={22} />

              تحسين قاعدة البيانات

            </button>

            <button className="flex items-center justify-center gap-3 rounded-2xl bg-blue-700 p-5 font-bold text-white hover:bg-blue-800">

              <Download size={22} />

              تصدير البيانات

            </button>

            <button className="flex items-center justify-center gap-3 rounded-2xl bg-amber-700 p-5 font-bold text-white hover:bg-amber-800">

              <Upload size={22} />

              استيراد البيانات

            </button>

            <button className="flex items-center justify-center gap-3 rounded-2xl bg-red-700 p-5 font-bold text-white hover:bg-red-800">

              <Trash2 size={22} />

              حذف البيانات المؤقتة

            </button>

          </div>

        </div>

      </div>

    </main>
  );
}
