import Link from "next/link";
import {
  Eye,
  Search,
  Package,
  Truck,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const orders = [
  {
    id: "#1001",
    customer: "محمد أحمد",
    total: 540,
    status: "جديد",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "#1002",
    customer: "أحمد علي",
    total: 1180,
    status: "قيد التجهيز",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "#1003",
    customer: "سارة محمود",
    total: 320,
    status: "تم الشحن",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "#1004",
    customer: "خالد حسن",
    total: 890,
    status: "مكتمل",
    color: "bg-green-100 text-green-700",
  },
];

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8">

          <h1 className="text-4xl font-extrabold">

            إدارة الطلبات

          </h1>

          <p className="mt-2 text-stone-500">

            متابعة جميع طلبات العملاء.

          </p>

        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <Clock3 className="mb-4 text-blue-600" />

            <p className="text-stone-500">طلبات جديدة</p>

            <h2 className="mt-2 text-3xl font-bold">12</h2>

          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <Package className="mb-4 text-yellow-600" />

            <p className="text-stone-500">قيد التجهيز</p>

            <h2 className="mt-2 text-3xl font-bold">18</h2>

          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <Truck className="mb-4 text-purple-600" />

            <p className="text-stone-500">تم الشحن</p>

            <h2 className="mt-2 text-3xl font-bold">25</h2>

          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <CheckCircle2 className="mb-4 text-green-600" />

            <p className="text-stone-500">مكتملة</p>

            <h2 className="mt-2 text-3xl font-bold">154</h2>

          </div>

        </div>

        <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3 rounded-xl border px-4 py-3">

            <Search size={20} />

            <input
              placeholder="ابحث برقم الطلب أو اسم العميل..."
              className="w-full outline-none"
            />

          </div>

        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

          <table className="w-full">

            <thead className="bg-stone-100">

              <tr>

                <th className="p-5 text-right">رقم الطلب</th>

                <th className="p-5 text-right">العميل</th>

                <th className="p-5">الإجمالي</th>

                <th className="p-5">الحالة</th>

                <th className="p-5">الإجراءات</th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (

                <tr
                  key={order.id}
                  className="border-t"
                >

                  <td className="p-5 font-bold">

                    {order.id}

                  </td>

                  <td className="p-5">

                    {order.customer}

                  </td>

                  <td className="p-5 text-center">

                    {order.total} ج.م

                  </td>

                  <td className="p-5 text-center">

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-bold ${order.color}`}
                    >
                      {order.status}
                    </span>

                  </td>

                  <td className="p-5 text-center">

                    <Link
                      href={`/admin/orders/${order.id.replace("#","")}`}
                      className="inline-flex rounded-lg bg-blue-100 p-2 text-blue-700"
                    >

                      <Eye size={18} />

                    </Link>

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
