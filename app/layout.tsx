import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open When...",
  description: "A collection of letters for the days you need them",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#faf8f5] text-[#3d2e22]">
        {children}
      </body>
    </html>
  );
}
