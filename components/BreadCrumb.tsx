"use client";

import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({
  items,
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 overflow-x-auto"
    >
      <ol className="flex min-w-max items-center gap-2 rounded-xl bg-stone-50 px-4 py-3">

        <li>
          <Link
            href="/"
            className="flex items-center gap-2 text-stone-600 transition hover:text-amber-700"
          >
            <Home size={18} />
            الرئيسية
          </Link>
        </li>

        {items.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            className="flex items-center gap-2"
          >
            <ChevronLeft
              size={16}
              className="text-stone-400"
            />

            {item.href ? (
              <Link
                href={item.href}
                className="text-stone-600 transition hover:text-amber-700"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-amber-700">
                {item.label}
              </span>
            )}
          </li>
        ))}

      </ol>
    </nav>
  );
}
