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
          { industryName: 'Banking and Finance', description: 'Secure, scalable data and AI solutions for compliance and innovation.', link: '/banking-and-finance' , icon: <BiSolidBank/>},
          { industryName: 'Automotive', description: 'Streamline production with predictive analytics and automation.', link: '/automotive-industry', icon: <FaCar/> },
          { industryName: 'Manufacturing', description: 'Optimize workflows with real-time data and AI insights.', link: '/manufacturing-ai-industry', icon: <MdOutlinePrecisionManufacturing/> },
          { industryName: 'Consumer-Goods', description: 'Enhance agility with data-driven personalization and efficiency.', link: '/consumer-goods-retail',  icon: <TiShoppingCart/> },
          { industryName: 'Real Estate', description: 'Simplify operations with smart data management and analytics.', link: '/real-estate-infrastructure' , icon: <MdRealEstateAgent/>},
          { industryName: 'Pharma and Life Sciences', description: 'Accelerate research with secure, AI-powered platforms.', link: '/pharma-life-sciences',icon : <MdLocalPharmacy/> }
      ];

  return (
    <div>
        <HeroSection
  title="Orchestrating Intelligent Operations"
  description="Amlgo Labs enables enterprises to build secure, scalable, and high-performing operations by integrating DataOps, DevOps, MLOps, and SecurityOps practices. Our solutions bring together data management, software development, machine learning workflows, and cybersecurity under a unified operational framework. By automating processes and embedding security at every stage, we help you accelerate delivery, reduce risk, and maximize the value of your AI and data investments—ensuring agility, compliance, and business resilience."
  buttonText="Learn More"
  imageSrc="/capabilities/devopsHero.jpeg"
  imageAlt="Cloud Services"
/>

<TabsGrid/>
<InformationStripLine
  title="Empower your data, development, and machine learning workflows with seamless automation, collaboration, and scalability."
  subtitle="Amlgo Labs delivers precision-driven solutions to transform complexity into innovation and efficiency into growth."
  buttonText="Reach Us Now"
  usePopup={true}
/>

{/* <SingleBlog
      title="Optimizing Machine Learning Workflows Through MLOps"
      description="Amlgo Labs bridges the gap between machine learning and production with MLOps. Discover how we simplify, automate, and scale your ML workflows."
      imageSrc="/capabilities/data-ops/blog.png"
      button1Link="/documents/Technical MLOps Architecture.pdf" // Update with actual blog route
      button1Text="Read Now"
    /> */}

<SingleBlog
  title="Optimizing Machine Learning Workflows Through MLOps"
  description="Amlgo Labs bridges the gap between machine learning and production with MLOps. Discover how we simplify, automate, and scale your ML workflows."
  imageSrc="/capabilities/data-ops/blog.png"
  button1Text="Read Now"
  button1Link="/documents/Technical MLOps Architecture.pdf" // Still passed but ignored when usePopupForButton1 is true
  usePopupForButton1={true} // Enable popup for this button
  pdfName="Technical MLOps Architecture" // PDF name for the popup
/>

<IndustryFocusBlack title="Businesses We Support"
        industryData={industryData}
      />
    </div>
  )
}

export default page