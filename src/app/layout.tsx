import "./globals.css";
import Navbar from "@/app/home/Navbar";
import FooterSection from "@/app/home/FooterSection";
import type { Metadata } from "next";
import { cabinet } from "@/helpers/fonts";

export const metadata: Metadata = {
  title: "Model website | Good Doctor",
  description: "This is a website to show a clinic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cabinet.variable}`}>
        <Navbar />

        {children}

        <FooterSection />
      </body>
    </html>
  );
}
