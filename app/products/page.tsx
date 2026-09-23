     import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsClient from "@/components/ProductsClient";
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
  const selectedCategory = params?.category || "";

  const filteredProducts = products
    .filter((product) => {
      if (!selectedCategory) {
        return true;
      }

      return product.category === selectedCategory;
    })
    .sort((a, b) => a.name.localeCompare(b.name, "ar"));

  return (
    <>
      <Header />

      <main className="container py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-stone-900">
            {selectedCategory || "جميع المنتجات"}
          </h1>

          <p className="mt-2 text-stone-500">
            {selectedCategory
              ? `منتجات قسم ${selectedCategory} من عطارة الدَرْويش.`
              : "تصفح جميع منتجات عطارة الدَرْويش."}
          </p>
        </div>

        <ProductsClient products={filteredProducts} />
      </main>

      <Footer />
    </>
  );
}     
