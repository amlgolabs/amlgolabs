import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header1 from "./components/Header/Header1";
import Footer1 from "./components/Footer/Footer1";
import RebrandingMarquee from "./components/RebrandingMessage";
import RebrandingMessage from "./components/RebrandingMessage";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Welcome to Amlgo Labs",
  description: "Amlgo Labs empowers businesses with AI, GenAI, Machine Learning, and Data Analytics solutions. Unlock data-driven growth with Amlgo Labs today.",
  other: {
    'google-site-verification': '5wCSrDbYEEkN5n80skeTvLxnJB6SYeV1UY4bfehUsOU',
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="5wCSrDbYEEkN5n80skeTvLxnJB6SYeV1UY4bfehUsOU" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <RebrandingMarquee/> */}
        <Header1 />
        <Toaster position="top-right" />
        {children}
        <RebrandingMessage />
        <Footer1 />
      </body>
    </html>
  );
}
