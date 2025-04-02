import React from 'react'
import Hero from '../components/PagesComponents/CapabilitiesPages/Hero'
import NumbersInfo from '../components/PagesComponents/CapabilitiesPages/NumbersInfo'
import Benefits from '../components/PagesComponents/CapabilitiesPages/Benefits'
import Solutions from '../components/PagesComponents/CapabilitiesPages/Solutions'
import Parallax from '../components/PagesComponents/CapabilitiesPages/Solutions'
import TechStack from '../components/PagesComponents/CapabilitiesPages/TechStack'
import CaseStudy from '../components/PagesComponents/CapabilitiesPages/CaseStudyList'
import CaseStudyList from '../components/PagesComponents/CapabilitiesPages/CaseStudyList'
import ContactForm from '../contact-us/ContactUsForm'
import PartnersSection from '../components/PagesComponents/CapabilitiesPages/PartnersSection'


export const metadata = {
  title: "Generative AI - Amlgo Labs",
  description: "Meta Description :- Amlgo Labs is a leading provider of cloud and data operations services, designed to help companies optimize their data performance and realize the full value of their data assets.",
  keywords: "Amlgo Labs, about us, mission, vision, team, data analytics, AI, ML",
};

const page = () => {

  const caseStudiesData = [
    {
      id: 1,
      title: "Generative AI vs Predictive AI: Understanding Their Core Differences",
      image: "/capabilities/generative-ai/casestudy1.jpg",
      description: "In today's rapidly evolving landscape of AI for business, companies face a critical choice between AI systems that predict customer behavior and those that create content and responses. This decision highlights an important distinction between generative AI and predictive AI, two technologies that are shaping AI industry trends.",
      link: "/documents/generativeaivspredictiveai.pdf",
    },
    {
      id: 2,
      title: "The ROI of Implementing Generative AI: Is It Worth the Investment?",
      image: "/capabilities/generative-ai/casestudy2.jpg",

      description: "Generative AI, with its ability to produce unique content, ideas, and strategies based on specific inputs, has gained significant traction across various industries. Businesses from healthcare to retail are exploring its capabilities, but with any substantial investment comes an inevitable question: What is the return on investment (ROI)?",
      link: "/documents/ROI_GenAI.pdf",

    },
    {
      id: 3,
      title: "Unlocking Business Potential: Integrating Generative AI for Smarter, Faster Workflows",
      image: "/capabilities/generative-ai/casestudy3.jpg",

      description: "In today's tech-driven world, it seems like everywhere you turn, someone is talking about AI. While some people envision sentient robots taking over the world, the more realistic application of AI is already happening in everyday businesses. But how do you take advantage of this powerful technology, specifically Generative AI?",
      link: "/documents/BusinessPotential_GenAI.pdf",

    },
    {
      id: 4,
      title: "Generative AI for Layman: What is it, Tools, Models, Applications, and Use Cases",
      image: "/capabilities/generative-ai/casestudy4.jpg",

      description: "In the ever-evolving landscape of artificial intelligence, one of the most fascinating and transformative branches is Generative AI. This innovative technology has revolutionized the way we approach creativity and problem-solving.",
      link: "/documents/GenAI_Layman.pdf",
    },
];

  
  const techStackData = [
    { src: "/TechStack/pytorch.png", alt: "PyTorch" },
    { src: "/TechStack/openAI.png", alt: "OpenAI" },
    { src: "/TechStack/python.png", alt: "Python" },
    { src: "/TechStack/anthropic.png", alt: "Anthropic" },
    { src: "/TechStack/tensorflow.png", alt: "TensorFlow" },
    { src: "/TechStack/dialogflow.png", alt: "Dialogflow" },
    { src: "/TechStack/aws.png", alt: "AWS" },
    { src: "/TechStack/nvdia.png", alt: "NVIDIA" },
    { src: "/TechStack/snowflake.png", alt: "Snowflake" },
    { src: "/TechStack/stability.png", alt: "Stability AI" },
  ];

  const benefitsList = [
    "Revolutionize content creation with AI-powered automation.",
    "Elevate customer engagement through hyper-personalization.",
    "Ignite innovation with AI-driven idea generation.",
    "Accelerate software development with automated code creation.",
    "Future-proof your business with cutting-edge AI capabilities.",
    "Unlock new levels of efficiency and productivity.",
  ];

  return (
    <div>
        {/* <Hero/> */}

        <Hero 
  videoSrc="/capabilities/herobackground2.mp4"
  heading="Unleashing the Power of Intelligent Automation"
  description="Your business thrives on innovation and efficiency. Generative AI offers a paradigm shift,
          enabling you to automate content creation, personalize customer experiences, and unlock
          entirely new possibilities. Amlgo Labs can help you harness this transformative technology
          to drive unprecedented growth, build resilience, and achieve your most ambitious goals."
/>
        <NumbersInfo/>
        {/* <Benefits/> */}
        <Benefits title="Benefits" benefitsData={benefitsList} />
        <Solutions/>
        {/* <Parallax/> */}
        <TechStack title="Tech Stack We are working on" techStack={techStackData} />

        {/* <CaseStudyList/> */}
        <CaseStudyList caseStudies={caseStudiesData} />
        <PartnersSection/>
    </div>
  )
}

export default page