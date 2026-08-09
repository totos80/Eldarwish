"use client";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      className={`mb-10 flex flex-col ${alignment[align]}`}
    >
      <span className="mb-3 h-1 w-20 rounded-full bg-amber-600" />

      <h2 className="text-3xl font-extrabold text-stone-900 md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
