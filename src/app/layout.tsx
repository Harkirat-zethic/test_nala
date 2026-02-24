import type { Metadata } from "next";
import { Outfit, Urbanist, Afacad } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit-family",
  subsets: ["latin"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist-family",
  subsets: ["latin"],
  display: "swap",
});

const afacad = Afacad({
  variable: "--font-afacad-family",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NALA Properties | Specialist Disability Accommodation",
  description:
    "High Quality Specialist Disability Accommodation by Nanak Accessible Living Australia. Purpose-built SDA homes with High Physical Support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${urbanist.variable} ${afacad.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
