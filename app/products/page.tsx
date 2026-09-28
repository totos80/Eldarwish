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

  const categoryGroups: Record<string, string[]> = {
    "الأعشاب": ["الأعشاب", "العطارة"],
    "العطارة": ["العطارة", "الحبوب", "البذور"],
    "الأغذية": ["الأغذية", "الحلويات", "الحبوب"],
  };

  const allowedCategories =
    categoryGroups[selectedCategory] || [selectedCategory];

  const filteredProducts = products
    .filter((product) => {
      if (!selectedCategory) {
        return true;
      }

      return allowedCategories.includes(product.category);
    })
    .sort((a, b) => a.name.localeCompare(b.name, "ar"));

  const pageTitle =
    selectedCategory === "الأعشاب"
      ? "أعشاب و عطارة"
      : selectedCategory === "العطارة"
        ? "العطارة والحبوب والبذور"
        : selectedCategory === "الأغذية"
          ? "المواد الغذائية والحلويات والحبوب"
          : selectedCategory || "جميع المنتجات";

  const pageDescription =
    selectedCategory === "الأعشاب"
      ? "تصفح الأعشاب والعطارة من عطارة الدَرْويش."
      : selectedCategory === "العطارة"
        ? "تصفح العطارة والحبوب والبذور من عطارة الدَرْويش."
        : selectedCategory === "الأغذية"
          ? "تصفح المواد الغذائية والحلويات والحبوب من عطارة الدَرْويش."
          : selectedCategory
            ? `تصفح منتجات قسم ${pageTitle} من عطارة الدَرْويش.`
            : "تصفح جميع منتجات عطارة الدَرْويش.";

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-emerald-950 via-green-950 to-[#071a14] py-12">
        <div className="container">
          <div className="mb-10 rounded-3xl border border-amber-700/30 bg-stone-800/70 p-6 text-center shadow-2xl backdrop-blur-sm">
            <h1 className="text-3xl font-bold text-amber-200 sm:text-4xl">
              {pageTitle}
            </h1>

            <p className="mt-3 text-stone-300">
              {pageDescription}
            </p>
          </div>

          <ProductsClient products={filteredProducts} />
        </div>
      </main>

      <Footer />
    </>
  );
}
