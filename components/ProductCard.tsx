import Link from "next/link";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative aspect-square overflow-hidden bg-stone-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="min-h-[92px] px-4 py-5 text-center">
        <h3 className="text-lg font-bold leading-8 text-stone-800 transition-colors group-hover:text-amber-700">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-stone-400">
          اضغط لمعرفة السعر والطلب
        </p>
      </div>
    </Link>
  );
}
