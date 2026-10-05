"use client";

import { CheckCircle2 } from "lucide-react";

interface EnquirySuccessProps {
  visitorEmail: string;
  onClose: () => void;
}

/** Confirmation shown after the brief has been sent to the team. */
export function EnquirySuccess({ visitorEmail, onClose }: EnquirySuccessProps) {
  return (
    <div className="overflow-y-auto bg-white px-6 py-10 text-center sm:px-10 dark:bg-navy-900">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-500/10">
        <CheckCircle2 size={28} className="text-emerald-600 dark:text-emerald-300" />
      </span>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-navy-900 dark:text-white">
        Request received
      </h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        Thanks- your project brief is with our team. We&apos;ll reply to{" "}
        <span className="font-semibold text-navy-900 dark:text-white">{visitorEmail}</span>{" "}
        within 1–2 business days with next steps.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-7 inline-flex items-center justify-center rounded-full bg-navy-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
      >
        Done
      </button>
    </div>
  );
}
