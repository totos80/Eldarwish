"use client";

import Link from "next/link";
import { Coffee, Droplets, Gift, Leaf, Sparkles, Wheat } from "lucide-react";

const categories = [
  { title: "العروض", icon: Gift, href: "/offers", color: "red", image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=700&auto=format&fit=crop" },
  { title: "الزيوت الطبيعية", icon: Droplets, href: "/products?category=oils", color: "blue", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=700&auto=format&fit=crop" },
  { title: "الحبوب والبذور", icon: Wheat, href: "/products?category=seeds", color: "gold", image: "https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?q=80&w=700&auto=format&fit=crop" },
  { title: "البن والقهوة", icon: Coffee, href: "/products?category=coffee", color: "brown", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=700&auto=format&fit=crop" },
  { title: "التوابل والبهارات", icon: Sparkles, href: "/products?category=spices", color: "amber", image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=700&auto=format&fit=crop" },
  { title: "الأعشاب", icon: Leaf, href: "/products?category=herbs", color: "green", image: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?q=80&w=700&auto=format&fit=crop" },
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
        {categories.map(({ title, icon: Icon, href, color, image }) => (
          <Link href={href} key={title} className="category-card">
            <img src={image} alt="" />
            <div className="category-shade" />
            <div className={`category-icon ${color}`}><Icon size={23} /></div>
            <div className="category-content">
              <h3>{title}</h3>
              <span>استكشف</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
