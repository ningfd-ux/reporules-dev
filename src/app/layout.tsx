import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RepoRules.dev — AI Coding Standards Generator",
  description:
    "Generate repository-aware AI coding standards for Cursor, Claude Code, Copilot and AI agents.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "RepoRules.dev — AI Coding Standards Generator",
    description:
      "Generate repository-aware AI coding standards for Cursor, Claude Code, Copilot and AI agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9QVY2VBRN4"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-9QVY2VBRN4");
          `}
        </Script>
      </body>
    </html>
  );
}
