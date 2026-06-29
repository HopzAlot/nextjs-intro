import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextStart | Intern Practice",
  description: "A simple Next.js practice website for learning project basics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
