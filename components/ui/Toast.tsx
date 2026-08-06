"use client";

import { useEffect } from "react";
import {
  CheckCircle,
  AlertCircle,
  Info,
  X
} from "lucide-react";

export type ToastType =
  | "success"
  | "error"
  | "info";

export interface ToastProps {
  open: boolean;

  title: string;

  message?: string;

  type?: ToastType;

  duration?: number;

  onClose: () => void;
}

export default function Toast({
  open,
  title,
  message,
  type = "success",
  duration = 3000,
  onClose,
}: ToastProps) {

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);

  }, [open, duration, onClose]);

  if (!open) return null;

  const colors = {
    success:
      "border-green-300 bg-green-50 text-green-700",

    error:
      "border-red-300 bg-red-50 text-red-700",

    info:
      "border-blue-300 bg-blue-50 text-blue-700",
  };

  const icons = {
    success: (
      <CheckCircle size={24} />
    ),

    error: (
      <AlertCircle size={24} />
    ),

    info: (
      <Info size={24} />
    ),
  };

  return (

    <div className="fixed bottom-6 right-6 z-[9999] w-[360px] max-w-[95%] animate-[fadeIn_.25s_ease]">

      <div
        className={`rounded-2xl border p-5 shadow-2xl ${colors[type]}`}
      >

        <div className="flex items-start gap-4">

          {icons[type]}

          <div className="flex-1">

            <h3 className="font-bold text-lg">

              {title}

            </h3>

            {message && (

              <p className="mt-2 text-sm leading-7">

                {message}

              </p>

            )}

          </div>

          <button

            onClick={onClose}

            className="rounded-lg p-1 transition hover:bg-black/10"

          >

            <X size={18} />

          </button>

        </div>

        <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/40">

          <div
            className="h-full bg-current opacity-40"
            style={{
              animation: `toastProgress ${duration}ms linear forwards`,
            }}
          />

        </div>

      </div>

      <style jsx>{`

        @keyframes toastProgress {

          from {
            width: 100%;
          }

          to {
            width: 0%;
          }

        }

        @keyframes fadeIn {

          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

      `}</style>

    </div>

  );

}
