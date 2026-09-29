"use client";

import Header from "@/components/Header";
import HeaderLuckyWheel from "@/components/HeaderLuckyWheel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f1df]">
      {/* 1. الهيدر واللوجو الـ 3D */}
      <Header />

      {/* 2. عجلة الحظ الـ 3D التفاعلية */}
      <HeaderLuckyWheel />

      {/* 3. محتوى الصفحة الرئيسية */}
      <section className="mx-auto max-w-7xl px-4 py-12 text-center">
        <div className="rounded-3xl border border-[#183b2a]/15 bg-white/60 p-8 shadow-sm backdrop-blur-sm">
          <h1 className="text-3xl font-black text-[#183b2a] sm:text-4xl font-['Traditional_Arabic','Andalus','Amiri',serif]">
            مرحباً بك في عطارة الدرويش
          </h1>
          <p className="mt-3 text-base text-[#183b2a]/80 sm:text-lg">
            أجود أنواع العطارة والبهارات المطحونة طازجاً والأقرب إليك دائماً.
          </p>
        </div>
      </section>
    </main>
  );
}
