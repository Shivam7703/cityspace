import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { footer } from "@/data/homeData";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"]
});



export const metadata: Metadata = {
  title: "City Space",
  description: "Developed in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} text-black bg-white`}>
        <Header />
        {children}
        <Footer footer={footer} />
      </body>
    </html>
  );
}