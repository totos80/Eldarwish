"use client";

import Link from "next/link";
import {
  Coffee,
  Droplets,
  Gift,
  Leaf,
  Sparkles,
  Wheat,
  Package,
  CupSoda,
} from "lucide-react";

const categories = [
  {
    title: "العروض",
    icon: Gift,
    href: "/offers",
    color: "red",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=90&w=1200&auto=format&fit=crop",
  },
  {
    title: "الزيوت الطبيعية",
    icon: Droplets,
    href: "/products?category=الزيوت",
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=90&w=1200&auto=format&fit=crop",
  },
  {
    title: "الحبوب والبذور",
    icon: Wheat,
    href: "/products?category=الحبوب",
    color: "gold",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=90&w=1200&auto=format&fit=crop",
  },
  {
    title: "البن والقهوة",
    icon: Coffee,
    href: "/products?category=القهوة",
    color: "brown",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=90&w=1200&auto=format&fit=crop",
  },
  {
    title: "التوابل والبهارات",
    icon: Sparkles,
    href: "/products?category=التوابل",
    color: "amber",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=90&w=1200&auto=format&fit=crop",
  },
  {
    title: "الأعشاب",
    icon: Leaf,
    href: "/products?category=الأعشاب",
    color: "green",
    image:
      "https://images.unsplash.com/photo-1515586000433-45406d8e6662?q=90&w=1200&auto=format&fit=crop",
  },

  // القسم الجديد: البلح والتمور
  {
    title: "البلح والتمور",
    icon: Package,
    href: "/products?category=التمور",
    color: "brown",
    image:
      "https://images.unsplash.com/photo-1598532163257-ae3b6c0f6f1c?q=90&w=1200&auto=format&fit=crop",
  },

  // القسم الجديد: منتجات خليجية وليبية
  {
    title: "منتجات خليجية وليبية",
    icon: CupSoda,
    href: "/products?category=خليجية",
    color: "gold",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=90&w=1200&auto=format&fit=crop",
  },
];

export default function Categories() {
  return (
    <section className="categories-section">
      <div className="section-heading">
        <span>تسوق حسب التصنيف</span>
        <h2>اكتشف تشكيلتنا</h2>
        <i>✦</i>
      </div>

      <div className="category-grid">
        {categories.map(
          ({ title, icon: Icon, href, color, image }) => (
            <Link
              href={href}
              key={title}
              className="category-card"
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
              />

              <div className="category-shade" />

              <div className={`category-icon ${color}`}>
                <Icon size={23} />
              </div>

              <div className="category-content">
                <h3>{title}</h3>
                <span>استكشف</span>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
}
