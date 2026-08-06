"use client";

import Link from "next/link";
import { AlertTriangle, RefreshCcw } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  message?: string;
  buttonText?: string;
  buttonHref?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  title = "حدث خطأ",
  message = "تعذر تحميل البيانات، يرجى المحاولة مرة أخرى.",
  buttonText = "العودة للرئيسية",
  buttonHref = "/",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-red-100 bg-red-50 px-8 py-16 text-center">

      <div className="mb-6 rounded-full bg-red-100 p-5 text-red-600">
        <AlertTriangle size={48} />
      </div>

      <h2 className="text-3xl font-bold text-stone-900">
        {title}
      </h2>

      <p className="mt-4 max-w-xl leading-8 text-stone-600">
        {message}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

        {onRetry && (
          <button
            onClick={onRetry}
            className="flex items-center gap-2 rounded-xl bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
          >
            <RefreshCcw size={18} />
            إعادة المحاولة
          </button>
        )}

        <Link
          href={buttonHref}
          className="rounded-xl border border-stone-300 bg-white px-6 py-3 font-semibold transition hover:border-amber-700 hover:text-amber-700"
        >
          {buttonText}
        </Link>

      </div>

    </div>
  );
}
