"use client";

import React, { useState } from "react";
import { Sparkles, Gift, X, Trophy } from "lucide-react";

interface Prize {
  option: string;
  code: string;
  color: string;
}

const prizes: Prize[] = [
  { option: "خصم 10%", code: "DARWISH10", color: "#183b2a" },
  { option: "شحن مجاني", code: "FREESHIP", color: "#d97706" },
  { option: "خصم 15%", code: "DARWISH15", color: "#0d2218" },
  { option: "هدية عطارة", code: "GIFT2026", color: "#b45309" },
  { option: "حظ سعيد", code: "", color: "#2d4a3e" },
  { option: "خصم 20%", code: "VIP20", color: "#f59e0b" },
];

export default function HeaderLuckyWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winningPrize, setWinningPrize] = useState<Prize | null>(null);
  const [hasSpun, setHasSpun] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleSpinClick = () => {
    if (mustSpin || hasSpun) return;

    // اختار جائزة عشوائية
    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const degreesPerSegment = 360 / prizes.length;
    
    // حساب الزاوية المطلوبة لتقف العجلة عند الجائزة المحسوبة
    const extraRotations = 360 * 5; 
    const targetDegree = extraRotations + (360 - (prizeIndex * degreesPerSegment + degreesPerSegment / 2));

    setRotation(targetDegree);
    setMustSpin(true);

    setTimeout(() => {
      setMustSpin(false);
      setHasSpun(true);
      setWinningPrize(prizes[prizeIndex]);
    }, 4500); // مدة الدوران 4.5 ثانية
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-5 right-5 z-[999] flex items-center gap-2 rounded-full border border-amber-300 bg-[#183b2a] px-4 py-2.5 font-bold text-amber-200 shadow-2xl transition hover:scale-105"
      >
        <Sparkles className="h-5 w-5 text-amber-400 animate-pulse" />
        <span>عجلة الحظ والهدايا</span>
      </button>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-amber-300/30 bg-gradient-to-r from-[#0b1b13] via-[#183b2a] to-[#0b1b13] py-6 shadow-inner">
      {/* زر إغلاق الشريط */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-amber-200/70 transition hover:bg-black/40 hover:text-white"
        aria-label="إغلاق عجلة الحظ"
      >
        <X size={18} />
      </button>

      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        
        {/* النصوص التشويقية */}
        <div className="text-center md:text-right">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300 mb-2">
            <Sparkles size={14} className="animate-spin" />
            عروض حصرية لفترة محدودة
          </div>
          <h2 className="text-2xl font-black text-amber-100 sm:text-3xl font-['Traditional_Arabic','Andalus','Amiri',serif]">
            دور العجلة واكسب خصمك الآن! 🎁
          </h2>
          <p className="mt-1 text-sm text-amber-200/80 max-w-md">
            اضغط على زر الدوران واستمتع بهدايا فورية وخصومات حصرية على جميع منتجات العطارة والبهارات.
          </p>
        </div>

        {/* عجلة الحظ الـ 3D التفاعلية */}
        <div className="relative flex items-center justify-center">
          
          {/* مؤشر السهم الذهبي العلوي */}
          <div className="absolute -top-3 z-30 flex flex-col items-center">
            <div className="h-0 w-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-amber-400 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" />
          </div>

          {/* هالة ضوئية خلف العجلة */}
          <div className="absolute h-64 w-64 rounded-full bg-amber-400/20 blur-2xl animate-pulse" />

          {/* هيكل العجلة الدوارة */}
          <div className="relative h-64 w-64 rounded-full border-4 border-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.4)] bg-[#183b2a] overflow-hidden">
            <div
              className="h-full w-full rounded-full transition-all ease-out"
              style={{
                transform: `rotate(${rotation}deg)`,
                transitionDuration: mustSpin ? "4500ms" : "0ms",
                background: `conic-gradient(
                  #183b2a 0deg 60deg, 
                  #d97706 60deg 120deg, 
                  #0d2218 120deg 180deg, 
                  #b45309 180deg 240deg, 
                  #2d4a3e 240deg 300deg, 
                  #f59e0b 300deg 360deg
                )`,
              }}
            >
              {/* خيارات الجوائز داخل العجلة */}
              {prizes.map((prize, idx) => {
                const angle = (360 / prizes.length) * idx + 30;
                return (
                  <div
                    key={idx}
                    className="absolute left-1/2 top-1/2 h-1/2 w-8 -translate-x-1/2 origin-bottom text-center text-xs font-bold text-amber-100 drop-shadow-md"
                    style={{
                      transform: `rotate(${angle}deg)`,
                    }}
                  >
                    <span className="inline-block pt-3 whitespace-nowrap [writing-mode:vertical-rl]">
                      {prize.option}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* الزر الذهبي الأوسط للدوران */}
            <button
              onClick={handleSpinClick}
              disabled={mustSpin || hasSpun}
              className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-amber-200 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-600 font-black text-[#183b2a] shadow-[0_0_15px_rgba(0,0,0,0.6)] transition active:scale-95 disabled:opacity-80"
            >
              {mustSpin ? (
                <Sparkles className="h-6 w-6 animate-spin text-[#183b2a]" />
              ) : hasSpun ? (
                <Trophy className="h-6 w-6 text-[#183b2a]" />
              ) : (
                <span className="text-xs font-black">جرب حظك</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* نافذة الجائزة عند الفوز */}
      {winningPrize && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-amber-300/60 bg-[#183b2a] p-6 text-center shadow-2xl">
            <button
              onClick={() => setWinningPrize(null)}
              className="absolute left-3 top-3 text-amber-200/70 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/20 text-amber-300">
              <Gift size={36} className="animate-bounce" />
            </div>

            <h3 className="text-2xl font-black text-amber-100">مبروك! 🎉</h3>
            <p className="mt-1 text-sm text-amber-200/80">لقد حصلت على:</p>
            
            <div className="my-4 rounded-xl border border-amber-300/30 bg-black/30 p-3 text-xl font-black text-amber-300">
              {winningPrize.option}
            </div>

            {winningPrize.code && (
              <div className="mb-4 text-xs text-amber-200/70">
                استخدم الكود: <span className="font-mono font-bold text-amber-400">{winningPrize.code}</span> عند الدفع
              </div>
            )}

            <button
              onClick={() => setWinningPrize(null)}
              className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 py-3 font-bold text-[#183b2a] shadow-lg transition hover:brightness-110"
            >
              استمتع بالتسوق الآن
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
