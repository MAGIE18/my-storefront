import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
// We use relative paths to ensure your i3 laptop doesn't hit alias errors
import Navbar from "../components/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyStore | Portfolio Project",
  description: "High-performance Headless E-commerce Storefront",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* The Navbar stays at the top of every page */}
        <Navbar />
        
        {/* This wrapper ensures your content has enough space */}
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}