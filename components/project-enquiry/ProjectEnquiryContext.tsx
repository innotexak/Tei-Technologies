"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { ProjectEnquiryModal } from "./ProjectEnquiryModal";

interface ProjectEnquiryContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ProjectEnquiryContext = createContext<ProjectEnquiryContextValue | null>(null);

/** Global provider- mount once in `app/layout.tsx`. Renders the modal when open. */
export function ProjectEnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return (
    <ProjectEnquiryContext.Provider value={value}>
      {children}
      {isOpen && <ProjectEnquiryModal onClose={close} />}
    </ProjectEnquiryContext.Provider>
  );
}

/** Fail-fast: surfaces misuse at dev time instead of silently doing nothing. */
export function useProjectEnquiry(): ProjectEnquiryContextValue {
  const ctx = useContext(ProjectEnquiryContext);
  if (!ctx) {
    throw new Error("useProjectEnquiry must be used inside <ProjectEnquiryProvider>");
  }
  return ctx;
}
