import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";

const products = [
  {
    name: "هيل حب فاخر",
    price: "220",
    image:
      "https://images.unsplash.com/photo-1599909533603-1a2b3b0e2a5d?auto=format&fit=crop&w=800&q=85",
    tag: "الأكثر طلبًا",
  },
  {
    name: "قرفة سيلاني",
    price: "95",
    image:
      "https://images.unsplash.com/photo-1601379760883-1bb497c5587b?auto=format&fit=crop&w=800&q=85",
    tag: "مختار بعناية",
  },
  {
    name: "كركم طبيعي",
    price: "80",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=800&q=85",
    tag: "طبيعي",
  },
  {
    name: "زعتر بري",
    price: "75",
    image:
      "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=800&q=85",
    tag: "جديد",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="section products-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">اختياراتنا</span>
            <h2>منتجات مميزة</h2>
            <p className="heading-description">
              مجموعة من المنتجات التي تستحق التجربة.
            </p>
          </div>

          <Link href="/products" className="section-link">
            عرض الكل <span>←</span>
          </Link>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className="product-tag">{product.tag}</span>
                <button className="product-cart" aria-label="إضافة للسلة">
                  <ShoppingBag size={18} />
                </button>
              </div>

              <div className="product-info">
                <span className="product-category">عطارة الدرويش</span>
                <h3>{product.name}</h3>

                <div className="product-bottom">
                  <div className="price">
                    <strong>{product.price}</strong>
                    <span>ج.م</span>
                  </div>

                  <Link href="/products" className="view-product">
                    التفاصيل <ArrowLeft size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
