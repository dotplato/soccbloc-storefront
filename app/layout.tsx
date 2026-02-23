import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Footer } from "@/components/footer";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Socc Bloc",
  description: "Socc Bloc is a store for Sub Soccer products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
