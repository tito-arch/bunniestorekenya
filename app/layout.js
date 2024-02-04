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
      <head>
        <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "kwlbduguj4");
</script>
      </head>
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
      <Toaster richColors />
    </html>
  );
}
