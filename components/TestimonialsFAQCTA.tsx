import Link from "next/link";
import { Star, Quote, MessageCircle, ChevronDown } from "lucide-react";

const testimonials = [
  {
    name: "محمد أحمد",
    city: "السويس",
    text: "جودة ممتازة والأسعار مناسبة جدًا، والتوصيل كان سريعًا."
  },
  {
    name: "أميرة علي",
    city: "فيصل",
    text: "أفضل مكان اشتريت منه الأعشاب الطبيعية، والتغليف ممتاز."
  },
  {
    name: "أحمد السيد",
    city: "الأربعين",
    text: "البهارات طازجة ورائحتها قوية، أنصح بالتعامل معهم."
  }
];

const faq = [
  {
    q:"هل يوجد توصيل داخل السويس؟",
    a:"نعم، نوفر خدمة توصيل سريعة لمعظم مناطق السويس."
  },
  {
    q:"هل الأسعار محدثة باستمرار؟",
    a:"يتم تحديث الأسعار عند تغييرها لضمان دقة المعلومات."
  },
  {
    q:"كيف يمكنني الطلب؟",
    a:"يمكنك الطلب مباشرة من خلال زر واتساب الموجود في الموقع."
  },
  {
    q:"هل جميع المنتجات طبيعية؟",
    a:"نعمل على توفير منتجات طبيعية مختارة بعناية من أفضل الموردين."
  }
];

export default function TestimonialsFAQCTA() {
  return (
    <>
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">آراء عملائنا</h2>
          <p className="mt-3 text-stone-600">
            نفخر بثقة عملائنا في جودة منتجات عطارة الدرويش.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item,index)=>(
            <article key={index} className="card p-8">
              <Quote className="text-amber-700 mb-5"/>
              <div className="flex gap-1 text-amber-500 mb-4">
                <Star fill="currentColor"/><Star fill="currentColor"/>
                <Star fill="currentColor"/><Star fill="currentColor"/>
                <Star fill="currentColor"/>
              </div>
              <p className="leading-8 text-stone-600">{item.text}</p>
              <h3 className="mt-6 font-bold">{item.name}</h3>
              <span className="text-sm text-stone-500">{item.city}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-stone-50 py-20">
        <div className="container max-w-4xl">
          <h2 className="mb-10 text-center text-4xl font-bold">
            الأسئلة الشائعة
          </h2>

          <div className="space-y-4">
            {faq.map((item,index)=>(
              <details key={index} className="rounded-2xl border bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold">
                  {item.q}
                  <ChevronDown/>
                </summary>
                <p className="mt-5 leading-8 text-stone-600">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="rounded-3xl bg-gradient-to-r from-amber-700 to-amber-900 p-12 text-center text-white">
          <h2 className="text-4xl font-extrabold">
            مستعد لطلب منتجاتك؟
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-amber-100">
            اطلب الآن عبر واتساب واستمتع بأجود الأعشاب والتوابل والمنتجات الطبيعية.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/201011193720"
              className="rounded-xl bg-white px-8 py-4 font-bold text-amber-700"
            >
              <span className="inline-flex items-center gap-2">
                <MessageCircle size={20}/>
                اطلب عبر واتساب
              </span>
            </a>

            <Link
              href="/products"
              className="rounded-xl border border-white px-8 py-4 font-bold"
            >
              تصفح المنتجات
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


