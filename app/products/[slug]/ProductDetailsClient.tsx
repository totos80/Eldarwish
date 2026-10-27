

"use client";

import { useRouter } from "next/navigation";

export default function ProductDetailsClient() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center text-amber-700 transition hover:text-amber-900"
    >
      ← العودة إلى المنتجات
    </button>
  );
}
