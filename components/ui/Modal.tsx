"use client";

import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

interface ModalShellProps {
  label: string;
  onClose: () => void;
  header: ReactNode;
  children: ReactNode;
  maxWidthClassName?: string;
}

/**
 * Accessible modal shell: backdrop dismiss, Escape to close, body scroll-lock.
 * Keep styling dumb- callers supply the header + body.
 */
export function ModalShell({
  label,
  onClose,
  header,
  children,
  maxWidthClassName = "max-w-2xl",
}: ModalShellProps) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-navy-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <div
        className={`flex max-h-[92vh] w-full ${maxWidthClassName} flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl dark:bg-navy-900 dark:ring-1 dark:ring-white/10`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 bg-navy-950 px-6 py-5 sm:px-8">
          <div className="min-w-0 flex-1">{header}</div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function ModalEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-teal-200">
      {children}
    </p>
  );
}

export function ModalTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">{children}</h2>
  );
}

export function ModalDescription({ children }: { children: ReactNode }) {
  return <p className="mt-1 text-[13px] leading-relaxed text-slate-400">{children}</p>;
}
