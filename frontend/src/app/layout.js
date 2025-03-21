import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header1 from "./components/Header/Header1";
import Footer1 from "./components/Footer/Footer1";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header1/>
        {children}
        <Footer1/>
      </body>
    </html>
  );
}
