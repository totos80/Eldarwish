import Link from "next/link";
import {
  Leaf,
  Sparkles,
  Coffee,
  Wheat,
  Droplets,
  Gift,
} from "lucide-react";

const categories = [
  { name: "الأعشاب", icon: Leaf, text: "أعشاب مختارة بعناية", color: "green" },
  { name: "التوابل", icon: Sparkles, text: "نكهات غنية وأصيلة", color: "orange" },
  { name: "البن والقهوة", icon: Coffee, text: "قهوة بطعم مميز", color: "brown" },
  { name: "الحبوب والبذور", icon: Wheat, text: "اختيارات متنوعة", color: "gold" },
  { name: "الزيوت الطبيعية", icon: Droplets, text: "منتجات طبيعية", color: "blue" },
  { name: "العروض", icon: Gift, text: "اختيارات بأسعار مميزة", color: "red" },
];

export default function Categories() {
  return (
    <section id="categories" className="section categories-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">اكتشف تشكيلتنا</span>
            <h2>تسوّق حسب التصنيف</h2>
          </div>
          <Link href="/products" className="section-link">
            عرض كل المنتجات <span>←</span>
          </Link>
        </div>

        <div className="categories-grid">
          {categories.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                href={item.name === "العروض" ? "#offers" : "/products"}
                className="category-card"
                key={item.name}
              >
                <div className={`category-icon ${item.color}`}>
                  <Icon size={28} strokeWidth={1.8} />
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="category-arrow">←</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
