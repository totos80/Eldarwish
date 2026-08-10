import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { SlidersHorizontal, Sparkles } from "lucide-react";

export default function ProductsPage() {
  return (
    <>
      <Header />

      <main className="products-page">
        <section className="products-hero">
          <div className="container">
            <div className="products-breadcrumb">
              الرئيسية <span>←</span> المنتجات
            </div>

            <div className="products-hero-content">
              <div>
                <span className="section-kicker products-kicker">
                  <Sparkles size={15} />
                  تشكيلة الدرويش
                </span>

                <h1>منتجاتنا</h1>

                <p>
                  اكتشف مجموعة مختارة من الأعشاب والتوابل والبهارات
                  والبذور والزيوت الطبيعية، بجودة نهتم بها.
                </p>
              </div>

              <div className="products-count">
                <strong>{products.length}+</strong>
                <span>منتج متنوع</span>
              </div>
            </div>
          </div>
        </section>

        <section className="products-catalog">
          <div className="container">

            <div className="catalog-toolbar">
              <div className="catalog-title">
                <span className="section-kicker">اختياراتنا</span>
                <h2>تشكيلتنا المختارة</h2>
                <p>
                  اختار المنتج الذي يناسبك وتعرف على تفاصيله.
                </p>
              </div>

              <SearchBar />

              <button
                type="button"
                className="catalog-filter"
                aria-label="فتح التصنيفات"
              >
                <SlidersHorizontal size={18} />
                <span>التصنيفات</span>
              </button>
            </div>

            <div className="products-results-bar">
              <span>
                عرض <strong>{products.length}</strong> منتج
              </span>

              <span className="results-note">
                🌿 منتجات مختارة بعناية
              </span>
            </div>

            <div className="products-grid premium-products-grid">
              {products.map((product) => (
                <ProductCard
                  product={product}
                  key={product.id}
                />
              ))}
            </div>

            {products.length === 0 && (
              <div className="products-empty">
                <strong>لا توجد منتجات متاحة حاليًا</strong>
                <span>سنضيف منتجات جديدة قريبًا.</span>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
