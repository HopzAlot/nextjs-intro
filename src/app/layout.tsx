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
      <body className="bg-[#f7f3ea] text-[#17201a] [font-family:'Trebuchet_MS','Segoe_UI',sans-serif]">
        {children}
      </body>
    </html>
  );
}
