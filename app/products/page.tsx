import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { products } from "@/data/products";
import { ArrowLeft, SlidersHorizontal, Sparkles } from "lucide-react";

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
            <div className="catalog-toolbar">
              <div>
                <h2>تشكيلتنا المختارة</h2>
                <p>اختار المنتج الذي يناسبك وتعرف على تفاصيله</p>
              </div>

              <div className="catalog-search">
                <SearchBar />
              </div>

              <button className="catalog-filter">
                <SlidersHorizontal size={18} />
                التصنيفات
              </button>
            </div>

            <div className="products-grid">
              {products.map((product) => (
                <article className="catalog-product-card" key={product.id}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="catalog-product-image"
                  >
                    <img src={product.image} alt={product.name} />

                    <span className="catalog-product-category">
                      {product.category}
                    </span>
                  </Link>

                  <div className="catalog-product-info">
                    <span className="catalog-brand">
                      عطارة الدرويش
                    </span>

                    <Link href={`/products/${product.slug}`}>
                      <h3>{product.name}</h3>
                    </Link>

                    <p>{product.description}</p>

                    <div className="catalog-product-bottom">
                      <div className="catalog-price">
                        <strong>{product.price}</strong>
                        <span>ج.م</span>
                      </div>

                      <span className="catalog-unit">
                        {product.unit}
                      </span>
                    </div>

                    <Link
                      href={`/products/${product.slug}`}
                      className="catalog-details"
                    >
                      عرض التفاصيل
                      <ArrowLeft size={17} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {products.length === 0 && (
              <div className="products-empty">
                لا توجد منتجات متاحة حاليًا.
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
