import React from 'react'
import IndustryHero2 from '../components/PagesComponents/Hero/IndustryHero2'
import Introduction2 from '../components/PagesComponents/Introduction/Introduction2'
import IndustrySectors2 from '../components/PagesComponents/IndustrySectors/IndustrySectors2'

const page = () => {
  const sectorsData = [
    {
        name: "Data & Analytics Services",
        description: "Redefine how you work with artificial intelligence, machine learning, and generative AI.",
        link: "/"
    },
    {
        name: "Finance & Accounting",
        description: "Build a future of sustainable growth, agility, and financial resilience.",
        link: "/"
    },
    {
        name: "Innovation & R&D Intelligence",
        description: "Fuels your R&D, innovation, and ideation with domain-specific AI, accelerating your time to market in the ICT and Media sector.",
        link: "/"
    },
    {
        name: "Customer Insights",
        description: "Deepen customer insights with Amlgo Labs, analyzing metrics and emotional drivers of brand loyalty.",
        link: "/"
    }
];

  
  const sectorsHeadingText = "Our Services";
  return (
    <>
     <IndustryHero2
                title="Create value with AI in Communication & Media "
                description="Navigate market volatility and boost customer loyalty with AI-powered solutions in Communication & Media."
                buttonText="Let's Talk"
                buttonLink="/contact"
                backgroundImage="/communication/Banner.png" // Provide the correct image path
            />

<Introduction2 
    heading="Revolutionize your operations with data-driven AI solutions"
    content1="Communication & Media industries have faced considerable market volatility in recent years, shifting focus from rapid growth to profitability and cash flow, defending market share amidst intense competition, and striving to deliver exceptional customer experiences."
    content2="Amlgo Labs seamlessly partners with companies to enhance profitability, drive sustainable long-term growth, and improve customer retention and Net Promoter Score (NPS) through unparalleled data analytics and deep industry expertise."  
    />

<IndustrySectors2 heading={sectorsHeadingText} sectors={sectorsData} />



    </>
  )
}

export default page