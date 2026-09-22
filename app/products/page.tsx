import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      <Header />

      <main className="container py-12">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold">جميع المنتجات</h1>

            <p className="mt-2 text-stone-500">
              تصفح منتجات عطارة الدَرْويش.
            </p>
          </div>

          <SearchBar />
        </div>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}      
