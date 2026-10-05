"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/** Light / dark toggle. Rendered in the site header (desktop + mobile nav). */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-100 hover:text-navy-900 dark:border-white/15 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white ${className}`}
    >
      {mounted ? <span className="sr-only">{isDark ? "Dark" : "Light"}</span> : null}
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
