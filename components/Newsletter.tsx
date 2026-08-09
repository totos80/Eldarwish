"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim()) return;

    setSuccess(true);
    setEmail("");

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }

  return (
    <section className="my-16 overflow-hidden rounded-3xl bg-amber-700 text-white">

      <div className="mx-auto max-w-5xl px-6 py-14">

        <div className="mb-8 flex items-center gap-3">

          <Mail size={34} />

          <div>

            <h2 className="text-3xl font-bold">
              اشترك في نشرة عطارة الدرويش
            </h2>

            <p className="mt-2 text-amber-100">
              عروض حصرية، منتجات جديدة، ونصائح عن الأعشاب والتوابل.
            </p>

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:flex-row"
        >

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="اكتب بريدك الإلكتروني"
            className="flex-1 rounded-xl border-none px-5 py-4 text-black outline-none"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-black px-8 py-4 font-bold transition hover:bg-stone-900"
          >
            <Send size={18} />
            اشتراك
          </button>

        </form>

        {success && (

          <div className="mt-6 flex items-center gap-2 rounded-xl bg-green-600 p-4">

            <CheckCircle size={20} />

            <span>
              تم الاشتراك بنجاح.
            </span>

          </div>

        )}

      </div>

    </section>
  );
}
