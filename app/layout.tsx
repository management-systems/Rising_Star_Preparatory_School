import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rising Star Preparatory School",
  description: "A trusted early childhood education center for ages 2–6. Play-based learning, qualified educators, and a safe campus. Admissions open for 2026–27.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&family=Lora:ital@1&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
