"use client";

import {
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
} from "lucide-react";

const cards = [
  {
    icon: Phone,
    title: "اتصل بنا",
    value: "01011193720",
    href: "tel:01011193720",
  },
  {
    icon: MessageCircle,
    title: "واتساب",
    value: "راسلنا الآن",
    href: "https://wa.me/201011193720",
  },
  {
    icon: MapPin,
    title: "العنوان",
    value: "السويس - فيصل - طريق ناصر",
    href: "https://maps.google.com",
  },
  {
    icon: Clock3,
    title: "مواعيد العمل",
    value: "09:00 ص - 11:00 م",
    href: "#",
  },
];

export default function ContactCards() {
  return (
    <section className="py-20">

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {

          const Icon = card.icon;

          return (

            <a
              key={card.title}
              href={card.href}
              target={
                card.href.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel="noopener noreferrer"
              className="
                group
                rounded-3xl
                border
                border-stone-200
                bg-white
                p-8
                text-center
                shadow-sm
                transition
                duration-300
                hover:-translate-y-2
                hover:border-amber-600
                hover:shadow-xl
              "
            >

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 transition group-hover:bg-amber-700">

                <Icon
                  size={34}
                  className="text-amber-700 group-hover:text-white"
                />

              </div>

              <h3 className="mb-3 text-2xl font-bold">

                {card.title}

              </h3>

              <p className="leading-8 text-stone-600">

                {card.value}

              </p>

            </a>

          );

        })}

      </div>

    </section>
  );
}
