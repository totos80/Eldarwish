import Image from "next/image";

export default function FreshGrindingSection() {
  return (
    <section className="fresh-grinding-section" aria-label="الطحينة وزبدة الفول السوداني الطازجة">
      <div className="fresh-grinding-card">
        <div className="fresh-grinding-image-wrap">
          <Image
            src="/tahina-peanut-fresh.png"
            alt="طحن الطحينة وزبدة الفول السوداني الطازجة أمام العميل في عطارة الدرويش"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
            className="fresh-grinding-image"
          />
        </div>
        <div className="fresh-grinding-copy">
          <span className="fresh-grinding-kicker">طازج قدام عينيك</span>
          <h2>طحينة وزبدة فول سوداني خام… تُطحن قدامك</h2>
          <p>
            في عطارة الدرويش بنقدملك الطحينة وزبدة الفول السوداني من خامات مختارة،
            <strong> بدون أي إضافات</strong>، وتتطحن قدامك وقت الطلب عشان تاخدها طازة
            وبالجودة اللي تستحقها.
          </p>
          <p>
            <strong>جودة مضمونة، طعم أصيل، وسعر ممتاز.</strong> اطلب الكمية اللي تناسبك
            وخلي الجودة تحكم بنفسها.
          </p>
          <div className="fresh-grinding-points">
            <span>✓ خام بدون إضافات</span>
            <span>✓ طحن أمامك</span>
            <span>✓ طازة وقت الطلب</span>
            <span>✓ سعر ممتاز</span>
          </div>
        </div>
      </div>
    </section>
  );
}
