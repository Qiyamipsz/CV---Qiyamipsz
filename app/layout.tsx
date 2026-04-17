import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "CV Qiyami",
  description: "Curriculum Vitae Qiyami",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
