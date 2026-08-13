"use client";

const features = [
  {
    title: "جودة مضمونة",
    desc: "منتجات مختارة بعناية",
    image: "/features/quality-spices.jpg",
    tone: "gold",
  },
  {
    title: "طبيعي 100%",
    desc: "من الطبيعة بدون إضافات",
    image: "/features/natural-herbs.jpg",
    tone: "leaf",
  },
  {
    title: "توصيل سريع",
    desc: "داخل السويس",
    image: "/features/fast-delivery.jpg",
    tone: "truck",
  },
  {
    title: "دعم العملاء",
    desc: "نحن هنا لخدمتك",
    image: "/features/customer-support.jpg",
    tone: "support",
  },
];

export default function StoreFeatures() {
  return (
    <section className="features-wrap">
      <div className="features-card">
        {features.map(({ title, desc, image, tone }) => (
          <div className="feature-item" key={title}>
            <div className={`feature-photo feature-photo-${tone}`}>
              <img src={image} alt={title} />
            </div>

            <div className="feature-copy">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
