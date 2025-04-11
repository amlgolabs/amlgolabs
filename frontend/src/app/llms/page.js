// import React from 'react'
// import Hero from '../components/PagesComponents/CapabilitiesPages/Hero'
// import NumberInfoBox from '../components/PagesComponents/CapabilitiesPages/NumberInfoBox'
// import BenefitsList from '../components/PagesComponents/CapabilitiesPages/BenefitsList'
// import IndustryFocus from '../components/PagesComponents/CapabilitiesPages/IndustryFocus'
// import InformationalStrip from '../components/PagesComponents/CapabilitiesPages/InformationalStrip'
// import SolutionsGrid from '../components/PagesComponents/CapabilitiesPages/SolutionsGrid'

// const page = () => {
//   return (
//     <div>
//         <Hero 
//   videoSrc="/capabilities/herobackground3.mp4"
//   heading="Embrace the future with transformative power of large language models."
//   description="Your business thrives on efficiency, innovation, and insightful decision-making. Large Language Models (LLMs) represent a paradigm shift in how we interact with and leverage data, offering unprecedented opportunities for automation, personalization, and intelligent insights. Amlgo Labs can help you harness the transformative power of LLMs to drive operational excellence, unlock new growth avenues, and achieve a sustainable competitive advantage."
// />

// <NumberInfoBox/>
// <BenefitsList/>
// <SolutionsGrid/>
// <InformationalStrip/>
// <IndustryFocus/>
//     </div>
//   )
// }

// export default page





// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Hero from "../components/PagesComponents/CapabilitiesPages/Hero";
// import NumberInfoBox from "../components/PagesComponents/CapabilitiesPages/NumberInfoBox";
// import BenefitsList from "../components/PagesComponents/CapabilitiesPages/BenefitsList";
// import IndustryFocus from "../components/PagesComponents/CapabilitiesPages/IndustryFocus";
// import InformationalStrip from "../components/PagesComponents/CapabilitiesPages/InformationalStrip";
// import SolutionsGrid from "../components/PagesComponents/CapabilitiesPages/SolutionsGrid";

// const Page = () => {
//   const containerRef = useRef(null);

//   // Track scroll progress for animation
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Smooth fade-out effect for Hero section
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
//   const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

//   // Fade-in & slide-up effect for sections
//   const sectionOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
//   const sectionTranslateY = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);

//   return (
//     <div ref={containerRef}>
//       {/* Hero Section - Shrinks & Fades Out */}
//       <motion.div style={{ opacity: heroOpacity, scale: heroScale }}>
//         <Hero
//           videoSrc="/capabilities/herobackground3.mp4"
//           heading="Embrace the future with transformative power of large language models."
//           description="Your business thrives on efficiency, innovation, and insightful decision-making. Large Language Models (LLMs) represent a paradigm shift in how we interact with and leverage data, offering unprecedented opportunities for automation, personalization, and intelligent insights. Amlgo Labs can help you harness the transformative power of LLMs to drive operational excellence, unlock new growth avenues, and achieve a sustainable competitive advantage."
//         />
//       </motion.div>

//       {/* Sections with Fade-in & Slide-up Animations */}
//       <motion.div style={{ opacity: sectionOpacity, y: sectionTranslateY }}>
//         <NumberInfoBox />
//       </motion.div>

//       <motion.div style={{ opacity: sectionOpacity, y: sectionTranslateY }}>
//         <BenefitsList />
//       </motion.div>

//       <motion.div style={{ opacity: sectionOpacity, y: sectionTranslateY }}>
//         <SolutionsGrid />
//       </motion.div>

//       <motion.div style={{ opacity: sectionOpacity, y: sectionTranslateY }}>
//         <InformationalStrip />
//       </motion.div>

//       <motion.div style={{ opacity: sectionOpacity, y: sectionTranslateY }}>
//         <IndustryFocus />
//       </motion.div>
//     </div>
//   );
// };

// export default Page;



// "use client";
// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Hero from "../components/PagesComponents/CapabilitiesPages/Hero";
// import NumberInfoBox from "../components/PagesComponents/CapabilitiesPages/NumberInfoBox";
// import BenefitsList from "../components/PagesComponents/CapabilitiesPages/BenefitsList";
// import IndustryFocus from "../components/PagesComponents/CapabilitiesPages/IndustryFocus";
// import InformationalStrip from "../components/PagesComponents/CapabilitiesPages/InformationalStrip";
// import SolutionsGrid from "../components/PagesComponents/CapabilitiesPages/SolutionsGrid";

// const Page = () => {
//   return (
//     <div>
//       {/* Hero Section - No animation */}
//       <Hero
//         videoSrc="/capabilities/herobackground3.mp4"
//         heading="Embrace the future with transformative power of large language models."
//         description="Your business thrives on efficiency, innovation, and insightful decision-making. Large Language Models (LLMs) represent a paradigm shift in how we interact with and leverage data, offering unprecedented opportunities for automation, personalization, and intelligent insights. Amlgo Labs can help you harness the transformative power of LLMs to drive operational excellence, unlock new growth avenues, and achieve a sustainable competitive advantage."
//       />

//       {/* Animated Sections */}
//       <AnimatedSection delay={0.2}>
//         <NumberInfoBox />
//       </AnimatedSection>

//       <AnimatedSection delay={0.3}>
//         <BenefitsList />
//       </AnimatedSection>

