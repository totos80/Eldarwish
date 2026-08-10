import Link from "next/link";
import { ArrowLeft, MessageCircle, ShoppingBag } from "lucide-react";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <article className="premium-product-card">
      <Link
        href={`/products/${product.slug}`}
        className="premium-product-image"
        aria-label={`عرض ${product.name}`}
      >
        <img src={product.image} alt={product.name} />

        <span className="premium-product-badge">
          {product.category}
        </span>

        <span className="premium-product-zoom">
          <ShoppingBag size={18} />
        </span>
      </Link>

      <div className="premium-product-info">
        <span className="premium-product-brand">
          عطارة الدرويش
        </span>

        <Link href={`/products/${product.slug}`}>
          <h3>{product.name}</h3>
        </Link>

        <p>{product.description}</p>

        <div className="premium-product-meta">
          <div className="premium-price">
            <strong>{product.price}</strong>
            <span>ج.م</span>
          </div>

          <span className="premium-unit">
            {product.unit}
          </span>
        </div>

        <div className="premium-product-actions">
          <Link
            href={`/products/${product.slug}`}
            className="premium-details-btn"
          >
            <span>عرض التفاصيل</span>
            <ArrowLeft size={17} />
          </Link>

          <a
            href={`https://wa.me/201011193720?text=${encodeURIComponent(
              `مرحبًا، أرغب في طلب ${product.name} من عطارة الدرويش.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-whatsapp-btn"
            aria-label={`طلب ${product.name} عبر واتساب`}
          >
            <MessageCircle size={19} />
          </a>
        </div>
      </div>
    </article>
  );
}
