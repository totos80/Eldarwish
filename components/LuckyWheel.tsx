"use client";

import { useState } from "react";

const prizes = [
  "خصم 5%",
  "هدية مجانية",
  "شحن مجاني",
  "شحن مجاني",
  "خصم 50 جنيه",
  "عضوية كارت الدرويش",
  "حظ أوفر المرة الجاية",
  "حظ أوفر المرة الجاية",
];

export default function LuckyWheel() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState("");
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setResult("");

    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const segmentAngle = 360 / prizes.length;

    const extraSpins = 5 + Math.floor(Math.random() * 3);

    const targetAngle =
      extraSpins * 360 +
      (360 - prizeIndex * segmentAngle - segmentAngle / 2);

    setRotation((prev) => prev + targetAngle);

    setTimeout(() => {
      setResult(prizes[prizeIndex]);
      setSpinning(false);
    }, 5000);
  };

  return (
    <section
      dir="rtl"
      style={{
        width: "100%",
        padding: "45px 15px",
        background:
          "linear-gradient(180deg,#fffaf0 0%,#f4ead8 100%)",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          margin: "0 0 8px",
          color: "#5b3a1e",
          fontSize: "30px",
          fontWeight: 900,
        }}
      >
        🎁 عجلة حظ الدرويش
      </h2>

      <p
        style={{
          margin: "0 auto 28px",
          color: "#795548",
          fontSize: "16px",
        }}
      >
        لف العجلة واكتشف مفاجأتك
      </p>

      {/* العجلة */}
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
          margin: "0 auto 25px",
        }}
      >
        {/* السهم */}
        <div
          style={{
            position: "absolute",
            top: "-12px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            width: 0,
            height: 0,
            borderLeft: "16px solid transparent",
            borderRight: "16px solid transparent",
            borderTop: "35px solid #8b1e1e",
            filter: "drop-shadow(0 2px 2px rgba(0,0,0,.3))",
          }}
        />

        {/* جسم العجلة */}
        <div
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: "10px solid #b88a44",
            boxShadow:
              "0 8px 25px rgba(75,45,20,.25), inset 0 0 0 4px #f5dfad",
            background:
              "conic-gradient(#7a1f1f 0deg 45deg,#d5a94f 45deg 90deg,#356044 90deg 135deg,#ead7a5 135deg 180deg,#7a1f1f 180deg 225deg,#d5a94f 225deg 270deg,#356044 270deg 315deg,#ead7a5 315deg 360deg)",
            transform: `rotate(${rotation}deg)`,
            transition: spinning
              ? "transform 5s cubic-bezier(.15,.75,.15,1)"
              : "none",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* خطوط تقسيم الخانات */}
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                width: "2px",
                height: "50%",
                background: "rgba(255,255,255,.65)",
                left: "50%",
                top: 0,
                transformOrigin: "bottom center",
                transform: `rotate(${index * 45}deg)`,
              }}
            />
          ))}

          {/* منتصف العجلة */}
          <div
            style={{
              position: "absolute",
              width: "68px",
              height: "68px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,#d9b66b,#8b632d)",
              border: "5px solid #f5dfad",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff8e8",
              fontWeight: 900,
              fontSize: "18px",
              boxShadow: "0 3px 10px rgba(0,0,0,.3)",
            }}
          >
            الدرويش
          </div>
        </div>
      </div>

      {/* زر الدوران */}
      <button
        onClick={spinWheel}
        disabled={spinning}
        style={{
          border: "none",
          borderRadius: "30px",
          padding: "14px 42px",
          background: spinning
            ? "#aaa"
            : "linear-gradient(135deg,#8b1e1e,#5d1010)",
          color: "#fff",
          fontSize: "18px",
          fontWeight: 900,
          cursor: spinning ? "not-allowed" : "pointer",
          boxShadow: "0 5px 15px rgba(80,20,10,.25)",
        }}
      >
        {spinning ? "العجلة بتلف..." : "🎡 لف العجلة"}
      </button>

      {/* النتيجة تظهر بعد توقف العجلة */}
      {result && (
        <div
          style={{
            margin: "28px auto 0",
            maxWidth: "420px",
            padding: "22px",
            borderRadius: "18px",
            background: "#fff",
            border: "2px solid #c49a52",
            boxShadow: "0 8px 25px rgba(80,50,20,.15)",
          }}
        >
          <div
            style={{
              color: "#98702f",
              fontSize: "15px",
              fontWeight: 700,
              marginBottom: "7px",
            }}
          >
            🎉 مبروك! جائزتك هي
          </div>

          <div
            style={{
              color: "#5b3a1e",
              fontSize: "28px",
              fontWeight: 900,
            }}
          >
            {result}
          </div>
        </div>
      )}

      {/* كارت الدرويش */}
      <div
        style={{
          maxWidth: "900px",
          margin: "55px auto 0",
          padding: "32px 22px",
          borderRadius: "24px",
          background:
            "linear-gradient(135deg,#3f2918,#6d4824)",
          color: "#fff8e8",
          boxShadow: "0 12px 35px rgba(60,35,15,.25)",
          border: "1px solid rgba(220,185,115,.5)",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            color: "#e4c27c",
            fontWeight: 800,
            marginBottom: "7px",
          }}
        >
          عضوية مميزة
        </div>

        <h3
          style={{
            margin: "0 0 12px",
            fontSize: "30px",
            fontWeight: 900,
          }}
        >
          🪪 كارت الدرويش
        </h3>

        <p
          style={{
            margin: "0 auto 25px",
            maxWidth: "650px",
            lineHeight: 1.8,
            color: "#f1dfbd",
            fontSize: "16px",
          }}
        >
          خليك من أهل الدرويش واستمتع بمزايا وعروض خاصة
          وحصرية لأعضاء الكارت.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(190px,1fr))",
            gap: "12px",
            marginBottom: "25px",
          }}
        >
          {[
            "خصومات خاصة للأعضاء",
            "عروض حصرية قبل الجميع",
            "هدايا ومفاجآت دورية",
            "أولوية في عروض الدرويش",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "15px 10px",
                borderRadius: "14px",
                background: "rgba(255,255,255,.08)",
                border: "1px solid rgba(220,185,115,.25)",
                color: "#fff4d8",
                fontWeight: 700,
              }}
            >
              ✓ {item}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "inline-block",
            padding: "13px 30px",
            borderRadius: "30px",
            background:
              "linear-gradient(135deg,#d8b36a,#a97a32)",
            color: "#3e2613",
            fontSize: "19px",
            fontWeight: 900,
          }}
        >
          الاشتراك السنوي — 100 جنيه
        </div>
      </div>
    </section>
  );
}
