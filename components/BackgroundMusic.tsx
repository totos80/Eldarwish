"use client";

import { Music2, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onError = () => setAvailable(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("error", onError);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch {
      setAvailable(false);
    }
  };

  if (!available) return null;

  return (
    <>
      <audio ref={audioRef} src="/music/background.mp3" loop preload="none" />
      <button
        type="button"
        className="music-toggle"
        onClick={toggleMusic}
        aria-label={playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
        title={playing ? "إيقاف الموسيقى" : "تشغيل موسيقى الموقع"}
      >
        {playing ? <Volume2 size={19} /> : <Music2 size={19} />}
        <span>{playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}</span>
      </button>
    </>
  );
}
