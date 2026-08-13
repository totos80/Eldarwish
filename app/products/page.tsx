import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
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
              تصفح منتجات عطارة الدرويش.
            </p>
          </div>

          <SearchBar />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="card overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <span className="text-sm text-amber-700">
                  {product.category}
                </span>

                <h2 className="mt-2 text-xl font-bold">
                  {product.name}
                </h2>

                <p className="mt-3 text-stone-600 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <strong className="text-xl text-amber-700">
                    {product.price} ج.م
                  </strong>

                  <span className="text-sm text-stone-500">
                    {product.unit}
                  </span>
                </div>

                <Link
                  href={`/products/${product.slug}`}
                  className="btn-primary mt-5 block text-center"
                >
                  عرض التفاصيل
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}


