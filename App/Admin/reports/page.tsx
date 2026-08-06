import {
  DollarSign,
  ShoppingBag,
  Users,
  Package,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const cards = [
  {
    title: "إجمالي المبيعات",
    value: "152,480 ج.م",
    icon: DollarSign,
    color: "text-green-700 bg-green-100",
    trend: "+18%",
  },
  {
    title: "إجمالي الطلبات",
    value: "428",
    icon: ShoppingBag,
    color: "text-blue-700 bg-blue-100",
    trend: "+9%",
  },
  {
    title: "العملاء",
    value: "985",
    icon: Users,
    color: "text-purple-700 bg-purple-100",
    trend: "+14%",
  },
  {
    title: "المنتجات",
    value: "512",
    icon: Package,
    color: "text-amber-700 bg-amber-100",
    trend: "-2%",
  },
];

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10">

          <h1 className="text-4xl font-extrabold">

            التقارير والإحصائيات

          </h1>

          <p className="mt-2 text-stone-500">

            ملخص أداء المتجر.

          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {cards.map((card) => {

            const Icon = card.icon;

            return (

              <div
                key={card.title}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >

                <div className="mb-6 flex items-center justify-between">

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.color}`}
                  >

                    <Icon size={30} />

                  </div>

                  <div
                    className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-bold ${
                      card.trend.startsWith("+")
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >

                    {card.trend.startsWith("+") ? (
                      <TrendingUp size={16} />
                    ) : (
                      <TrendingDown size={16} />
                    )}

                    {card.trend}

                  </div>

                </div>

                <p className="text-stone-500">

                  {card.title}

                </p>

                <h2 className="mt-3 text-3xl font-extrabold">

                  {card.value}

                </h2>

              </div>

            );

          })}

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              أكثر المنتجات مبيعًا

            </h2>

            <div className="space-y-5">

              {[
                "قرفة عيدان",
                "حبة البركة",
                "كركم",
                "هيل حب",
                "عسل سدر",
              ].map((item, index) => (

                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border p-4"
                >

                  <span className="font-bold">

                    {index + 1}. {item}

                  </span>

                  <span className="text-amber-700 font-bold">

                    {120 - index * 15} مبيعة

                  </span>

                </div>

              ))}

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">

              آخر النشاط

            </h2>

            <div className="space-y-4">

              {[
                "تم إضافة منتج جديد.",
                "تم استلام طلب جديد.",
                "تم تحديث الأسعار
