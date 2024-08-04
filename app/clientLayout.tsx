// app/clientLayout.tsx

"use client";

import { usePageTracking } from "./hooks/usePageTracking";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  usePageTracking();

  return <>{children}</>;
}
