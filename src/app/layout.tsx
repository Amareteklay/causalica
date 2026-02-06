import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Causalica",
    template: "%s · Causalica",
  },
  description: "Practical causal inference — a modern hub for learning and applying causal thinking.",
  metadataBase: new URL("https://causalica.com"),
  openGraph: {
    title: "Causalica",
    description:
      "Practical causal inference — a modern hub for learning and applying causal thinking.",
    url: "https://causalica.com",
    siteName: "Causalica",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
