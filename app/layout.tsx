import type { Metadata } from "next";
import "./globals.css";
import Taskbar from "@/components/Taskbar";

export const metadata: Metadata = {
  title: "Junsei Ogawa - Portfolio",
  description: "Junsei Ogawa's portfolio — App Developer. 2005年生まれ、20歳。",
  openGraph: {
    title: "Junsei Ogawa - Portfolio",
    description: "App Developer | JavaScript / TypeScript / React Native / Tauri",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body style={{ fontFamily: '"MS Sans Serif", "Segoe UI", Arial, sans-serif' }}>
        <div style={{ minHeight: "calc(100vh - 30px)", paddingBottom: 30 }}>
          {children}
        </div>
        <Taskbar />
      </body>
    </html>
  );
}

