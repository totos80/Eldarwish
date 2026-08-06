"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function ContactFloatingButtons() {

  const phone = "01011193720";

  const whatsapp =
    `https://wa.me/2${phone}`;

  return (

    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      <a

        href={whatsapp}

        target="_blank"

        rel="noopener noreferrer"

        aria-label="واتساب"

        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-green-600
          text-white
          shadow-2xl
          transition
          hover:scale-110
        "

      >

        <MessageCircle size={30} />

      </a>

      <a

        href={`tel:${phone}`}

        aria-label="اتصال"

        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-amber-700
          text-white
          shadow-2xl
          transition
          hover:scale-110
        "

      >

        <Phone size={28} />

      </a>

    </div>

  );

}
