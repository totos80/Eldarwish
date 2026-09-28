"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const prizes = [
  "خصم 5%",
  "هدية مع الطلب",
  "خصم 10%",
  "شحن مجاني",
  "خصم 15%",
  "حظ أوفر",
  "هدية مميزة",
  "خصم 5%",
];

const WHATSAPP = "201553939342";
const STORAGE_KEY = "eldarwish-lucky-wheel";

export default function LuckyWheel() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [canSpin, setCanSpin] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const angle = 360 / prizes.length;

  const background = useMemo(
    () =>
      `conic-gradient(
        ${prizes
          .map(
            (_, i) =>
              `${i % 2 ? "#14532d" : "#a87928"} ${
                i * angle
              }deg ${(i + 1) * angle}deg`
          )
          .join(", ")}
      )`,
    [angle]
  );

  useEffect(() => {
    try {
      const last = localStorage.getItem(STORAGE_KEY);

      if (last && Date.now() - Number(last) < 86400000) {
        setCanSpin(false);
      }
    } catch {}

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function spin() {
    if (spinning || !canSpin) return;

    const index = Math.floor(Math.random() * prizes.length);
    const current = ((rotation % 360) + 360) % 360;

    const target = 360 - (index + 0.5) * angle;
    const extra = 360 * 7 + ((target - current + 360) % 360);

    setSpinning(true);
    setResult(null);
    setRotation(rotation + extra);

    timer.current = setTimeout(() => {
      setResult(prizes[index]);
      setSpinning(false);
      setCanSpin(false);

      try {
        localStorage.setItem(STORAGE_KEY, String(Date.now()));
      } catch {}
    }, 5200);
  }

  function sendWhatsApp() {
    if (!result) return;

    const message = encodeURIComponent(
      `السلام عليكم، طلعت لي نتيجة من عجلة حظ الدَرْويش: ${result} 🎁`
    );

    window.open(
      `https://wa.me/${WHATSAPP}?text=${message}`,
      "_blank"
    );
  }

  return (
    <section dir="rtl" className="lucky-section">
      <div className="lucky-container">

        <div className="lucky-heading">
          <span>🎁 مفاجأة الدَرْويش</span>
          <h2>جرّب حظك مع عجلة الدَرْويش</h2>
          <p>
            لف العجلة وشوف إيه المفاجأة اللي مستنياك النهارده.
          </p>
        </div>

        <div className="wheel-stage">

          <div className="wheel-shadow" />

          <div
            className="wheel"
            style={{
              background,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            {prizes.map((prize, i) => {
              const a = i * angle + angle / 2;

              return (
                <span
                  key={`${prize}-${i}`}
                  className="prize"
                  style={{
                    transform: `rotate(${a}deg) translateY(-140px) rotate(-${a}deg)`,
                  }}
                >
                  {prize}
                </span>
              );
            })}

            <div className="wheel-center">
              <strong>الدَرْويش</strong>
              <small>لفّها!</small>
            </div>
          </div>

          <div className="pointer">
            ▼
          </div>

        </div>

        {result ? (
          <div className="result-box">
            <span>🎉 مبروك!</span>

            <strong>{result}</strong>

            <p>
              ابعت النتيجة على واتساب الدَرْويش عند طلبك.
            </p>

            <button onClick={sendWhatsApp}>
              استخدم الجائزة على واتساب
            </button>
          </div>
        ) : (
          <>
            <button
              className="spin-button"
              onClick={spin}
              disabled={spinning || !canSpin}
            >
              {spinning
                ? "العجلة بتلف..."
                : canSpin
                ? "🎡 لف العجلة"
                : "جرب تاني بكرة"}
            </button>

            <p className="note">
              {canSpin
                ? "محاولة واحدة كل 24 ساعة"
                : "استنى 24 ساعة وجرب حظك من جديد"}
            </p>
          </>
        )}
      </div>

      <style jsx>{`
        .lucky-section {
          width: 100%;
          overflow: hidden;
          padding: 65px 16px 75px;
          background:
            radial-gradient(
              circle at 50% 40%,
              rgba(210, 160, 55, 0.12),
              transparent 35%
            ),
            linear-gradient(
              180deg,
              #061711,
              #08261a,
              #03130d
            );
        }

        .lucky-container {
          max-width: 1100px;
          margin: auto;
          text-align: center;
        }

        .lucky-heading span {
          color: #f2c66d;
          font-size: 14px;
          font-weight: 900;
        }

        .lucky-heading h2 {
          margin: 8px 0;
          color: #fffaf0;
          font-size: clamp(28px, 5vw, 44px);
          font-weight: 1000;
        }

        .lucky-heading p {
          color: rgba(255,255,255,.68);
          font-size: 15px;
        }

        .wheel-stage {
          position: relative;
          width: min(90vw, 430px);
          aspect-ratio: 1;
          margin: 35px auto 25px;
          display: grid;
          place-items: center;
        }

        .wheel-shadow {
          position: absolute;
          width: 80%;
          height: 80%;
          border-radius: 50%;
          background: #000;
          filter: blur(25px);
          opacity: .65;
          transform: translateY(20px);
        }

        .wheel {
          position: relative;
          z-index: 2;
          width: 88%;
          height: 88%;
          border-radius: 50%;
          border: 9px solid #e2b75a;
          box-shadow:
            0 0 0 4px #5e451c,
            0 20px 45px rgba(0,0,0,.5);
          transition:
            transform 5.2s cubic-bezier(.12,.75,.12,1);
        }

        .prize {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 90px;
          margin-left: -45px;
          color: #fffaf0;
          font-size: 13px;
          font-weight: 1000;
          text-align: center;
          line-height: 1.2;
          text-shadow: 0 2px 5px #000;
        }

        .wheel-center {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 92px;
          height: 92px;
          transform: translate(-50%,-50%);
          border: 5px solid #f2c66d;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            #0e5133,
            #062316
          );
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .wheel-center strong {
          font-size: 15px;
        }

        .wheel-center small {
          color: #f2c66d;
          margin-top: 3px;
        }

        .pointer {
          position: absolute;
          z-index: 5;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          color: #f2c66d;
          font-size: 48px;
          line-height: 1;
          filter: drop-shadow(0 4px 4px #000);
        }

        .spin-button,
        .result-box button {
          border: 0;
          border-radius: 999px;
          padding: 15px 34px;
          background: linear-gradient(
            135deg,
            #f6d77e,
            #c18b32
          );
          color: #132316;
          font-size: 17px;
          font-weight: 1000;
          cursor: pointer;
          box-shadow: 0 12px 30px rgba(0,0,0,.3);
        }

        .spin-button:disabled {
          opacity: .7;
          cursor: not-allowed;
        }

        .note {
          color: rgba(255,255,255,.55);
          font-size: 13px;
          margin-top: 10px;
        }

        .result-box {
          width: min(100%,460px);
          margin: auto;
          padding: 24px 18px;
          border: 1px solid rgba(242,198,109,.3);
          border-radius: 24px;
          background: rgba(3,24,15,.85);
        }

        .result-box span {
          color: #f2c66d;
          font-weight: 900;
        }

        .result-box strong {
          display: block;
          margin: 6px 0;
          color: #fff8e8;
          font-size: 29px;
        }

        .result-box p {
          color: rgba(255,255,255,.68);
          font-size: 14px;
        }

        @media (max-width:640px) {
          .lucky-section {
            padding: 48px 14px 58px;
          }

          .lucky-heading h2 {
            font-size: 27px;
          }

          .wheel-stage {
            width: 94vw;
          }

          .prize {
            width: 72px;
            margin-left: -36px;
            font-size: 11px;
          }

          .wheel-center {
            width: 82px;
            height: 82px;
          }
        }
      `}</style>
    </section>
  );
              }
