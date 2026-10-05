/**
 * Public API of the project-enquiry feature.
 * Pages and layout components import only from here.
 */
export { ProjectEnquiryProvider, useProjectEnquiry } from "./ProjectEnquiryContext";
export { ProjectEnquiryModal } from "./ProjectEnquiryModal";
export { StartProjectButton } from "./StartProjectButton";
export type { ProjectEnquiryFormData } from "./types";
export { validateEnquiryForm } from "./validation";
export { buildEnquiryBody, buildEnquiryHtml, buildEnquirySubject } from "./enquiry-mail";
