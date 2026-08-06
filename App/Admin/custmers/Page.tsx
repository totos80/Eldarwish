import {
  Search,
  Eye,
  Phone,
  Mail,
  User,
} from "lucide-react";

const customers = [
  {
    id: 1,
    name: "محمد أحمد",
    phone: "01011193720",
    email: "mohamed@email.com",
    orders: 8,
    total: 3250,
  },
  {
    id: 2,
    name: "أحمد علي",
    phone: "01000000000",
    email: "ahmed@email.com",
    orders: 3,
    total: 980,
  },
  {
    id: 3,
    name: "سارة محمود",
    phone: "01111111111",
    email: "sara@email.com",
    orders: 12,
    total: 5840,
  },
  {
    id: 4,
    name: "خالد حسن",
    phone: "01222222222",
    email: "khaled@email.com",
    orders: 5,
    total: 2140,
  },
];

export default function CustomersPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8">

          <h1 className="text-4xl font-extrabold">

            إدارة العملاء

          </h1>

          <p className="mt-2 text-stone-500">

            جميع عملاء متجر عطارة الدرويش.

          </p>

        </div>

        <div className="mb-8 rounded-3xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3 rounded-xl border px-4 py-3">

            <Search size={20} />

            <input
              className="w-full outline-none"
              placeholder="ابحث باسم العميل..."
            />

          </div>

        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

          <table className="w-full">

            <thead className="bg-stone-100">

              <tr>

                <th className="p-5 text-right">

                  العميل

                </th>

                <th className="p-5 text-right">

                  الهاتف

                </th>

                <th className="p-5 text-right">

                  البريد

                </th>

                <th className="p-5">

                  الطلبات

                </th>

                <th className="p-5">

                  المشتريات

                </th>

                <th className="p-5">

                  عرض

                </th>

              </tr>

            </thead>

            <tbody>

              {customers.map((customer) => (

                <tr
                  key={customer.id}
                  className="border-t"
                >

                  <td className="p-5">

                    <div className="flex items-center gap-3">

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">

                        <User
                          className="text-amber-700"
                          size={22}
                        />

                      </div>

                      <span className="font-bold">

                        {customer.name}

                      </span>

                    </div>

                  </td>

                  <td className="p-5">

                    <div className="flex items-center gap-2">

                      <Phone size={16} />

                      {customer.phone}

                    </div>

                  </td>

                  <td className="p-5">

                    <div className="flex items-center gap-2">

                      <Mail size={16} />

                      {customer.email}

                    </div>

                  </td>

                  <td className="p-5 text-center">

                    {customer.orders}

                  </td>

                  <td className="p-5 text-center font-bold">

                    {customer.total} ج.م

                  </td>

                  <td className="p-5 text-center">

                    <button className="rounded-lg bg-blue-100 p-2 text-blue-700">

                      <Eye size={18} />

                    </button>

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
