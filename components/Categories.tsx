import Link from "next/link";
import {
  Leaf,
  Flower2,
  Coffee,
  Wheat,
  Sparkles,
  Package
} from "lucide-react";

const categories = [
  { title: "الأعشاب", icon: Leaf, href: "/categories/herbs" },
  { title: "التوابل", icon: Flower2, href: "/categories/spices" },
  { title: "البن والقهوة", icon: Coffee, href: "/categories/coffee" },
  { title: "الحبوب والبذور", icon: Wheat, href: "/categories/seeds" },
  { title: "الزيوت الطبيعية", icon: Sparkles, href: "/categories/oils" },
  { title: "العروض", icon: Package, href: "/offers" },
];

export default function Categories() {
  return (
    <section className="container py-20">
      <h2 className="section-title text-center">تسوق حسب التصنيف</h2>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="card flex flex-col items-center gap-4 p-8 hover:-translate-y-1"
            >
              <Icon size={40} className="text-amber-700" />
              <span className="font-bold">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}


