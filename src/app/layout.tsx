import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sayon Mondal | Portfolio",
  description: "Innovative Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We added cursor-none right here below! */}
      <body className={`${inter.className} cursor-none`}>
        <CustomCursor /> 
        {children}
      </body>
    </html>
  );
}