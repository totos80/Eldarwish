"use client";

import { Music2, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function BackgroundMusic() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const isMenuPage =
    pathname === "/products" ||
    pathname === "/categories" ||
    pathname === "/offers" ||
    pathname.startsWith("/products/") ||
    pathname.startsWith("/categories/") ||
    pathname.startsWith("/offers/");

  const musicSrc = isMenuPage
    ? "/music/eldarwishsong.mp3"
    : "/music/background.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    audio.src = musicSrc;

    audio.play().then(() => {
      setPlaying(true);
    }).catch(() => {
      setPlaying(false);
    });
  }, [musicSrc]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setPlaying(true);
      } else {
        audio.pause();
        setPlaying(false);
      }
    } catch {
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={musicSrc}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <button
        type="button"
        className="music-toggle"
        onClick={toggleMusic}
        aria-label={playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
        title={playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
      >
        {playing ? <Volume2 size={19} /> : <Music2 size={19} />}
        <span>{playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}</span>
      </button>
    </>
  );
}
