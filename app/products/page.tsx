import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

type Props = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: Props) {
  const params = await searchParams;
  const selectedCategory = params.category || "";

  const filteredProducts = (
  selectedCategory
    ? products.filter(
        (product) => product.category === selectedCategory
      )
    : products
).sort((a, b) =>
  a.name.localeCompare(b.name, "ar")
);
    ? products.filter(
        (product) => product.category === selectedCategory
      )
    : products;

  const title = selectedCategory
    ? selectedCategory
    : "جميع المنتجات";

  return (
    <>
      <Header />

      <main className="container py-12">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              {title}
            </h1>

            <p className="mt-2 text-stone-500">
              {selectedCategory
                ? `منتجات قسم ${selectedCategory} من عطارة الدَرْويش.`
                : "تصفح جميع منتجات عطارة الدَرْويش."}
            </p>
          </div>

          <SearchBar />
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl border border-amber-100 bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-stone-800">
              لا توجد منتجات في هذا التصنيف حاليًا
            </h2>

            <p className="mt-3 text-stone-500">
              جرّب اختيار تصنيف آخر.
            </p>
          </div>
        ) : (
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
