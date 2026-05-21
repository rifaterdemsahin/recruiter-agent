import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recruiter Agent — Rifat Erdem Sahin",
  description: "AI-powered recruiter platform for Rifat Erdem Sahin. Search CV, ask questions, match roles, generate reference letters, and download documents.",
  keywords: ["Rifat Erdem Sahin", "DevOps", "AI", "Cloud", "Recruiter", "CV", "Hiring"],
  openGraph: {
    title: "Recruiter Agent — Rifat Erdem Sahin",
    description: "AI-powered recruiter platform. Ask questions, search CV, match roles, download documents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
