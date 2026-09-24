"use client";

import Link from "next/link";

const categories = [
{
title: "العروض",
href: "/offers",
image:
"https://images.unsplash.com/photo-1607082349566-187342175e2f?q=90&w=900&auto=format&fit=crop",
},
{
title: "الزيوت الطبيعية",
href: "/products?category=الزيوت",
image:
"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=90&w=900&auto=format&fit=crop",
},
{
title: "الحبوب والبذور",
href: "/products?category=الحبوب",
image:
"https://images.unsplash.com/photo-1586201375761-83865001e31c?q=90&w=900&auto=format&fit=crop",
},
{
title: "البن والقهوة",
href: "/products?category=القهوة",
image:
"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=90&w=900&auto=format&fit=crop",
},
{
title: "التوابل والبهارات",
href: "/products?category=التوابل",
image:
"https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=90&w=900&auto=format&fit=crop",
},
{
title: "الأعشاب",
href: "/products?category=الأعشاب",
image:
"https://images.unsplash.com/photo-1515586000433-45406d8e6662?q=90&w=900&auto=format&fit=crop",
},
{
title: "البلح والتمور",
href: "/products?category=التمور",
image:
"https://images.unsplash.com/photo-1598532163257-ae3b6c0f6f1c?q=90&w=900&auto=format&fit=crop",
},
{
title: "منتجات خليجية وليبية",
href: "/products?category=خليجية",
image:
"https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=90&w=900&auto=format&fit=crop",
},
];

export default function Categories() {
return (
<section className="categories-section">
<div className="section-heading">
<span>تسوق حسب التصنيف</span>

    <h2>اكتشف تشكيلتنا</h2>
  </div>

  <div className="category-grid">
    {categories.map(({ title, href, image }) => (
      <Link
        href={href}
        key={title}
        className="category-card"
      >
        <div className="category-image-wrap">
          <img
            src={image}
            alt={title}
            loading="lazy"
          />
        </div>

        <h3>{title}</h3>
      </Link>
    ))}
  </div>
</section>

);
}
