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

function normalizeArabic(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ـ/g, "")
    .replace(/\s+/g, " ");
}

export default async function ProductsPage({
  searchParams,
}: Props) {
  const params = await searchParams;
  const selectedCategory = params?.category || "";

  const query = "";

  const filteredProducts = products
    .filter((product) => {
      if (!selectedCategory) {
        return true;
      }

      return product.category === selectedCategory;
    })
    .filter((product) => {
      if (!query) {
        return true;
      }

      const productName = normalizeArabic(product.name);
      const productCategory = normalizeArabic(product.category);
      const normalizedQuery = normalizeArabic(query);

      return (
        productName.includes(normalizedQuery) ||
        productCategory.includes(normalizedQuery)
      );
    })
    .sort((a, b) => a.name.localeCompare(b.name, "ar"));

  const title = selectedCategory || "جميع المنتجات";

  return (
    <>
      <Header />

      <main className="container py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-stone-900">
            {title}
          </h1>

          <p className="mt-2 text-stone-500">
            {selectedCategory
              ? `منتجات قسم ${selectedCategory} من عطارة الدَرْويش.`
              : "تصفح جميع منتجات عطارة الدَرْويش."}
          </p>

          <div className="mt-6">
            <SearchBar
              value=""
              onChange={() => {}}
            />
          </div>
        </div>

        <section className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
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
            
