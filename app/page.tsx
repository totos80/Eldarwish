import Header from "@/components/Header";
import HeaderLuckyWheel from "@/components/HeaderLuckyWheel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f1df]">
      {/* 1. الهيدر الذي يحتوي على اللوجو وأزرار البحث والسلة */}
      <Header />

      {/* 2. عجلة الحظ أسفل الهيدر مباشرة */}
      <HeaderLuckyWheel />

      {/* باقي محتوى الصفحة الرئيسية (يمكنك إضافة باقي الأقسام والمنتجات هنا) */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        {/* محتوى المنتجات والأقسام... */}
      </section>
    </main>
  );
}
