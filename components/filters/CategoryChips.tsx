"use client";

type Props = {
  items: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function CategoryChips({
  items,
  value,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => onChange("")}
        className={`rounded-full px-5 py-2 transition ${
          value === ""
            ? "bg-amber-700 text-white"
            : "bg-amber-100 hover:bg-amber-200"
        }`}
      >
        الكل
      </button>

      {items.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`rounded-full px-5 py-2 transition ${
            value === item
              ? "bg-amber-700 text-white"
              : "bg-amber-100 hover:bg-amber-200"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
