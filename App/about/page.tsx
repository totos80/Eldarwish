import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Award, Leaf, ShieldCheck, Truck, HeartHandshake, Phone } from "lucide-react";

const values=[
{icon:Leaf,title:"منتجات طبيعية",text:"نختار أجود الأعشاب والتوابل بعناية."},
{icon:Award,title:"جودة مضمونة",text:"فحص مستمر وجودة ثابتة لكل منتج."},
{icon:Truck,title:"توصيل سريع",text:"خدمة توصيل داخل السويس."},
{icon:ShieldCheck,title:"ثقة وأمان",text:"شفافية في الأسعار والمنتجات."},
{icon:HeartHandshake,title:"خدمة عملاء",text:"نساعدك في اختيار المنتج المناسب."},
];

export const metadata={
 title:"من نحن | عطارة الدرويش",
 description:"تعرف على عطارة الدرويش ورسالتنا."
};

export default function AboutPage(){
 return(
 <>
 <Header/>
 <main>
 <section className="bg-gradient-to-b from-amber-50 to-white">
  <div className="container py-20">
   <h1 className="text-5xl font-extrabold">من نحن</h1>
   <p className="mt-8 max-w-3xl leading-9 text-lg text-stone-600">
   عطارة الدرويش متجر متخصص في الأعشاب والتوابل والزيوت الطبيعية ومنتجات العطارة،
   هدفنا تقديم منتجات عالية الجودة مع تجربة شراء بسيطة وسريعة.
   </p>
  </div>
 </section>

 <section className="container py-20">
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
   {values.map((v,i)=>{
    const Icon=v.icon;
    return(
    <article key={i} className="card p-8">
      <Icon className="text-amber-700" size={42}/>
      <h2 className="mt-5 text-2xl font-bold">{v.title}</h2>
      <p className="mt-4 leading-8 text-stone-600">{v.text}</p>
    </article>);
   })}
  </div>
 </section>

 <section className="bg-stone-900 text-white py-20">
  <div className="container text-center">
   <h2 className="text-4xl font-bold">لماذا يختارنا العملاء؟</h2>
   <div className="mt-12 grid gap-8 md:grid-cols-4">
    <div><h3 className="text-5xl font-extrabold text-amber-400">200+</h3><p className="mt-2">منتج</p></div>
    <div><h3 className="text-5xl font-extrabold text-amber-400">100%</h3><p className="mt-2">جودة مختارة</p></div>
    <div><h3 className="text-5xl font-extrabold text-amber-400">7</h3><p className="mt-2">أيام دعم</p></div>
    <div><h3 className="text-5xl font-extrabold text-amber-400">24h</h3><p className="mt-2">استجابة سريعة</p></div>
   </div>
  </div>
 </section>

 <section className="container py-20 text-center">
   <h2 className="text-4xl font-bold">ابدأ التسوق الآن</h2>
   <p className="mt-5 text-stone-600">تصفح جميع منتجات عطارة الدرويش أو تواصل معنا مباشرة.</p>
   <div className="mt-10 flex flex-wrap justify-center gap-4">
    <Link href="/products" className="btn-primary">المنتجات</Link>
    <a href="tel:01011193720" className="btn-secondary inline-flex items-center gap-2">
      <Phone size={18}/>01011193720
    </a>
   </div>
 </section>
 </main>
 <Footer/>
 </>
 );
}


