import Link from "next/link";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <article className="card overflow-hidden transition hover:-translate-y-1">
      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover"
      />

      <div className="p-5">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-700">
          {product.category}
        </span>

        <h3 className="mt-4 text-xl font-bold">
          {product.name}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm text-stone-600">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <strong className="text-2xl text-amber-700">
            {product.price} ج.م
          </strong>

          <span className="text-sm text-stone-500">
            {product.unit}
          </span>
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="btn-primary flex-1 text-center"
          >
            التفاصيل
          </Link>

          <a
            href={`https://wa.me/201011193720?text=أرغب في طلب ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            واتساب
          </a>
        </div>
      </div>
    </article>
  );
}


