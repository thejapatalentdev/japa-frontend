"use client";
import { Poppins } from "next/font/google";
import Footer from "@/Components/Footer/Footer";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
