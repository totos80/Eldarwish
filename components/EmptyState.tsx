"use client";

import Link from "next/link";
import { PackageOpen } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function EmptyState({
  title = "لا توجد بيانات",
  description = "لا يوجد أي محتوى لعرضه حالياً.",
  buttonText = "تصفح المنتجات",
  buttonHref = "/products",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-stone-200 bg-white px-8 py-16 text-center shadow-sm">

      <div className="mb-6 rounded-full bg-amber-100 p-6">

        <PackageOpen
          size={56}
          className="text-amber-700"
        />

      </div>

      <h2 className="text-3xl font-bold text-stone-900">

        {title}

      </h2>

      <p className="mt-4 max-w-lg leading-8 text-stone-600">

        {description}

      </p>

      <Link
        href={buttonHref}
        className="mt-8 rounded-xl bg-amber-700 px-8 py-4 font-bold text-white transition hover:bg-amber-800"
      >
        {buttonText}
      </Link>

    </div>
  );
}
