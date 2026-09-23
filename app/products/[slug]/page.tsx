import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductPurchase from "@/components/ProductPurchase";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetails({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="container py-10">
        <Link
          href="/products"
          className="inline-flex items-center text-amber-700 transition hover:text-amber-900"
        >
          ← العودة إلى المنتجات
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-amber-100 bg-stone-50 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="w-fit rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-700">
              {product.category}
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-stone-900">
              {product.name}
            </h1>

            <p className="mt-5 leading-8 text-stone-600">
              {product.description}
            </p>

            <ProductPurchase product={product} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}


