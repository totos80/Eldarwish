import Link from "next/link";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <article className="card overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/products/${product.slug}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover"
        />

        <div className="p-5">
          <h3 className="text-xl font-bold text-stone-800">
            {product.name}
          </h3>

          <div className="mt-4 flex items-center justify-between">
            <strong className="text-2xl font-bold text-amber-700">
              {product.price.toLocaleString("en-US")} ج.م
            </strong>

            <span className="text-sm text-stone-500">
              {product.name.includes("لتر") ? "" : "/ كجم"}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
