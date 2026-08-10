export const dynamic = "force-dynamic";
import Image from "next/image";
import Link from "next/link";
import { Package, Plus, Pencil, Trash2, Star } from "lucide-react";
import { getProducts } from "@/lib/products";
export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-stone-100 p-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold">
              إدارة المنتجات
            </h1>

            <p className="mt-2 text-stone-500">
              إضافة وتعديل وإدارة منتجات المتجر.
            </p>
          </div>

          <Link
            href="/admin/products/new"
            className="flex items-center gap-2 rounded-xl bg-amber-700 px-6 py-3 font-bold text-white hover:bg-amber-800"
          >
            <Plus size={20} />
            منتج جديد
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-right">
              <thead className="bg-stone-50">
                <tr>
                  <th className="p-5 font-bold">المنتج</th>
                  <th className="p-5 text-center font-bold">القسم</th>
                  <th className="p-5 text-center font-bold">السعر</th>
                  <th className="p-5 text-center font-bold">المخزون</th>
                  <th className="p-5 text-center font-bold">مميز</th>
                  <th className="p-5 text-center font-bold">الإجراءات</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-t transition hover:bg-stone-50"
                  >
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
                              <Package
                                size={26}
                                className="text-stone-400"
                              />
                            </div>
                          )}
                        </div>

                        <div>
                          <h2 className="font-bold">
                            {product.name}
                          </h2>

                          <p className="mt-1 text-sm text-stone-500">
                            {product.slug}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="p-5 text-center">
                      {product.category?.name ?? "-"}
                    </td>

                    <td className="p-5 text-center font-bold">
                      {product.price} ج.م
                    </td>

                    <td className="p-5 text-center">
                      <span
                        className={`rounded-full px-4 py-2 text-sm font-bold ${
                          product.stock > 0
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.stock}
                      </span>
                    </td>

                    <td className="p-5 text-center">
                      {product.featured ? (
                        <Star
                          size={18}
                          className="mx-auto fill-yellow-400 text-yellow-400"
                        />
                      ) : (
                        "-"
                      )}
                    </td>

                    <td className="p-5">
                      <div className="flex justify-center gap-3">
                        <Link
                          href={`/admin/products/${product.id}/edit`}
                          className="rounded-lg bg-green-100 p-2 text-green-700 transition hover:bg-green-200"
                        >
                          <Pencil size={18} />
                        </Link>

                        <button
                          type="button"
                          className="rounded-lg bg-red-100 p-2 text-red-700 transition hover:bg-red-200"
                          aria-label="حذف المنتج"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {products.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="py-20 text-center"
                    >
                      <Package
                        size={48}
                        className="mx-auto mb-4 text-stone-300"
                      />

                      <h2 className="text-xl font-bold text-stone-700">
                        لا توجد منتجات
                      </h2>

                      <p className="mt-2 text-stone-500">
                        ابدأ بإضافة أول منتج إلى المتجر.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}
