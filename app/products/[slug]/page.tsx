import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

      <main className="container py-12">
        <Link href="/products" className="text-amber-700">
          ← العودة إلى المنتجات
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl border border-amber-100"
          />

          <div>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-700">
              {product.category}
            </span>

            <h1 className="mt-4 text-4xl font-bold">{product.name}</h1>

            <p className="mt-6 leading-8 text-stone-600">
              {product.description}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-3xl font-bold text-amber-700">
                {product.price} ج.م
              </span>
              <span className="text-stone-500">{product.unit}</span>
            </div>

            <a
              href={`https://wa.me/201011193720?text=أرغب في طلب ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-block"
            >
              اطلب عبر واتساب
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}


