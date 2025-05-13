


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header1 from "./components/Header/Header1";
import Footer1 from "./components/Footer/Footer1";
import RebrandingMessage from "./components/RebrandingMessage";
import Head from "next/head";
import { PopupProvider } from "./context/PopupContext";
import PopupForm from "./components/PopupForm";
import { ContactPopupProvider } from "./context/ContactPopupContext"; // Import new provider
import ContactPopupForm from "./components/ContactPopupForm"; // Import new contact popup component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amlgo Labs - Business Solutions with Data and AI",
  description: "Whizzes In Analytical Algorithms And Machine Learning. Bridging the gap between Data and Decisions. Risk Modelling and Regulatory Reporting. Recruitment and Training.",
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
    icon: "/favicon.ico",
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

        <meta name="robots" content="index, follow" />



        <meta property="og:type" content="website" />
        <meta property="og:title" content="Amlgo Labs | AI, GenAI Agent & Data Innovation" />
        <meta property="og:description" content="Amlgo Labs helps enterprises transform with AI, GenAI, Machine Learning, and Data Analytics solutions. Follow us for insights and innovation." />
        <meta property="og:url" content="https://www.amlgolabs.com" />
        <meta property="og:site_name" content="Amlgo Labs" />
        <meta property="og:image" content="https://www.amlgolabs.com/logo/logo21March.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Amlgo Labs – AI, GenAI & Data Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amlgo Labs on Twitter | AI, GenAI & Data Innovation" />
        <meta name="twitter:description" content="Explore Amlgo Labs on Twitter for real-time updates in AI, GenAI, Machine Learning, and Data Engineering. Join the conversation on tech innovation and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Amlgo Labs on LinkedIn | AI, GenAI & Data Solutions for Enterprises" />
        <meta property="og:description" content="Amlgo Labs helps enterprises transform with AI, GenAI, Machine Learning, and Data Analytics solutions. Follow us for insights and innovation." />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />


      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PopupProvider>
          <ContactPopupProvider>
            {/* <RebrandingMarquee/> */}
            <Header1 />
            {children}
            <RebrandingMessage />
            <Footer1 />
            <PopupForm />
            <ContactPopupForm />
          </ContactPopupProvider>
        </PopupProvider>
      </body>
    </html>
  );
}