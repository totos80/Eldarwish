import Link from "next/link";
import {
  Package,
  ShoppingCart,
  LayoutGrid,
  Users,
  TrendingUp,
  Settings,
} from "lucide-react";

const cards = [
  {
    title: "المنتجات",
    value: "520",
    icon: Package,
    href: "/admin/products",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "الطلبات",
    value: "124",
    icon: ShoppingCart,
    href: "/admin/orders",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "الأقسام",
    value: "18",
    icon: LayoutGrid,
    href: "/admin/categories",
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "العملاء",
    value: "980",
    icon: Users,
    href: "/admin/customers",
    color: "bg-purple-100 text-purple-700",
  },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-extrabold">

              لوحة التحكم

            </h1>

            <p className="mt-3 text-stone-500">

              إدارة متجر عطارة الدرويش

            </p>

          </div>

          <button className="flex items-center gap-2 rounded-xl bg-stone-900 px-5 py-3 text-white">

            <Settings size={18} />

            الإعدادات

          </button>

        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {cards.map((card) => {

            const Icon = card.icon;

            return (

              <Link
                key={card.title}
                href={card.href}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-stone-500">

                      {card.title}

                    </p>

                    <h2 className="mt-3 text-4xl font-extrabold">

                      {card.value}

                    </h2>

                  </div>

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.color}`}
                  >

                    <Icon size={30} />

                  </div>

                </div>

              </Link>

            );

          })}

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <div className="mb-8 flex items-center gap-3">

            <TrendingUp
              className="text-green-600"
              size={28}
            />

            <h2 className="text-2xl font-bold">

              ملخص اليوم

            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-stone-50 p-6">

              <p className="text-stone-500">

                المبيعات

              </p>

              <h3 className="mt-3 text-3xl font-bold">

                18,420 ج.م

              </h3>

            </div>

            <div className="rounded-2xl bg-stone-50 p-6">

              <p className="text-stone-500">

                الطلبات الجديدة

              </p>

              <h3 className="mt-3 text-3xl font-bold">

                12

              </h3>

            </div>

            <div className="rounded-2xl bg-stone-50 p-6">

              <p className="text-stone-500">

                الزوار

              </p>

              <h3 className="mt-3 text-3xl font-bold">

                1,254

              </h3>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
