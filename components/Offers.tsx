"use client";

import Link from "next/link";

export default function Offers() {
  return (
    <section className="offers-section">
      <div className="offer-card">
        <div className="offer-pattern" />
        <div className="offer-copy">
          <h2>عروض حصرية</h2>
          <p>استفد من أفضل العروض والخصومات لفترة محدودة</p>
          <Link href="/offers">اكتشف العروض</Link>
        </div>
        <div className="offer-art">
          <div className="gift-box"><span /> <b>🎁</b></div>
          <div className="offer-bow">⌁</div>
        </div>
      </div>
    </section>
  );
}
