import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Safarnama | Northern Pakistan Travel",
  description:
    "Plan guided trips to Hunza, Skardu, Naran, and the northern valleys of Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f5efe3] text-[#18231d] [font-family:'Trebuchet_MS','Segoe_UI',sans-serif]">
        {children}
      </body>
    </html>
  );
}
