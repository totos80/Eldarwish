"use client";

import {
  Search,
  Mail,
  Phone,
  Eye,
  Trash2,
  CheckCircle2,
} from "lucide-react";

const messages = [
  {
    id: 1,
    name: "محمد أحمد",
    phone: "01011193720",
    subject: "استفسار عن العسل",
    status: "جديد",
  },
  {
    id: 2,
    name: "سارة محمود",
    phone: "01123456789",
    subject: "موعد الشحن",
    status: "تم الرد",
  },
  {
    id: 3,
    name: "أحمد علي",
    phone: "01234567890",
    subject: "طلب جملة",
    status: "جديد",
  },
  {
    id: 4,
    name: "خالد حسن",
    phone: "01512345678",
    subject: "استبدال منتج",
    status: "تم الرد",
  },
];

export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8">

          <h1 className="text-4xl font-extrabold">

            رسائل العملاء

          </h1>

          <p className="mt-2 text-stone-500">

            متابعة جميع الرسائل الواردة من نموذج التواصل.

          </p>

        </div>

        <div className="mb-8 rounded-3xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3 rounded-xl border px-4 py-3">

            <Search size={20} />

            <input
              className="w-full outline-none"
              placeholder="ابحث عن رسالة..."
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

                <th className="p-5">

                  الهاتف

                </th>

                <th className="p-5 text-right">

                  الموضوع

                </th>

                <th className="p-5">

                  الحالة

                </th>

                <th className="p-5">

                  الإجراءات

                </th>

              </tr>

            </thead>

            <tbody>

              {messages.map((message) => (

                <tr
                  key={message.id}
                  className="border-t"
                >

                  <td className="p-5">

                    <div className="flex items-center gap-3">

                      <Mail
                        size={18}
                        className="text-amber-700"
                      />

                      <span className="font-bold">

                        {message.name}

                      </span>

                    </div>

                  </td>

                  <td className="p-5">

                    <div className="flex items-center justify-center gap-2">

                      <Phone size={16} />

                      {message.phone}

                    </div>

                  </td>

                  <td className="p-5">

                    {message.subject}

                  </td>

                  <td className="p-5 text-center">

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-bold ${
                        message.status === "تم الرد"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >

                      {message.status}

                    </span>

                  </td>

                  <td className="p-5">

                    <div className="flex justify-center gap-2">

                      <button className="rounded-lg bg-blue-100 p-2 text-blue-700">

                        <Eye size={18} />

                      </button>

                      <button className="rounded-lg bg-green-100 p-2 text-green-700">

                        <CheckCircle2 size={18} />

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
