import Link from "next/link";

const products = [
  {
    id: 1,
    name: "هيل حب فاخر",
    price: "220 ج.م",
    image: "/images/products/cardamom.jpg",
  },
  {
    id: 2,
    name: "قرفة سيلاني",
    price: "95 ج.م",
    image: "/images/products/cinnamon.jpg",
  },
  {
    id: 3,
    name: "كركم طبيعي",
    price: "80 ج.م",
    image: "/images/products/turmeric.jpg",
  },
  {
    id: 4,
    name: "زعتر بري",
    price: "110 ج.م",
    image: "/images/products/thyme.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="container py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-title mb-0">المنتجات المميزة</h2>

        <Link
          href="/products"
          className="text-amber-700 font-semibold hover:underline"
        >
          عرض الكل
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="card overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-bold">{product.name}</h3>

              <p className="mt-3 text-amber-700 font-bold">
                {product.price}
              </p>

              <Link
                href={`/products/${product.id}`}
                className="btn-primary mt-5 block text-center"
              >
                عرض المنتج
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


