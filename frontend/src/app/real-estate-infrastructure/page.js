import React from 'react'

import IndustryHero2 from '../components/PagesComponents/Hero/IndustryHero2';
import Introduction2 from '../components/PagesComponents/Introduction/Introduction2';
import SolutionsSteps from '../components/PagesComponents/SolutionsSteps';
import IndustryCaseStudy2 from '../components/PagesComponents/CaseStudy/IndustryCaseStudy2';

export const metadata = {
    title: "Real Estate & Infrastructure Solutions - Amlgo Labs",
    description: "Boost real estate & infrastructure efficiency with Amlgo Labs AI-driven analytics & automation. Unlock data-driven insights for smarter investments & growth.",
    keywords: "Real estate solutions, infrastructure analytics, Amlgo Labs, AI-driven real estate, property investment insights, smart infrastructure, data-driven decisions, real estate automation, predictive analytics, urban development, construction technology, smart city solutions, AI for real estate",
  };
  

const page = () => {

  const stepsData = [
    {
        id: 1,
        heading: 'Competitive & Market Intelligence',
        content:
            'Stay competitive in the real estate market with tailored insights. We empower real estate companies with specialized solutions designed for diverse needs and user groups. Leverage our AI-powered platform, Insights first, for comprehensive competitor analysis and informed real estate decision-making.',
    },
    {
        id: 2,
        heading: 'Rapid Research & Insights',
        content:
            'We provide on-demand, actionable, high-quality, bespoke real estate research in 20+ languages. Our services deliver insights powered by analytics, visualizations, domain expertise, and industry knowledge, precisely tailored to your needs.',
    },
    {
        id: 3,
        heading: 'Knowledge Management',
        content:
            'Our Real Estate Knowledge Management (KM) processes streamline the complexities of global business. We optimize real estate workflows, manage knowledge assets, and transform reports into actionable insights.',
    },
    {
        id: 4,
        heading: 'Scale Data Assets',
        content:
            'The volume and velocity of data can be overwhelming, especially in the real estate sector. Our solution manages diverse real estate data sources, ensures compliance (e.g., GDPR), and handles complexity, offering scalable data asset management with both quality and speed.',
    },
    {
        id: 5,
        heading: 'Data Analytics',
        content:
            'We provide data management, engineering, integration, and visualization services, delivering tailored real estate analytics for the end-clients of consulting and advisory firms.',
    },
    {
        id: 6,
        heading: 'Design & Visualization Solutions',
        content:
            'Our team provides 24/6 support for real estate design, visualization, content creation, research, and editing. We offer print and graphic design, video production, web development, formatting, research, marketing, publishing, and media services.',
    },
    {
        id: 7,
        heading: 'Sustainability & ESG',
        content:
            'Access customized real estate ESG insights and solutions tailored to specific themes, regulations, and opportunities. Our analytical frameworks drive data-informed strategies, helping clients achieve sustainability goals.',
    },
    {
        id: 8,
        heading: 'Innovation and R&D Intelligence',
        content:
            'Drive real estate innovation with actionable insights. As a leading provider of R&D intelligence, we deliver timely strategic insights to keep you ahead of the competition and emerging trends.',
    },
    {
        id: 9,
        heading: 'Generative AI & LLM Driven Solution',
        content:
            'Leverage the power of Generative AI and LLMs for real estate. From property descriptions and market analysis to personalized recommendations and virtual tours, our solution transforms how you operate.',
    },
];

const caseStudiesData = [
  {
      id: 1,
      title: "Generative AI Simplifying Data",
      image: "/businesses/real-estate/casestudy1.png",

      description: "Explore the power of Generative AI and LLMs in real estate.",
      link:"/documents/BusinessPotential_GenAI.pdf"
  },
  {
      id: 2,
      title: "Access with LLM-Driven Database Interaction",
      image: "/businesses/real-estate/casestudy2.png",


      description: "Learn how Amlgo Labs simplified data access for a leading real estate firm, boosting efficiency and decision-making.",
      link:"/text-to-sql-solution"

  },
];



  return (
    // <IndustryHero
    //     imageSrc="/real-estate/RealEstateBanner.png"
    //     altText="Banking Hero"
    //     heading="Empowering Innovation Through Data and AI"
    //   />
    <>
    <IndustryHero2
    title="Securing Your Real Estate Future"
    description="Establish enduring competitive advantage, generate long-term impact, and ensure the future viability of your real estate business."
    buttonText="Let's Talk"
    buttonLink="/contact-us"
    backgroundImage="/real-estate/RealEstateBanner.png" // Provide the correct image path
  />

  <Introduction2 
    heading="Navigating The Real Estate Industry"
    content1="The real estate sector faces numerous challenges in today's global market. Property owners, brokers, and lenders are adapting their strategies in response to rising property values and the growing preference for flexible and co-working spaces among large corporations. Maintaining competitiveness requires real estate firms to modernize their approaches, closely monitor market dynamics, embrace digital technologies, and optimize their strategies."
    content2="Amlgo Labs research, analytics, AI, and automation solutions empower strategic decision-making for our established real estate clients, effectively addressing their key business challenges."
    
    />

<SolutionsSteps
            title="Maximizing Real Estate & Infrastructure Potential with GenAI Solutions"
            subtitle="GenAI revolutionizes real estate and infrastructure by enhancing efficiency and driving sustainable growth."
            steps={stepsData}
        />

<IndustryCaseStudy2
                heading="Case Studies"
                caseStudies={caseStudiesData}
            />
    </>

    
  )
}

export default page