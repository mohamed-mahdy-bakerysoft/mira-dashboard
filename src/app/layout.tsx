import type { Metadata } from "next";
import localFont from "next/font/local";
import { Rethink_Sans } from 'next/font/google';
import "./globals.css";
// import DashboardWrapper from "./dashboardWrapper";
// import ProfileWrapper from "./profileWrapper";

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

export const rethinkSans = Rethink_Sans({
  subsets: ['latin'],
  variable: '--font-rethink-sans',
  weight: "400",
});

export const metadata: Metadata = {
  title: "The ChatGPT of Businesses",
  description: "Mira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rethinkSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
