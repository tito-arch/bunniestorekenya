import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/Nav";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BunnieAbc",
  description: "Software Company by the amazing team at BunnieAbc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
      <Toaster richColors />
    </html>
  );
}
