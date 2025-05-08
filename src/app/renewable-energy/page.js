import React from 'react'
import IndustryHero2 from '../components/PagesComponents/Hero/IndustryHero2'
import ServicesGrid from '../components/PagesComponents/Services/ServicesGrid'
import { FaRegLightbulb } from 'react-icons/fa';
import { 
    LocalShipping as SupplyChainIcon, 
    AttachMoney as PricingRevenueIcon, 
    DataUsage as DataDrivenAnalyticsIcon, 
    Nature as ESGDecarbonizationIcon, 
    TrendingUp as MarketTrendsIcon, 
    ShowChart as CompetitiveInsightsIcon,
    EnergySavingsLeaf as SustainableSolutionsIcon, 
    EnergySavingsLeaf
} from '@mui/icons-material';
import SingleBlog from '../components/PagesComponents/Blogs/SingleBlog';


export const metadata = {
  title: "Renewable Energy & Environmental Science - Amlgo Labs",
  description: "Explore cutting-edge renewable energy solutions & environmental science innovations at Amlgo Labs. Power a sustainable future with clean energy technology.",
  keywords: "Renewable energy, environmental science, Amlgo Labs, clean energy technology, sustainability solutions, green energy, solar power, wind energy, climate change solutions, energy optimization, eco-friendly innovations, carbon footprint reduction, smart energy management, environmental data analytics",
};




const page = () => {
    const servicesData = [
        { 
          title: 'Supply Chain & Operations Analytics',  
          description: 'Improve the efficiency and resilience of your renewable energy supply chain with Amlgo Labs data-driven insights and predictive analytics, minimizing costs and ensuring operational continuity.',
          icon: SupplyChainIcon,
        },
        { 
          title: 'Pricing & Revenue Management',  
          description: 'Enhance profitability in the renewable energy sector with Amlgo Labs pricing and revenue management solutions. Our predictive analytics-driven frameworks enable strategic pricing decisions for margin growth and revenue generation.',
          icon: PricingRevenueIcon,
        },
        { 
          title: 'Data Driven Analytics',
          description: 'Harness the full potential of your renewable energy data with Amlgo Labs advanced analytics solutions. From data handling and engineering to data harmonization and visualization, our AI-enabled services transform complex data into actionable insights, fueling smarter decisions.',
          icon: DataDrivenAnalyticsIcon,
        },
        { 
          title: 'ESG & Decarbonization',  
          description: 'Partner with Amlgo Labs to accelerate your renewable energy sustainability transformation. Our AI-powered ESG and decarbonization solutions provide the insights and support you need to achieve net zero.',
          icon: ESGDecarbonizationIcon,
        },
        { 
          title: 'Market & Competitive Intelligence',  
          description: 'Amlgo Labs AI-powered market and competitive intelligence solutions provide real-time insights, in-depth market analysis, and competitor benchmarking, enabling users to adapt quickly and confidently to the evolving renewable energy landscape. ',
          icon: MarketTrendsIcon,
        },
        { 
            title: 'Sustainable Solution',  
            description: 'Amlgo Labs has a proven track record of integrating systems and equipment into energy-efficient processes with cost-efficient layouts in safe plant environments, serving the specific needs of the renewable energy industry.',
            icon: EnergySavingsLeaf,
          },
      ];
    

  return (
    <>
     <IndustryHero2
                title="Finding Opportunities in the Clean Energy Transition"
                description="Achieve a cleaner energy future with data-driven insights, Powered by AI, cloud, and renewable energy technologies."
                buttonText="Let's Talk"
                buttonLink="/contact-us"
                backgroundImage="/renewable-energy/Banner2.png" // Provide the correct image path
            />

    <ServicesGrid services={servicesData} />

    <SingleBlog
      title="What Will Power Tomorrow's Renewable Energy Grid?"
      description="Innovation in energy storage is key to unlocking the full potential of renewable energy. Dive into the latest breakthroughs and discover how these advancements are shaping the future of our energy grid."
      imageSrc="/renewable-energy/blog.jpg"
      button1Link="/contact-us" // Update with actual blog route
      button1Text="Let's Talk"
    />
    </>
  )
}

export default page