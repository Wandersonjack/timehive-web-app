// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import ClientLayout from "./clientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timehive - Pomodoro Timer for Enhanced Productivity",
  description:
    "Boost your productivity with Timehive's intuitive Pomodoro timer. Manage tasks effectively and stay focused throughout your day.",
  keywords: "pomodoro, timer, productivity, time management, focus",
  openGraph: {
    title: "TimerHive - Boost Your Productivity",
    description:
      "Enhance your productivity with TimerHive, the ultimate Pomodoro timer app.",
    url: "https://timehiveapp.com",
    siteName: "TimerHive",
    images: [
      {
        url: "https://timehiveapp.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TimerHive - Boost Your Productivity",
    description:
      "Enhance your productivity with TimerHive, the ultimate Pomodoro timer app.",
    images: ["https://timerhiveapp.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
      <GoogleAnalytics gaId="G-1TQQYE8GXK" />
    </html>
  );
}
