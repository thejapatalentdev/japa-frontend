"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";

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
        <main className="">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
