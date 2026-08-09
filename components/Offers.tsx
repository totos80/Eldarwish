import Link from "next/link";
import { Gift, Truck, Percent } from "lucide-react";

export default function Offers() {
  return (
    <section className="bg-amber-700 py-20 text-white">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold">عروض الافتتاح</h2>
          <p className="mt-4 text-amber-100">
            خصومات حصرية وهدايا مع أول طلب لفترة محدودة.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-8">
            <Gift className="mb-4" size={42} />
            <h3 className="text-2xl font-bold">هدية مجانية</h3>
            <p className="mt-3 text-amber-100">
              هدية مع الطلبات التي تتجاوز الحد الأدنى للعرض.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-8">
            <Percent className="mb-4" size={42} />
            <h3 className="text-2xl font-bold">خصومات أسبوعية</h3>
            <p className="mt-3 text-amber-100">
              عروض متجددة على مجموعة مختارة من المنتجات.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-8">
            <Truck className="mb-4" size={42} />
            <h3 className="text-2xl font-bold">توصيل سريع</h3>
            <p className="mt-3 text-amber-100">
              خدمة توصيل داخل السويس بأسرع وقت ممكن.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/offers"
            className="inline-block rounded-xl bg-white px-8 py-4 font-bold text-amber-700 hover:bg-amber-50"
          >
            شاهد جميع العروض
          </Link>
        </div>
      </div>
    </section>
  );
}


