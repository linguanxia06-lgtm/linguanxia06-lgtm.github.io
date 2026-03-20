import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kasia-Personal",
    template: "%s | Kasia-Personal",
  },
  description: "用 AI 赋能叙事的短视频编导 & 内容策划，专注于 AI 驱动的创意内容制作。",
  keywords: ["短视频", "AI策划", "编导", "内容创作", "数字人"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: "Kasia-Personal",
    description: "用 AI 赋能叙事的短视频编导 & 内容策划",
    siteName: "Kasia-Personal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kasia-Personal",
    description: "用 AI 赋能叙事的短视频编导 & 内容策划",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
