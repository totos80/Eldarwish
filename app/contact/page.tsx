import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata={
  title:"تواصل معنا | عطارة الدرويش",
  description:"تواصل مع عطارة الدرويش."
};

export default function ContactPage(){
return(
<>
<Header/>
<main>
<section className="bg-gradient-to-b from-amber-50 to-white">
<div className="container py-20">
<h1 className="text-5xl font-extrabold">تواصل معنا</h1>
<p className="mt-6 max-w-3xl text-lg leading-9 text-stone-600">
يسعدنا الرد على جميع استفساراتكم واستقبال طلباتكم عبر الهاتف أو واتساب.
</p>
</div>
</section>

<section className="container grid gap-10 py-20 lg:grid-cols-2">

<div className="card p-8">
<h2 className="mb-8 text-3xl font-bold">أرسل رسالة</h2>

<form className="space-y-5">
<input className="w-full rounded-xl border p-4" placeholder="الاسم"/>
<input className="w-full rounded-xl border p-4" placeholder="رقم الهاتف"/>
<input className="w-full rounded-xl border p-4" placeholder="البريد الإلكتروني"/>
<input className="w-full rounded-xl border p-4" placeholder="عنوان الرسالة"/>
<textarea rows={6} className="w-full rounded-xl border p-4" placeholder="اكتب رسالتك"></textarea>

<button type="submit" className="btn-primary w-full">
إرسال الرسالة
</button>
</form>
</div>

<div className="space-y-6">

<div className="card p-6">
<div className="flex items-center gap-4">
<Phone className="text-amber-700"/>
<div>
<h3 className="font-bold">الهاتف</h3>
<a href="tel:01011193720">01011193720</a>
</div>
</div>
</div>

<div className="card p-6">
<div className="flex items-center gap-4">
<Mail className="text-amber-700"/>
<div>
<h3 className="font-bold">البريد الإلكتروني</h3>
<p>contact@eldarwish.co</p>
</div>
</div>
</div>

<div className="card p-6">
<div className="flex items-center gap-4">
<MapPin className="text-amber-700"/>
<div>
<h3 className="font-bold">العنوان</h3>
<p>فيصل - طريق ناصر - السويس - مصر</p>
</div>
</div>
</div>

<div className="card p-6">
<div className="flex items-center gap-4">
<Clock className="text-amber-700"/>
<div>
<h3 className="font-bold">ساعات العمل</h3>
<p>يوميًا من 10 صباحًا حتى 11 مساءً</p>
</div>
</div>
</div>

<div className="overflow-hidden rounded-2xl border">
<iframe
title="map"
src="https://maps.google.com/maps?q=Suez&t=&z=13&ie=UTF8&iwloc=&output=embed"
className="h-80 w-full border-0"
/>
</div>

</div>
</section>
</main>
<Footer/>
</>
);
}


