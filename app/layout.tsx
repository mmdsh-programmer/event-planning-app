import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const iranYekan = localFont({
  src: "./fonts/IranYekan.ttf",
  variable: "--font-iran-yekan",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "رزرو رویداد",
  description: "مرجع رزرو رویداد های مهم",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${iranYekan.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
