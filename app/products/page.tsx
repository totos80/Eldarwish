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
    "الأغذية": ["الأغذية", "الحلويات"],
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
          ? "المواد الغذائية والحلويات"
          : selectedCategory || "جميع المنتجات";

  const pageDescription =
    selectedCategory === "الأعشاب"
      ? "تصفح الأعشاب والعطارة من عطارة الدَرْويش."
      : selectedCategory === "العطارة"
        ? "تصفح العطارة والحبوب والبذور من عطارة الدَرْويش."
        : selectedCategory === "الأغذية"
          ? "تصفح المواد الغذائية والحلويات من عطارة الدَرْويش."
          : selectedCategory
            ? `تصفح منتجات قسم ${pageTitle} من عطارة الدَرْويش.`
            : "تصفح جميع منتجات عطارة الدَرْويش.";

  return (
    <>
      <Header />

      <main className="container py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-stone-900">
            {pageTitle}
          </h1>

          <p className="mt-2 text-stone-500">
            {pageDescription}
          </p>
        </div>

        <ProductsClient products={filteredProducts} />
      </main>

      <Footer />
    </>
  );
}
