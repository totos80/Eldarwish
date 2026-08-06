import { Product } from "@/types/product";
import ProductGrid from "@/components/ProductGrid";

type FeaturedSectionProps = {
  title: string;
  subtitle?: string;
  products: Product[];
};

export default function FeaturedSection({
  title,
  subtitle,
  products,
}: FeaturedSectionProps) {
  return (
    <section className="container py-16">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-extrabold text-stone-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-stone-600">
            {subtitle}
          </p>
        )}
      </div>

      <ProductGrid products={products} />
    </section>
  );
}


