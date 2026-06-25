import type { Metadata } from "next";
import { Inter, Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/next';

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("font-sans", notoSans.variable, playfairDisplayHeading.variable)}>
      {/* We added cursor-none right here below! */}
      <body className={`${inter.className} cursor-none`}>
        <CustomCursor /> 
        {children}
        <Analytics />
      </body>
    </html>
  );
}