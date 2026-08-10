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
  {
    name: "الأعشاب",
    icon: Leaf,
    text: "أعشاب مختارة بعناية",
    color: "green",
  },
  {
    name: "التوابل والبهارات",
    icon: Sparkles,
    text: "نكهات أصيلة من أجود الخامات",
    color: "orange",
  },
  {
    name: "البن والقهوة",
    icon: Coffee,
    text: "قهوة وبن بطعم غني ومميز",
    color: "brown",
  },
  {
    name: "الحبوب والبذور",
    icon: Wheat,
    text: "اختيارات متنوعة للاستخدام اليومي",
    color: "gold",
  },
  {
    name: "الزيوت الطبيعية",
    icon: Droplets,
    text: "زيوت طبيعية مختارة بعناية",
    color: "blue",
  },
  {
    name: "العروض",
    icon: Gift,
    text: "أفضل الاختيارات بأسعار مميزة",
    color: "red",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="section categories-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">تشكيلة الدرويش</span>
            <h2>اكتشف عالم العطارة</h2>
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
                  <Icon size={30} strokeWidth={1.8} />
                </div>

                <div className="category-content">
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
