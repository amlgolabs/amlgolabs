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
