"use client";

import {
  Cpu,
  Database,
  HardDrive,
  Globe,
  Shield,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    name: "قاعدة البيانات",
    status: "متصلة",
    icon: Database,
    color: "text-green-700 bg-green-100",
  },
  {
    name: "الخادم",
    status: "يعمل",
    icon: Cpu,
    color: "text-blue-700 bg-blue-100",
  },
  {
    name: "التخزين",
    status: "68% مستخدم",
    icon: HardDrive,
    color: "text-amber-700 bg-amber-100",
  },
  {
    name: "Cloudflare",
    status: "متصل",
    icon: Globe,
    color: "text-purple-700 bg-purple-100",
  },
  {
    name: "الحماية",
    status: "نشطة",
    icon: Shield,
    color: "text-emerald-700 bg-emerald-100",
  },
];

export default function SystemPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              حالة النظام

            </h1>

            <p className="mt-2 text-stone-500">

              مراقبة حالة الموقع والخدمات.

            </p>

          </div>

          <button className="flex items-center gap-2 rounded-xl bg-amber-700 px-6 py-3 font-bold text-white hover:bg-amber-800">

            <RefreshCw size={18} />

            تحديث الحالة

          </button>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.name}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >

                <div className="mb-6 flex items-center justify-between">

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${service.color}`}
                  >

                    <Icon size={30} />

                  </div>

                  <CheckCircle2
                    className="text-green-600"
                    size={22}
                  />

                </div>

                <h2 className="text-2xl font-bold">

                  {service.name}

                </h2>

                <p className="mt-3 text-stone-600">

                  {service.status}

                </p>

              </div>

            );

          })}

        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-2xl font-bold">

            معلومات النظام

          </h2>

          <div className="grid gap-5 md:grid-cols-2">

            <div className="flex justify-between rounded-xl border p-4">

              <span>إصدار النظام</span>

              <strong>v1.0.0</strong>

            </div>

            <div className="flex justify-between rounded-xl border p-4">

              <span>إصدار Next.js</span>

              <strong>15</strong>

            </div>

            <div className="flex justify-between rounded-xl border p-4">

              <span>آخر نسخة احتياطية</span>

              <strong>اليوم 11:30</strong>

            </div>

            <div className="flex justify-between rounded-xl border p-4">

              <span>مدة التشغيل</span>

              <strong>99.98%</strong>

            </div>

            <div className="flex justify-between rounded-xl border p-4">

              <span>عدد المنتجات</span>

              <strong>520</strong>

            </div>

            <div className="flex justify-between rounded-xl border p-4">

              <span>عدد الطلبات</span>

              <strong>428</strong>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
