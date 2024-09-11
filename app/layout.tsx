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
  title: "Sahabat Baru Cargo",
  description: "Sahabat Baru Cargo: Solusi Pengiriman Barang Terpercaya di Indonesia. Kami menawarkan layanan pengiriman barang cepat, aman, dan terjangkau dengan jaringan luas di seluruh nusantara.",
  openGraph: {
    title: "Sahabat Baru Cargo - Solusi Pengiriman Terpercaya",
    description: "Sahabat Baru Cargo memberikan layanan pengiriman cepat, aman, dan terpercaya untuk semua kebutuhan logistik Anda di Indonesia.",
    url: "https://sahabatbarucargo.com", // Replace with actual URL
    type: "website",
    locale: "id_ID",
    siteName: "Sahabat Baru Cargo",
    images: [
      {
        url: "https://example.com/image.jpg", // Replace with your actual image URL
        width: 1600,
        height: 900,
        alt: "Sahabat Baru Cargo - Pengiriman Barang Murah Terpercaya",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
