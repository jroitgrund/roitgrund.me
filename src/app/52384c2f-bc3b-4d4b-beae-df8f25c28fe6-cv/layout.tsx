import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Jonathan Roitgrund",
  description: "Jonathan Roitgrund",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-[9pt]">
      <body>{children}</body>
    </html>
  );
}
