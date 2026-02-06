import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Inter, Source_Serif_4 } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Causalica",
    template: "%s · Causalica",
  },
  description: "Practical causal inference — a modern hub for learning and applying causal thinking.",
  metadataBase: new URL("https://causalica.com"),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Causalica",
    description: "Practical causal inference — a modern hub for learning and applying causal thinking.",
    url: "https://causalica.com",
    siteName: "Causalica",
    type: "website",
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
