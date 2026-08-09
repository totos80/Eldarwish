"use client";

import Link from "next/link";
import {
  Search,
  Package,
  AlertTriangle,
  CheckCircle2,
  Plus,
} from "lucide-react";

const inventory = [
  {
    id: 1,
    name: "قرفة عيدان",
    sku: "SP-001",
    stock: 52,
    min: 10,
  },
  {
    id: 2,
    name: "حبة البركة",
    sku: "HB-014",
    stock: 8,
    min: 15,
  },
  {
    id: 3,
    name: "كركم مطحون",
    sku: "SP-032",
    stock: 75,
    min: 20,
  },
  {
    id: 4,
    name: "هيل حب",
    sku: "CF-011",
    stock: 5,
    min: 12,
  },
];

export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              إدارة المخزون

            </h1>

            <p className="mt-2 text-stone-500">

              متابعة الكميات والتنبيه عند انخفاض المخزون.

            </p>

          </div>

          <Link
            href="/admin/products/new"
            className="flex items-center gap-2 rounded-xl bg-amber-700 px-6 py-3 font-bold text-white"
          >

            <Plus size={20} />

            إضافة منتج

          </Link>

        </div>

        <div className="mb-8 rounded-3xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3 rounded-xl border px-4 py-3">

            <Search size={20} />

            <input
              placeholder="ابحث عن منتج..."
              className="w-full outline-none"
            />

          </div>

        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

          <table className="w-full">

            <thead className="bg-stone-100">

              <tr>

                <th className="p-5 text-right">

                  المنتج

                </th>

                <th className="p-5">

                  SKU

                </th>

                <th className="p-5">

                  الكمية

                </th>

                <th className="p-5">

                  الحد الأدنى

                </th>

                <th className="p-5">

                  الحالة

                </th>

              </tr>

            </thead>

            <tbody>

              {inventory.map((item) => {

                const lowStock = item.stock <= item.min;

                return (

                  <tr
                    key={item.id}
                    className="border-t"
                  >

                    <td className="p-5 font-bold">

                      {item.name}

                    </td>

                    <td className="p-5 text-center">

                      {item.sku}

                    </td>

                    <td className="p-5 text-center">

                      {item.stock}

                    </td>

                    <td className="p-5 text-center">

                      {item.min}

                    </td>

                    <td className="p-5 text-center">

                      {lowStock ? (

                        <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-700">

                          <AlertTriangle size={16} />

                          منخفض

                        </span>

                      ) : (

                        <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">

                          <CheckCircle2 size={16} />

                          متوفر

                        </span>

                      )}

                    </td>

                  </tr>

                );

              })}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}
