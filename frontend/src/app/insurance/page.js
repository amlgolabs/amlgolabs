import React from 'react'
import IndustryHero2 from '../components/PagesComponents/Hero/IndustryHero2';
import Introduction1 from '../components/PagesComponents/Introduction/Introduction1';
import SingleBlog from '../components/PagesComponents/Blogs/SingleBlog';
import Partners from '../components/Partners';
import CaseStudies from '../components/CaseStudies';
import IndustrySectors2 from '../components/PagesComponents/IndustrySectors/IndustrySectors2';

export const metadata = {
  title: "Insurance Analytics - Predict Future Claims – Amlgo Labs",
  description: "Optimize insurance decisions with Amlgo Labs. Forecast growth, predict claims, and set accurate premiums using AI-driven analytics for better risk management.",
  keywords: "Insurance analytics, AI in insurance, Amlgo Labs, claims prediction, risk management, premium optimization, insurance automation, predictive analytics, fraud detection, underwriting solutions, data-driven insurance, insurance technology, future claims forecasting, AI-powered risk assessment",
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
      image: "/businesses/insurance/casestudy1.png",
      link:"/documents/RiskLitigationPropensityModel.pdf"
      // description: "Explore the differences between Generative AI, which creates new content, and Predictive AI, which forecasts future outcomes.",
    },
    {
      id: 2,
      title: "Reducing Fraud in Insurance: An Anti-Fraud Model",
      image: "/businesses/insurance/casestudy2.png",
      link: "/coming-soon"
    },
    {
      id: 3,
      title: "Are You Maximizing Commercial Combined Cross-Selling Opportunities?",
      image: "/businesses/insurance/casestudy3.png",
      link: "/coming-soon"

      // description: "Discover how AI is revolutionizing the automotive industry with top use cases in 2024.",
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
      name: "Sustainability for Financial Services",
   
      description: "Embrace sustainability for growth and leadership. Drive ESG action for improved business performance",
      link: "/"
    },
    {
      name: "Cloud Claim for Financial Services",
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
    buttonLink="/contact-us"
    backgroundImage="/InsuranceBanner.png" // Provide the correct image path
  />

  <Introduction1 {...IntroductionData} />

  <SingleBlog
      title="The Role of Big Data in Crafting Hyper-Personalized Insurance Policies"
      description="Discover how Big Data is transforming the insurance sector by enabling hyper-personalized policies. From analyzing customer behavior to predicting risks, learn how data-driven insights are crafting tailored solutions that enhance customer satisfaction, improve retention, and drive innovation in the evolving world of insurance."
      imageSrc="/businesses/insurance/Insurance.jpg"
      button1Link="/coming-soon" // Update with actual blog route
     
      button1Text="Read Now"
    
    />

    <Partners/>
    <IndustrySectors2 heading={sectorsHeadingText} sectors={sectorsData} />

    
    <CaseStudies caseStudies={caseStudiesData} />
    </>
  )
}

export default page