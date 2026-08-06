import Link from "next/link";
import {
  LayoutGrid,
  Plus,
  Pencil,
  Trash2,
  Package,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "الأعشاب",
    products: 148,
    color: "bg-green-100 text-green-700",
  },
  {
    id: 2,
    name: "التوابل",
    products: 97,
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 3,
    name: "العسل",
    products: 24,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 4,
    name: "التمور",
    products: 38,
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: 5,
    name: "القهوة",
    products: 31,
    color: "bg-stone-200 text-stone-700",
  },
  {
    id: 6,
    name: "الزيوت الطبيعية",
    products: 44,
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              إدارة الأقسام

            </h1>

            <p className="mt-2 text-stone-500">

              إنشاء وتعديل أقسام المتجر.

            </p>

          </div>

          <Link
            href="/admin/categories/new"
            className="flex items-center gap-2 rounded-xl bg-amber-700 px-6 py-3 font-bold text-white hover:bg-amber-800"
          >

            <Plus size={20} />

            قسم جديد

          </Link>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((category) => (

            <div
              key={category.id}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 flex items-center justify-between">

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${category.color}`}
                >

                  <LayoutGrid size={30} />

                </div>

                <span className="rounded-full bg-stone-100 px-4 py-2 text-sm font-bold">

                  #{category.id}

                </span>

              </div>

              <h2 className="text-2xl font-bold">

                {category.name}

              </h2>

              <div className="mt-5 flex items-center gap-2 text-stone-600">

                <Package size={18} />

                {category.products} منتج

              </div>

              <div className="mt-8 flex gap-3">

                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-100 py-3 font-bold text-green-700">

                  <Pencil size={18} />

                  تعديل

                </button>

                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-100 py-3 font-bold text-red-700">

                  <Trash2 size={18} />

                  حذف

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}
