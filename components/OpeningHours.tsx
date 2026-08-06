"use client";

import {
  Clock,
  MapPin,
  Phone,
} from "lucide-react";

const workingHours = [
  {
    day: "السبت",
    time: "09:00 ص - 11:00 م",
  },
  {
    day: "الأحد",
    time: "09:00 ص - 11:00 م",
  },
  {
    day: "الإثنين",
    time: "09:00 ص - 11:00 م",
  },
  {
    day: "الثلاثاء",
    time: "09:00 ص - 11:00 م",
  },
  {
    day: "الأربعاء",
    time: "09:00 ص - 11:00 م",
  },
  {
    day: "الخميس",
    time: "09:00 ص - 11:00 م",
  },
  {
    day: "الجمعة",
    time: "02:00 م - 11:00 م",
  },
];

export default function OpeningHours() {
  return (
    <section className="py-20">

      <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">

        <h2 className="mb-10 text-center text-4xl font-extrabold">

          مواعيد العمل

        </h2>

        <div className="mb-10 grid gap-5">

          {workingHours.map((item) => (

            <div
              key={item.day}
              className="flex items-center justify-between rounded-2xl border border-stone-100 p-5 transition hover:bg-amber-50"
            >

              <span className="font-bold">

                {item.day}

              </span>

              <span className="text-stone-600">

                {item.time}

              </span>

            </div>

          ))}

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="flex items-center gap-3 rounded-2xl bg-stone-50 p-5">

            <MapPin
              className="text-amber-700"
              size={24}
            />

            <span>

              فيصل - طريق ناصر - السويس

            </span>

          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-stone-50 p-5">

            <Phone
              className="text-amber-700"
              size={24}
            />

            <a href="tel:01011193720">

              01011193720

            </a>

          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-stone-50 p-5">

            <Clock
              className="text-amber-700"
              size={24}
            />

            <span>

              خدمة العملاء طوال أوقات العمل

            </span>

          </div>

        </div>

      </div>

    </section>
  );
}
