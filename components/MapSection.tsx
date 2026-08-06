"use client";

import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
  return (
    <section className="py-20">

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-extrabold">

          موقع عطارة الدرويش

        </h2>

        <p className="mt-4 text-stone-600">

          يسعدنا زيارتكم في مقر المحل بمحافظة السويس.

        </p>

      </div>

      <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-lg">

        <iframe
          title="Eldarwish Location"
          src="https://www.google.com/maps?q=Faisal,Suez,Egypt&output=embed"
          loading="lazy"
          className="h-[450px] w-full border-0"
        />

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div className="flex items-start gap-4 rounded-2xl border p-6">

          <MapPin
            className="mt-1 text-amber-700"
            size={28}
          />

          <div>

            <h3 className="text-xl font-bold">

              العنوان

            </h3>

            <p className="mt-2 leading-8 text-stone-600">

              محافظة السويس
              <br />
              حي فيصل
              <br />
              طريق ناصر
            </p>

          </div>

        </div>

        <a
          href="https://maps.google.com/?q=Faisal,Suez,Egypt"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 rounded-2xl border p-6 transition hover:border-amber-600 hover:bg-amber-50"
        >

          <Navigation
            className="mt-1 text-amber-700"
            size={28}
          />

          <div>

            <h3 className="text-xl font-bold">

              فتح في خرائط Google

            </h3>

            <p className="mt-2 text-stone-600">

              اضغط هنا للحصول على الاتجاهات.

            </p>

          </div>

        </a>

      </div>

    </section>
  );
}
