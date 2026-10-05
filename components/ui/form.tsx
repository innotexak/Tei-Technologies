import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

export const FIELD_INPUT_CLASS =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 dark:border-white/15 dark:bg-navy-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-teal-300";

export function Field({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-semibold text-navy-900 dark:text-slate-100">
        {label} {required && <span className="text-accent-700 dark:text-teal-300">*</span>}
      </label>
      {children}
    </div>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${FIELD_INPUT_CLASS} ${props.className ?? ""}`} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${FIELD_INPUT_CLASS} ${props.className ?? ""}`} />;
}

export function SelectField(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${FIELD_INPUT_CLASS} ${props.className ?? ""}`} />;
}

export function FormSectionTitle({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
      {children}
    </p>
  );
}
