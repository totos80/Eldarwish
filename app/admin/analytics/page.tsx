"use client";

import {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  Eye,
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10">

          <h1 className="text-4xl font-extrabold">

            لوحة التحليلات

          </h1>

          <p className="mt-2 text-stone-500">

            نظرة شاملة على أداء متجر عطارة الدرويش.

          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <DollarSign
              size={34}
              className="mb-4 text-green-700"
            />

            <p className="text-stone-500">

              مبيعات اليوم

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              8,240 ج.م

            </h2>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <ShoppingCart
              size={34}
              className="mb-4 text-blue-700"
            />

            <p className="text-stone-500">

              الطلبات اليوم

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              21

            </h2>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <Users
              size={34}
              className="mb-4 text-purple-700"
            />

            <p className="text-stone-500">

              العملاء الجدد

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              13

            </h2>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <Eye
              size={34}
              className="mb-4 text-amber-700"
            />

            <p className="text-stone-500">

              زيارات الموقع

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              2,486

            </h2>

          </div>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              أفضل المنتجات اليوم

            </h2>

            <div className="space-y-4">

              {[
                "حبة البركة",
                "قرفة عيدان",
                "هيل حب",
                "عسل سدر",
                "كركم",
              ].map((item, index) => (

                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border p-4"
                >

                  <span className="font-bold">

                    {index + 1}. {item}

                  </span>

                  <Package
                    size={18}
                    className="text-amber-700"
                  />

                </div>

              ))}

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              الأداء

            </h2>

            <div className="space-y-6">

              <div className="flex justify-between">

                <span>معدل التحويل</span>

                <strong>4.8%</strong>

              </div>

              <div className="flex justify-between">

                <span>متوسط قيمة الطلب</span>

                <strong>392 ج.م</strong>

              </div>

              <div className="flex justify-between">

                <span>الطلبات المكتملة</span>

                <strong>96%</strong>

              </div>

              <div className="flex justify-between">

                <span>نمو المبيعات</span>

                <div className="flex items-center gap-2 text-green-700 font-bold">

                  <TrendingUp size={18} />

                  +18%

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
