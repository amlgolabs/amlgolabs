import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Partners from "./components/Partners";
import WhitePaper from "./components/WhitePaper";
import HomeServices from "./components/HomeServices";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Achievements from "./components/Achievements";
import CTA from "./components/CTA";
import CaseStudies from "./components/CaseStudies";
import CTASection from "./components/CTA";
import RebrandingMarquee from "./components/RebrandingMessage";

export default function Home() {

  const caseStudiesData = [
    {
      id: 1,
      title: "Disrupting Industries with GenAI : Amlgo Labs at the Helm",
      image: "/Home/casestudy1.jpg",
      description: "As Generative AI redefines industries, Amlgo Labs stands at the forefront, helping businesses unlock new levels of innovation and growth.",
      link : "/documents/how_generative_ai_is_disrupting_entindustries_and_how_amlgo_labs_is_leading_the_charge.pdf"
    },
    {
      id: 2,
      title: "Helping Banks with MAS610 Implementation",
      image: "/Home/casestudy2.jpg",
      description: "Empowering banks with seamless MAS610 reporting and compliance through robust solutions.",
      link : "/documents/mas610casestudy.pdf"
    },
    {
      id: 3,
      title: "AI Use Cases: Transforming the Automotive Industry",
      image: "/Home/casestudy3.jpg",
      description: "Discover how AI is revolutionizing the automotive industry with top use cases in 2024.",
      link : "/documents/automotiveusecases.pdf"
    },
  ];

  return (
    <div>
      {/* <RebrandingMarquee/> */}
      <Hero/>
      <Clients/>
       <WhitePaper/>
      <Partners/>
      <HomeServices/>
   
      <Achievements/>
      {/* <CaseStudies/> */}
      <CaseStudies caseStudies={caseStudiesData} />
      
      <CTASection
      heading="Empower Your Business with Data Driven Solution & Generative AI"
      description="Unlock the power of data and AI to drive innovation, efficiency, and growth."
      buttonText="Get Started Today"
      imageSrc="/cta.png"
    />
    </div>
  );
}
