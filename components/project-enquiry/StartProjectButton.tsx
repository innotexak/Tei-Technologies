"use client";

import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { useProjectEnquiry } from "./ProjectEnquiryContext";

interface StartProjectButtonProps {
  className?: string;
  children?: ReactNode;
  /** e.g. close the mobile nav before opening the modal. */
  onClick?: () => void;
}

/** Any "Start a project" CTA across the site opens the global modal. */
export function StartProjectButton({ className = "", children, onClick }: StartProjectButtonProps) {
  const { open } = useProjectEnquiry();

  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        open();
      }}
      className={className}
    >
      {children ?? (
        <>
          Start a project
          <ArrowRight size={15} />
        </>
      )}
    </button>
  );
}
