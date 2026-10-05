"use client";

import { useState } from "react";
import { ModalDescription, ModalEyebrow, ModalShell, ModalTitle } from "@/components/ui/Modal";
import { EnquiryForm } from "./EnquiryForm";
import { EnquirySuccess } from "./EnquirySuccess";

interface ProjectEnquiryModalProps {
  onClose: () => void;
}

/** Thin orchestrator: owns the form → success stage, delegates everything else. */
export function ProjectEnquiryModal({ onClose }: ProjectEnquiryModalProps) {
  const [sentEmail, setSentEmail] = useState<string | null>(null);
  const sent = sentEmail !== null;

  return (
    <ModalShell
      label="Start a project"
      onClose={onClose}
      header={
        <>
          <ModalEyebrow>Start a project</ModalEyebrow>
          <ModalTitle>{sent ? "Request received" : "Tell us about your project"}</ModalTitle>
          {!sent && (
            <ModalDescription>
              Answer a few business questions so we reply with a real plan, timeline and quote.
              No spam- we only use your email to respond to your enquiry.
            </ModalDescription>
          )}
        </>
      }
    >
      {sent ? (
        <EnquirySuccess visitorEmail={sentEmail} onClose={onClose} />
      ) : (
        <EnquiryForm onSubmitted={setSentEmail} />
      )}
    </ModalShell>
  );
}
