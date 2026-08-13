"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Plus,
  Search,
  Package,
  Star,
  Pencil,
  Trash2,
} from "lucide-react";

// Mock data since prisma might not be ready in this environment
const products = [
  {
    id: "1",
    name: "هيل حب فاخر",
    slug: "cardamom",
    price: 220,
    stock: 50,
    featured: true,
    category: { name: "توابل" },
    image: "/images/products/cardamom.jpg",
  },
];

export default function AdminProductsPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold">إدارة المنتجات</h1>
            <p className="mt-2 text-stone-500">إدارة مخزون متجر عطارة الدرويش.</p>
          </div>
          <Link
            href="/admin/products/new"
            className="flex items-center gap-2 rounded-xl bg-amber-700 px-6 py-3 font-bold text-white hover:bg-amber-800"
          >
            <Plus size={20} />
            منتج جديد
          </Link>
        </div>

        <div className="mb-8 rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3 rounded-xl border px-4 py-3">
            <Search size={20} />
            <input
              className="w-full outline-none"
              placeholder="ابحث عن منتج..."
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <table className="w-full">
            <thead className="bg-stone-100">
              <tr>
                <th className="p-5 text-right">المنتج</th>
                <th className="p-5 text-center">القسم</th>
                <th className="p-5 text-center">السعر</th>
                <th className="p-5 text-center">المخزون</th>
                <th className="p-5 text-center">مميز</th>
                <th className="p-5 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t hover:bg-stone-50 transition">
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-stone-100">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center">
                            <Package size={26} className="text-stone-400" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h2 className="font-bold">{product.name}</h2>
                        <p className="mt-1 text-sm text-stone-500">{product.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 text-center">{product.category?.name}</td>
                  <td className="p-5 text-center font-bold">{product.price} ج.م</td>
                  <td className="p-5 text-center">
                    <span className={`rounded-full px-4 py-2 text-sm font-bold ${product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="p-5 text-center">
                    {product.featured ? <Star size={18} className="mx-auto fill-yellow-400 text-yellow-400" /> : "-"}
                  </td>
                  <td className="p-5">
                    <div className="flex justify-center gap-3">
                      <Link href={`/admin/products/${product.id}/edit`} className="rounded-lg bg-green-100 p-2 text-green-700 transition hover:bg-green-200">
                        <Pencil size={18} />
                      </Link>
                      <button className="rounded-lg bg-red-100 p-2 text-red-700 transition hover:bg-red-200">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-20 text-center">
                    <Package size={48} className="mx-auto mb-4 text-stone-300" />
                    <h2 className="text-xl font-bold text-stone-700">لا توجد منتجات</h2>
                    <p className="mt-2 text-stone-500">ابدأ بإضافة أول منتج إلى المتجر.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