//       <AnimatedSection delay={0.4}>
//         <SolutionsGrid />
//       </AnimatedSection>

//       <AnimatedSection delay={0.5}>
//         <InformationalStrip />
//       </AnimatedSection>

//       <AnimatedSection delay={0.6}>
//         <IndustryFocus />
//       </AnimatedSection>
//     </div>
//   );
// };

// export default Page;

// /* Utility Component for Scroll Animations */
// const AnimatedSection = ({ children, delay = 0 }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50, scale: 0.95 }}
//       animate={{
//         opacity: isInView ? 1 : 0,
//         y: isInView ? 0 : 50,
//         scale: isInView ? 1 : 0.95,
//       }}
//       transition={{
//         duration: 0.8,
//         ease: "easeInOut",
//         delay: delay, // Staggered animation
//       }}
//       style={{
//         overflow: "hidden",
//         marginBottom: "80px", // More space between sections
//         padding: "20px 0", // Adds breathing room
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };


// "use client";
// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Hero from "../components/PagesComponents/CapabilitiesPages/Hero";
// import NumberInfoBox from "../components/PagesComponents/CapabilitiesPages/NumberInfoBox";
// import BenefitsList from "../components/PagesComponents/CapabilitiesPages/BenefitsList";
// import IndustryFocus from "../components/PagesComponents/CapabilitiesPages/IndustryFocus";
// import InformationalStrip from "../components/PagesComponents/CapabilitiesPages/InformationalStrip";
// import SolutionsGrid from "../components/PagesComponents/CapabilitiesPages/SolutionsGrid";



// const Page = () => {
//   return (
//     <div>
//       {/* Hero Section - No animation */}
//       <Hero
//         videoSrc="/capabilities/herobackground3.mp4"
//         heading="Embrace the future with transformative power of large language models."
//         // description="Your business thrives on efficiency, innovation, and insightful decision-making. Large Language Models (LLMs) represent a paradigm shift in how we interact with and leverage data, offering unprecedented opportunities for automation, personalization, and intelligent insights. Amlgo Labs can help you harness the transformative power of LLMs to drive operational excellence, unlock new growth avenues, and achieve a sustainable competitive advantage."
//       />

//       {/* Animated Sections (Now with no extra white space) */}
//       <AnimatedSection>
//         <NumberInfoBox />
//       </AnimatedSection>

//       <AnimatedSection>
//         <BenefitsList />
//       </AnimatedSection>

//       <AnimatedSection>
//         <SolutionsGrid />
//       </AnimatedSection>

//       <AnimatedSection>
//         <InformationalStrip />
//       </AnimatedSection>

//       <AnimatedSection>
//         <IndustryFocus />
//       </AnimatedSection>
//     </div>
//   );
// };

// export default Page;

// /* Utility Component for Scroll Animations */
// const AnimatedSection = ({ children }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50, scale: 0.98 }}
//       animate={{
//         opacity: isInView ? 1 : 0,
//         y: isInView ? 0 : 50,
//         scale: isInView ? 1 : 0.98,
//       }}
//       transition={{
//         duration: 0.6,
//         ease: "easeOut",
//       }}
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         width: "100%", // Ensures full width
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };


import React from "react";
import Hero from "../components/PagesComponents/CapabilitiesPages/Hero";
import NumberInfoBox from "../components/PagesComponents/CapabilitiesPages/NumberInfoBox";
import BenefitsList from "../components/PagesComponents/CapabilitiesPages/BenefitsList";
import IndustryFocus from "../components/PagesComponents/CapabilitiesPages/IndustryFocus";
import InformationalStrip from "../components/PagesComponents/CapabilitiesPages/InformationalStrip";
import SolutionsGrid from "../components/PagesComponents/CapabilitiesPages/SolutionsGrid";

export const metadata = {
  title: "Large Language Models (LLMs) for NLP – Amlgo Labs",
  description: "Explore Large Language Models (LLMs) in NLP—how they process human language, their AI advancements, and their role in transforming text generation.",
  keywords: "Large Language Models, LLMs, Natural Language Processing, NLP, AI advancements, text generation, language modeling, machine learning, deep learning, AI in NLP, NLP solutions, transformer models, neural networks, AI-powered text processing, automated language understanding, ai assistants, ai automation, automate your business, generate content ai, software creation, automation using ai, about data analytics, ai data insights, data to analyze, creating ai models, intelligent automation in manufacturing, data analysis automation, customer support open source, 24 it support, automate manual tasks, understanding data analysis, ai powered data analytics, data analytics businesses, predictive analytics using ai, transform data into actionable insights, using chatbots, data and data analytics, business of data, business using ai, using data in business, data of business, automation of data analysis, industry data analysis, machine learning and real estate",
};



const Page = () => {
  return (
    <div>
      {/* Hero Section - No animation */}
      <Hero
        videoSrc="/capabilities/herobackground3.mp4"
        heading="Embrace the future with transformative power of large language models."
        description="Efficiency, innovation, and smart decisions drive your business. Large Language Models (LLMs) offer a transformative leap, enabling automation, personalization, and intelligent insights. Amlgo Labs helps you harness LLMs to boost operations, unlock growth, and gain a lasting competitive edge."
      />

      {/* Static Sections */}
      <NumberInfoBox />
      <BenefitsList />
      <SolutionsGrid />
      <InformationalStrip />
      <IndustryFocus />
    </div>
  );
};

export default Page;
