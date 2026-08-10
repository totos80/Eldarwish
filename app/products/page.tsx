import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";
import { products } from "@/data/products";
import { Sparkles } from "lucide-react";

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
                <span className="section-kicker">
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
            <ProductCatalog />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
