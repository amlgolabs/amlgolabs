import React from 'react'
import IndustryHero2 from '../components/PagesComponents/Hero/IndustryHero2';
import Introduction1 from '../components/PagesComponents/Introduction/Introduction1';
import SingleBlog from '../components/PagesComponents/Blogs/SingleBlog';
import Partners from '../components/Partners';
import CaseStudies from '../components/CaseStudies';
import IndustrySectors2 from '../components/PagesComponents/IndustrySectors/IndustrySectors2';

export const metadata = {
    title: "Insurance - Amlgo Labs",
    description: "Learn more about Amlgo Labs, our mission, vision, and team.",
    keywords: "Amlgo Labs, about us, mission, vision, team, data analytics, AI, ML",
  };

const page = () => {

  const IntroductionData = {
    title: 'Amlgo Labs in Insurance Industry',
    subtitle: 'AI-driven solutions for improved operational efficiency across the insurance lifecycle.',
    content1: "In today's competitive insurance landscape, meeting rising customer expectations requires embracing AI/ML-powered solutions. For insurance companies, this is no longer optional, but crucial for maintaining a leading edge. From risk assessment and streamlined distribution & underwriting to efficient claims management and enhanced customer service, a data-driven approach unlocks hidden insights, reveals new opportunities, and delivers greater value to your insurance customers.",
    content2:
      'At Amlgo Labs, we leverage our deep expertise in AI/ML, Generative AI, data engineering, and extensive domain knowledge to empower insurance providers to make informed decisions, optimize core business processes, and unlock new growth opportunities, all while reducing costs and boosting efficiency across the insurance value chain.',
  };

  const caseStudiesData = [
    {
      id: 1,
      title: "Developing an Insurance Risk & Litigation Propensity Model",
      image: "/CaseStudyHome1.jpeg",
      description: "Explore the differences between Generative AI, which creates new content, and Predictive AI, which forecasts future outcomes.",
    },
    {
      id: 2,
      title: "Reducing Fraud in Insurance: An Anti-Fraud Model",
      image: "/CaseStudyHome2.jpeg",
      description: "Empowering banks with seamless MAS610 reporting and compliance through robust solutions.",
    },
    {
      id: 3,
      title: "Are You Maximizing Commercial Combined Cross-Selling Opportunities?",
      image: "/CaseStudyHome3.jpeg",
      description: "Discover how AI is revolutionizing the automotive industry with top use cases in 2024.",
    },
  ];

  const sectorsData = [
    {
      name: "Insurance Agent Analytics",
      description: "Enhance agent performance with a solution leveraging analytics, artificial intelligence, and data technologies.",
      link: "/"
    },
    {
      name: "Modernized Underwriting Platform ",
      description: "Automate and optimize your underwriting process with our intelligent risk assessment platform.",
      link: "/"
    },
    {
      name: "Sustainability for financial services",
   
      description: "Embrace sustainability for growth and leadership. Drive ESG action for improved business performance",
      link: "/"
    },
    {
      name: "Cloud Claim for financial services",
      description: "Our comprehensive solution enables virtual adjustments for property, auto, and contents claims. ",
      link: "/"
    }
  ];
  
  const sectorsHeadingText = "Our Offerings";

  return (

    <>
    <IndustryHero2
    title="Insurance"
    description="Future-fit insurance, powered by advanced technology and AI, designed to protect, prevent, and preserve what matters most to people."
    buttonText="Let's Talk"
    buttonLink="/contact"
    backgroundImage="/InsuranceBanner.png" // Provide the correct image path
  />

  <Introduction1 {...IntroductionData} />

  <SingleBlog
      title="Exploring the Potential of Generative AI for CPG and Retail Industries"
      description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      imageSrc="/consumer-retail/Blog.png"
      blogLink="/blog/generative-ai" // Update with actual blog route
      insightsLink="/insights/generative-ai" // Update with actual insights route
    />

    <Partners/>
    <IndustrySectors2 heading={sectorsHeadingText} sectors={sectorsData} />

    
    <CaseStudies caseStudies={caseStudiesData} />
    </>
  )
}

export default page