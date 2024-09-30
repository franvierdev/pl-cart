import type { Metadata } from "next";

import "./globals.css";
import "./data.json";

export const metadata: Metadata = {
  title: "Product List with Cart",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-rht antialiased bg-[hsl(20,50%,98%)] `}>
        {children}
      </body>
    </html>
  );
}