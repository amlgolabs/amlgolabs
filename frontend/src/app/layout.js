 import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header1 from "./components/Header/Header1";
import Footer1 from "./components/Footer/Footer1";
import RebrandingMarquee from "./components/RebrandingMessage";
import RebrandingMessage from "./components/RebrandingMessage";
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
  keywords: `
    Amlgo Labs, Amlgo, Labs, AI solutions, generative AI, machine learning, AI innovation,
    next-gen AI solutions for businesses, cutting-edge machine learning and AI services, AI-driven analytics for enterprises,
    generative ai, predictive ai, ai generative, ai data analytics, ai for data analytics, ai software, use ai,
    ai and data analytics, data analytics ai, data analytics and ai, ai learning, ai solutions for business,
    leading ai, data analytics with ai, ai prediction, ai predictive, ai how to use, ai of ai, startup in ai,
    ai helping, ai for automotive industry, application of ai in automotive industry,
    top it company in gurgaon, it company in banglore, it staffing companies in india,
    best it job consultancy in bangalore for freshers, india it outsourcing companies, it lead generation companies in india,
    best consultancy in pune for it jobs freshers, best it recruitment agencies in india, best it outsourcing companies in india,
    best...
  `,
  icons: {
    icon: "/favicon.ico", // <- ADD THIS LINE
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <RebrandingMarquee/> */}
        <Header1 />
        {children}
        <RebrandingMessage />
        <Footer1 />
      </body>
    </html>
  );
}
