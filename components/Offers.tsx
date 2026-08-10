import Link from "next/link";
import { Gift, ArrowLeft, Sparkles } from "lucide-react";

export default function Offers() {
  return (
    <section id="offers" className="offers-section">
      <div className="container">
        <div className="offer-main">
          <div className="offer-decoration">✦</div>

          <div className="offer-content">
            <span className="offer-kicker">
              <Sparkles size={16} />
              لفترة محدودة
            </span>

            <h2>عروض الافتتاح</h2>

            <p>
              خصومات حصرية وهدايا مع أول طلباتك من عطارة الدرويش.
            </p>

            <Link href="/products" className="offer-btn">
              اكتشف العروض
              <ArrowLeft size={18} />
            </Link>
          </div>

          <div className="offer-gift">
            <Gift size={105} strokeWidth={1.2} />
          </div>
        </div>

        <div className="offer-features">
          <div>
            <strong>🎁 هدية مجانية</strong>
            <span>مع الطلبات التي تتجاوز الحد الأدنى للعرض</span>
          </div>
          <div>
            <strong>🚚 توصيل سريع</strong>
            <span>خدمة توصيل داخل السويس</span>
          </div>
          <div>
            <strong>📱 اطلب بسهولة</strong>
            <span>تواصل معنا مباشرة عبر واتساب</span>
          </div>
        </div>
      </div>
    </section>
  );
}
