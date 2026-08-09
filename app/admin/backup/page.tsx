"use client";

import {
  Database,
  Download,
  Upload,
  RefreshCw,
  Clock3,
  HardDrive,
} from "lucide-react";

const backups = [
  {
    id: 1,
    name: "backup-2026-08-06.sql",
    size: "18.2 MB",
    date: "06/08/2026 - 11:30",
  },
  {
    id: 2,
    name: "backup-2026-08-05.sql",
    size: "17.9 MB",
    date: "05/08/2026 - 11:30",
  },
  {
    id: 3,
    name: "backup-2026-08-04.sql",
    size: "17.5 MB",
    date: "04/08/2026 - 11:30",
  },
];

export default function BackupPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10">

          <h1 className="text-4xl font-extrabold">

            النسخ الاحتياطي

          </h1>

          <p className="mt-2 text-stone-500">

            إدارة النسخ الاحتياطية واستعادة البيانات.

          </p>

        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-3">

          <button className="flex items-center justify-center gap-3 rounded-3xl bg-green-700 p-6 font-bold text-white hover:bg-green-800">

            <Database size={24} />

            إنشاء نسخة احتياطية

          </button>

          <button className="flex items-center justify-center gap-3 rounded-3xl bg-blue-700 p-6 font-bold text-white hover:bg-blue-800">

            <Upload size={24} />

            استعادة نسخة

          </button>

          <button className="flex items-center justify-center gap-3 rounded-3xl bg-amber-700 p-6 font-bold text-white hover:bg-amber-800">

            <RefreshCw size={24} />

            مزامنة البيانات

          </button>

        </div>

        <div className="rounded-3xl bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">

              النسخ المتوفرة

            </h2>

          </div>

          <div className="divide-y">

            {backups.map((backup) => (

              <div
                key={backup.id}
                className="flex items-center justify-between p-6 hover:bg-stone-50"
              >

                <div className="flex items-center gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100">

                    <Database
                      className="text-amber-700"
                      size={26}
                    />

                  </div>

                  <div>

                    <h3 className="font-bold">

                      {backup.name}

                    </h3>

                    <div className="mt-2 flex items-center gap-5 text-sm text-stone-500">

                      <span className="flex items-center gap-2">

                        <HardDrive size={16} />

                        {backup.size}

                      </span>

                      <span className="flex items-center gap-2">

                        <Clock3 size={16} />

                        {backup.date}

                      </span>

                    </div>

                  </div>

                </div>

                <button className="flex items-center gap-2 rounded-xl bg-blue-100 px-5 py-3 font-bold text-blue-700 hover:bg-blue-200">

                  <Download size={18} />

                  تنزيل

                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}
