import {
  ShieldCheck,
  Clock,
  User,
  FileText,
  AlertCircle,
} from "lucide-react";

const logs = [
  {
    id: 1,
    user: "Admin",
    action: "تسجيل الدخول",
    time: "منذ دقيقة",
    type: "نجاح",
  },
  {
    id: 2,
    user: "Sales",
    action: "تعديل طلب #1032",
    time: "منذ 12 دقيقة",
    type: "تعديل",
  },
  {
    id: 3,
    user: "Inventory",
    action: "تحديث كمية منتج",
    time: "منذ ساعة",
    type: "مخزون",
  },
  {
    id: 4,
    user: "Admin",
    action: "حذف كوبون",
    time: "أمس",
    type: "حذف",
  },
];

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-2 text-4xl font-extrabold">

          سجل العمليات

        </h1>

        <p className="mb-10 text-stone-500">

          جميع العمليات التى تمت داخل النظام.

        </p>

        <div className="space-y-5">

          {logs.map((log) => (

            <div
              key={log.id}
              className="rounded-3xl bg-white p-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-5">

                  <div className="rounded-2xl bg-amber-100 p-4">

                    <ShieldCheck
                      className="text-amber-700"
                    />

                  </div>

                  <div>

                    <h2 className="font-bold text-xl">

                      {log.action}

                    </h2>

                    <div className="mt-2 flex gap-6 text-stone-500">

                      <span className="flex items-center gap-2">

                        <User size={16} />

                        {log.user}

                      </span>

                      <span className="flex items-center gap-2">

                        <Clock size={16} />

                        {log.time}

                      </span>

                    </div>

                  </div>

                </div>

                <div className="flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2">

                  <AlertCircle size={16} />

                  {log.type}

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">

          <div className="flex items-center gap-3">

            <FileText className="text-amber-700" />

            <h2 className="text-2xl font-bold">

              ملخص

            </h2>

          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-stone-100 p-6">

              <p>إجمالي العمليات</p>

              <h3 className="mt-2 text-3xl font-bold">

                12,846

              </h3>

            </div>

            <div className="rounded-2xl bg-stone-100 p-6">

              <p>اليوم</p>

              <h3 className="mt-2 text-3xl font-bold">

                128

              </h3>

            </div>

            <div className="rounded-2xl bg-stone-100 p-6">

              <p>آخر تسجيل دخول</p>

              <h3 className="mt-2 text-xl font-bold">

                منذ دقيقة

              </h3>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
