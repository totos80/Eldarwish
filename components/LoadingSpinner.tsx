"use client";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullScreen?: boolean;
}

export default function LoadingSpinner({
  size = "md",
  text = "جارٍ التحميل...",
  fullScreen = false,
}: LoadingSpinnerProps) {

  const sizes = {
    sm: "h-6 w-6 border-2",
    md: "h-10 w-10 border-4",
    lg: "h-16 w-16 border-4",
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-4">

      <div
        className={`
          ${sizes[size]}
          animate-spin
          rounded-full
          border-amber-700
          border-t-transparent
        `}
      />

      <p className="text-sm font-medium text-stone-600">
        {text}
      </p>

    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-16">
      {spinner}
    </div>
  );
}
