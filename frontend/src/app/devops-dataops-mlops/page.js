import React from 'react'
import HeroSection from '../components/PagesComponents/CapabilitiesPages/HeroSection'
import TabsGrid from '../components/PagesComponents/CapabilitiesPages/TabsGrid'
import InformationStripLine from '../components/PagesComponents/CapabilitiesPages/InformationStripLine'
import SingleBlog from '../components/PagesComponents/Blogs/SingleBlog'
import IndustryFocusBlack from '../components/PagesComponents/CapabilitiesPages/IndustryFocusBlack'
import { BiSolidBank } from 'react-icons/bi'
import { FaCar } from 'react-icons/fa'
import { MdLocalPharmacy, MdOutlinePrecisionManufacturing, MdRealEstateAgent } from 'react-icons/md'
import { TiShoppingCart } from 'react-icons/ti'

export const metadata = {
  title: "DataOps, DevOps & MLOps Solutions - Amlgo Labs",
  description: "Boost agility with Amlgo Labs DataOps, DevOps & MLOps solutions. Automate workflows, accelerate deployment & optimize data pipelines for AI-driven success.",
  keywords: "DataOps, DevOps, MLOps, Amlgo Labs, workflow automation, deployment acceleration, data pipeline optimization, AI-driven solutions, continuous integration, continuous deployment, CI/CD, machine learning operations, agile development, cloud infrastructure, operational efficiency",
};


const page = () => {

  const industryData = [
          { industryName: 'Banking and Finance', description: 'Secure, scalable data and AI solutions for compliance and innovation.', link: '/banking-finance' , icon: <BiSolidBank/>},
          { industryName: 'Automotive', description: 'Streamline production with predictive analytics and automation.', link: '/automotive', icon: <FaCar/> },
          { industryName: 'Manufacturing', description: 'Optimize workflows with real-time data and AI insights.', link: '/manufacturing', icon: <MdOutlinePrecisionManufacturing/> },
          { industryName: 'Consumer-Goods', description: 'Enhance agility with data-driven personalization and efficiency.', link: '/consumer-goods',  icon: <TiShoppingCart/> },
          { industryName: 'Real Estate', description: 'Simplify operations with smart data management and analytics.', link: '/real-estate' , icon: <MdRealEstateAgent/>},
          { industryName: 'Pharma and Life Sciences', description: 'Accelerate research with secure, AI-powered platforms.', link: '/pharma-life-sciences',icon : <MdLocalPharmacy/> }
      ];

  return (
    <div>
        <HeroSection
  title="Orchestrating Intelligent Operations"
  description="Amlgo Labs empowers your business with DataOps, DevOps, and MLOps to seamlessly integrate data, software, and AI. Our solutions automate workflows, accelerate innovation, and maximize the value of your AI investments, driving efficiency and agility."
  buttonText="Learn More"
  imageSrc="/capabilities/devopsHero.jpeg"
  imageAlt="Cloud Services"
/>

<TabsGrid/>
<InformationStripLine
  title="Empower your data, development, and machine learning workflows with seamless automation, collaboration, and scalability."
  subtitle="Amlgo Labs delivers precision-driven solutions to transform complexity into innovation and efficiency into growth."
  buttonText="Reach Us Now"
  buttonLink="/contact-us"
/>

<SingleBlog
      title="How Generative AI is Disrupting Entire Industries – And How Amlgo Labs is Leading the Charge?"
      description="Generative AI is a subset of artificial intelligence that creates new content like images, music, text, and code. Unlike traditional AI, which recognizes patterns and makes decisions based on existing data, generative AI generates new data by mimicking patterns from its training data."
      imageSrc="/capabilities/data-ops/blog.png"
      button1Link="/" // Update with actual blog route
      button2Link="/" // Update with actual insights route
      button1Text="Read Now"
      button2Text="Explore More"
    />

<IndustryFocusBlack title="Businesses We Support"
        industryData={industryData}
      />
    </div>
  )
}

export default page