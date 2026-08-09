import {
  Activity,
  User,
  Package,
  ShoppingCart,
  Settings,
  Shield,
} from "lucide-react";

const logs = [
  {
    id: 1,
    icon: User,
    title: "تسجيل دخول",
    user: "admin",
    time: "منذ دقيقتين",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    icon: Package,
    title: "إضافة منتج جديد",
    user: "admin",
    time: "منذ 15 دقيقة",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    icon: ShoppingCart,
    title: "تعديل طلب",
    user: "sales",
    time: "منذ ساعة",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: 4,
    icon: Settings,
    title: "تعديل إعدادات المتجر",
    user: "admin",
    time: "اليوم 10:35",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 5,
    icon: Shield,
    title: "تغيير صلاحيات مستخدم",
    user: "admin",
    time: "أمس",
    color: "bg-red-100 text-red-700",
  },
];

export default function LogsPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-6xl">

        <div className="mb-10">

          <h1 className="text-4xl font-extrabold">

            سجل النشاط

          </h1>

          <p className="mt-2 text-stone-500">

            جميع العمليات التي تمت داخل لوحة التحكم.

          </p>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <div className="space-y-6">

            {logs.map((log) => {

              const Icon = log.icon;

              return (

                <div
                  key={log.id}
                  className="flex items-center justify-between rounded-2xl border p-5 transition hover:bg-stone-50"
                >

                  <div className="flex items-center gap-5">

                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${log.color}`}
                    >

                      <Icon size={24} />

                    </div>

                    <div>

                      <h3 className="text-lg font-bold">

                        {log.title}

                      </h3>

                      <p className="mt-1 text-sm text-stone-500">

                        بواسطة: {log.user}

                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-2 text-stone-500">

                    <Activity size={18} />

                    {log.time}

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </main>
  );
}
