"use client";

import Link from "next/link";
import {
  Truck,
  Plus,
  Pencil,
  Trash2,
  MapPin,
  Clock3,
} from "lucide-react";

const shippingZones = [
  {
    id: 1,
    city: "السويس",
    price: 35,
    time: "24 ساعة",
    status: "نشط",
  },
  {
    id: 2,
    city: "القاهرة",
    price: 60,
    time: "2 - 3 أيام",
    status: "نشط",
  },
  {
    id: 3,
    city: "الإسكندرية",
    price: 75,
    time: "3 - 4 أيام",
    status: "نشط",
  },
  {
    id: 4,
    city: "باقي المحافظات",
    price: 85,
    time: "3 - 5 أيام",
    status: "نشط",
  },
];

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              إدارة الشحن

            </h1>

            <p className="mt-2 text-stone-500">

              أسعار ومناطق الشحن داخل مصر.

            </p>

          </div>

          <Link
            href="/admin/shipping/new"
            className="flex items-center gap-2 rounded-xl bg-amber-700 px-6 py-3 font-bold text-white hover:bg-amber-800"
          >

            <Plus size={20} />

            إضافة منطقة

          </Link>

        </div>

        <div className="grid gap-6">

          {shippingZones.map((zone) => (

            <div
              key={zone.id}
              className="rounded-3xl bg-white p-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">

                    <Truck
                      className="text-amber-700"
                      size={30}
                    />

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">

                      {zone.city}

                    </h2>

                    <div className="mt-2 flex flex-wrap gap-5 text-stone-600">

                      <span className="flex items-center gap-2">

                        <MapPin size={16} />

                        {zone.price} ج.م

                      </span>

                      <span className="flex items-center gap-2">

                        <Clock3 size={16} />

                        {zone.time}

                      </span>

                    </div>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">

                    {zone.status}

                  </span>

                  <button className="rounded-lg bg-green-100 p-2 text-green-700">

                    <Pencil size={18} />

                  </button>

                  <button className="rounded-lg bg-red-100 p-2 text-red-700">

                    <Trash2 size={18} />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}
