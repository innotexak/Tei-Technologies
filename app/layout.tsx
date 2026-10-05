import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ProjectEnquiryProvider } from "@/components/project-enquiry";
import { ThemeProvider } from "@/components/theme";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://teitechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tei Technologies- Custom Software for Individuals, Businesses & Government",
    template: "%s | Tei Technologies",
  },
  description:
    "Tei Technologies is an enterprise software company building custom web & mobile apps for individuals, firms and government- and the parent company behind the products TeiCraft and TeiWill.",
  openGraph: {
    title: "Tei Technologies",
    description:
      "Custom software development for individuals, businesses & government. Parent company of TeiCraft and TeiWill.",
    url: siteUrl,
    siteName: "Tei Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-white text-slate-800 dark:bg-navy-950 dark:text-slate-200">
        <ThemeProvider>
          <ProjectEnquiryProvider>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </ProjectEnquiryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
