import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Putra Dunia Logistik",
  description:
    "Putra Dunia Logistik: Solusi Pengiriman Barang Terpercaya di Indonesia. Kami menawarkan layanan pengiriman barang lebih cepat dari yang Anda pikirkan, aman, dan terjangkau dengan jaringan luas di seluruh nusantara.",
  openGraph: {
    title: "Putra Dunia Logistik - Solusi Logistik Anda",
    description:
      "Dengan Putra Dunia Logistik, pengiriman barang Anda lebih cepat dari yang Anda pikirkan, aman, dan terpercaya. Kami adalah solusi logistik terbaik di Indonesia.",
    url: "https://www.putradunialogistik.com/", // Replace with actual URL
    type: "website",
    locale: "id_ID",
    siteName: "Putra Dunia Logistik",
    images: [
      {
        url: "https://utfs.io/f/1T6lrtsFpELwUAqEIw6Y3McOxCBkioa20rvzyTE9Dtb6sfZu", // Replace with your actual image URL
        width: 800,
        height: 600,
        alt: "Logo Putra Dunia Logistik - lebih cepat dari yang Anda pikirkan",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
