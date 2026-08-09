"use client";

import {
  Search,
  Star,
  Eye,
  Trash2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    customer: "محمد أحمد",
    product: "قرفة عيدان",
    rating: 5,
    status: "معتمد",
  },
  {
    id: 2,
    customer: "سارة محمود",
    product: "عسل سدر",
    rating: 4,
    status: "بانتظار المراجعة",
  },
  {
    id: 3,
    customer: "أحمد علي",
    product: "هيل حب",
    rating: 5,
    status: "معتمد",
  },
  {
    id: 4,
    customer: "خالد حسن",
    product: "كركم",
    rating: 3,
    status: "بانتظار المراجعة",
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-8">

          <h1 className="text-4xl font-extrabold">

            تقييمات العملاء

          </h1>

          <p className="mt-2 text-stone-500">

            مراجعة واعتماد تقييمات المنتجات.

          </p>

        </div>

        <div className="mb-8 rounded-3xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3 rounded-xl border px-4 py-3">

            <Search size={20} />

            <input
              className="w-full outline-none"
              placeholder="ابحث عن تقييم..."
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

                  المنتج

                </th>

                <th className="p-5">

                  التقييم

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

              {reviews.map((review) => (

                <tr
                  key={review.id}
                  className="border-t"
                >

                  <td className="p-5 font-bold">

                    {review.customer}

                  </td>

                  <td className="p-5">

                    {review.product}

                  </td>

                  <td className="p-5">

                    <div className="flex justify-center gap-1">

                      {Array.from({ length: review.rating }).map((_, i) => (

                        <Star
                          key={i}
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />

                      ))}

                    </div>

                  </td>

                  <td className="p-5 text-center">

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-bold ${
                        review.status === "معتمد"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >

                      {review.status}

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

                        <XCircle size={18} />

                      </button>

                      <button className="rounded-lg bg-stone-200 p-2 text-stone-700">

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
