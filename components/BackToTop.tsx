"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {

    function handleScroll() {

      setVisible(
        window.scrollY > 400
      );

    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  function scrollToTop() {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }

  return (

    <button

      onClick={scrollToTop}

      aria-label="العودة لأعلى"

      className={`
        fixed
        bottom-24
        left-6
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-amber-700
        text-white
        shadow-xl
        transition-all
        duration-300

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-10 opacity-0"
        }

        hover:bg-amber-800
      `}

    >

      <ChevronUp size={26} />

    </button>

  );

}
