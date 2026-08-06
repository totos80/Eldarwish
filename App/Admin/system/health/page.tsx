import {
  Server,
  Database,
  Wifi,
  ShieldCheck,
  HardDrive,
  Cpu,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    name: "الخادم",
    icon: Server,
    status: "يعمل",
    color: "text-green-700 bg-green-100",
  },
  {
    name: "قاعدة البيانات",
    icon: Database,
    status: "متصلة",
    color: "text-blue-700 bg-blue-100",
  },
  {
    name: "الشبكة",
    icon: Wifi,
    status: "مستقرة",
    color: "text-purple-700 bg-purple-100",
  },
  {
    name: "الحماية",
    icon: ShieldCheck,
    status: "نشطة",
    color: "text-amber-700 bg-amber-100",
  },
];

export default function SystemHealthPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-2 text-4xl font-extrabold">

          صحة النظام

        </h1>

        <p className="mb-10 text-stone-500">

          متابعة حالة جميع خدمات المتجر.

        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.name}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${service.color}`}
                >

                  <Icon size={30} />

                </div>

                <h2 className="text-2xl font-bold">

                  {service.name}

                </h2>

                <div className="mt-4 flex items-center gap-2 text-green-700">

                  <CheckCircle2 size={18} />

                  {service.status}

                </div>

              </div>

            );

          })}

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <Cpu className="mb-4 text-blue-700" size={34} />

            <p className="text-stone-500">

              استخدام المعالج

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              23%

            </h2>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <HardDrive className="mb-4 text-amber-700" size={34} />

            <p className="text-stone-500">

              استخدام التخزين

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              68%

            </h2>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <Database className="mb-4 text-green-700" size={34} />

            <p className="text-stone-500">

              حجم قاعدة البيانات

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              148 MB

            </h2>

          </div>

        </div>

      </div>

    </main>
  );
}
