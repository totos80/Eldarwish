"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";

interface ProductShareButtonProps {
  title: string;
  url: string;
}

export default function ProductShareButton({
  title,
  url,
}: ProductShareButtonProps) {

  const [copied, setCopied] =
    useState(false);

  async function handleShare() {

    if (navigator.share) {

      try {

        await navigator.share({

          title,

          url,

        });

        return;

      } catch {}

    }

    await navigator.clipboard.writeText(url);

    setCopied(true);

    setTimeout(() => {

      setCopied(false);

    }, 2500);

  }

  return (

    <button

      onClick={handleShare}

      className="
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        border-stone-300
        bg-white
        px-5
        py-3
        font-semibold
        transition
        hover:border-amber-700
        hover:text-amber-700
      "

    >

      <Share2 size={20} />

      {copied
        ? "تم نسخ الرابط"
        : "مشاركة المنتج"}

    </button>

  );

}
