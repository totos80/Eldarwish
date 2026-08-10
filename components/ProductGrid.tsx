import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-amber-300 bg-amber-50 p-10 text-center">
        <h2 className="text-2xl font-bold text-amber-700">
          لا توجد منتجات مطابقة
        </h2>
        <p className="mt-3 text-stone-600">
          جرّب تغيير كلمات البحث أو اختيار تصنيف آخر.
        </p>
      </div>
    );
  }

  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  );
}


