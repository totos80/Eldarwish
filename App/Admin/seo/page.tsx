"use client";

import { Save, Globe, Search, Share2 } from "lucide-react";

export default function SeoSettingsPage() {
  return (
    <main className="min-h-screen bg-stone-100 p-8">

      <div className="mx-auto max-w-5xl">

        <div className="mb-8">

          <h1 className="text-4xl font-extrabold">

            إعدادات SEO

          </h1>

          <p className="mt-2 text-stone-500">

            تحسين ظهور متجر عطارة الدرويش في محركات البحث.

          </p>

        </div>

        <form className="space-y-8">

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Search className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                بيانات الموقع

              </h2>

            </div>

            <div className="space-y-6">

              <div>

                <label className="mb-2 block font-bold">

                  عنوان الموقع (Meta Title)

                </label>

                <input
                  defaultValue="عطارة الدرويش | أعشاب وتوابل وزيوت طبيعية"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  الوصف (Meta Description)

                </label>

                <textarea
                  rows={5}
                  defaultValue="عطارة الدرويش تقدم أفضل الأعشاب والتوابل والزيوت الطبيعية والعسل والتمور بأعلى جودة."
                  className="w-full resize-none rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

              <div>

                <label className="mb-2 block font-bold">

                  الكلمات المفتاحية

                </label>

                <input
                  defaultValue="عطارة، أعشاب، توابل، عسل، زيوت طبيعية، تمور"
                  className="w-full rounded-xl border p-4 outline-none focus:border-amber-700"
                />

              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Share2 className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                وسائل التواصل

              </h2>

            </div>

            <div className="space-y-5">

              <input
                placeholder="Facebook URL"
                className="w-full rounded-xl border p-4"
              />

              <input
                defaultValue="https://www.tiktok.com/@eldarwishelattar"
                className="w-full rounded-xl border p-4"
              />

              <input
                placeholder="Instagram URL"
                className="w-full rounded-xl border p-4"
              />

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <Globe className="text-amber-700" />

              <h2 className="text-2xl font-bold">

                الفهرسة

              </h2>

            </div>

            <div className="space-y-4">

              <label className="flex items-center gap-3">

                <input type="checkbox" defaultChecked />

                السماح لمحركات البحث بفهرسة الموقع

              </label>

              <label className="flex items-center gap-3">

                <input type="checkbox" defaultChecked />

                إنشاء Sitemap تلقائيًا

              </label>

              <label className="flex items-center gap-3">

                <input type="checkbox" defaultChecked />

                إنشاء Robots.txt تلقائيًا

              </label>

            </div>

          </div>

          <div className="flex justify-end">

            <button
              type="submit"
              className="flex items-center gap-3 rounded-xl bg-amber-700 px-8 py-4 font-bold text-white hover:bg-amber-800"
            >

              <Save size={20} />

              حفظ إعدادات SEO

            </button>

          </div>

        </form>

      </div>

    </main>
  );
}
