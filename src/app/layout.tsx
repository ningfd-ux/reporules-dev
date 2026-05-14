import type { Metadata } from "next";
import "./globals.css";
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
      </body>
    </html>
  );
}
