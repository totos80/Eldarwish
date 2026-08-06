import Link from "next/link";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Eye,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "قرفة عيدان",
    category: "التوابل",
    price: 95,
    stock: 42,
  },
  {
    id: 2,
    name: "حبة البركة",
    category: "الأعشاب",
    price: 75,
    stock: 33,
  },
  {
    id: 3,
    name: "عسل سدر",
    category: "العسل",
    price: 420,
    stock: 12,
  },
  {
    id: 4,
    name: "هيل حب",
    category: "القهوة",
    price: 185,
    stock: 19,
  },
];

export default function AdminProductsPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              إدارة المنتجات

            </h1>

            <p className="mt-2 text-stone-500">

              إضافة وتعديل وإدارة جميع المنتجات.

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

        <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3 rounded-xl border px-4 py-3">

            <Search
              size={20}
              className="text-stone-500"
            />

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

                <th className="p-5 text-right">

                  القسم

                </th>

                <th className="p-5">

                  السعر

                </th>

                <th className="p-5">

                  المخزون

                </th>

                <th className="p-5">

                  الإجراءات

                </th>

              </tr>

            </thead>

            <tbody>

              {products.map((product) => (

                <tr
                  key={product.id}
                  className="border-t"
                >

                  <td className="p-5 font-bold">

                    {product.name}

                  </td>

                  <td className="p-5">

                    {product.category}

                  </td>

                  <td className="p-5 text-center">

                    {product.price} ج.م

                  </td>

                  <td className="p-5 text-center">

                    {product.stock}

                  </td>

                  <td className="p-5">

                    <div className="flex justify-center gap-3">

                      <button className="rounded-lg bg-blue-100 p-2 text-blue-700">

                        <Eye size={18} />

                      </button>

                      <button className="rounded-lg bg-green-100 p-2 text-green-700">

                        <Pencil size={18} />

                      </button>

                      <button className="rounded-lg bg-red-100 p-2 text-red-700">

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
