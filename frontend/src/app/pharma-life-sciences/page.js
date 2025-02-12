import React from 'react'
import IndustryHero1 from '../components/PagesComponents/Hero/IndustryHero1'
import Introduction2 from '../components/PagesComponents/Introduction/Introduction2'
import KeyVerticals from '../components/PagesComponents/KeyVerticals';

import SingleBlog from '../components/PagesComponents/Blogs/SingleBlog';
import ServicesGrid from '../components/PagesComponents/Services/ServicesGrid';
import { FaRegLightbulb } from 'react-icons/fa';
import { 
  AccountBalance as FinanceIcon, 
  LocalShipping as SupplyChainIcon, 
  Sell as SalesIcon, 
  DataUsage as AnalyticsIcon, 
  Gavel as RiskComplianceIcon, 
  SupportAgent as CustomerCareIcon 
} from '@mui/icons-material';
import FeaturedServices from '../components/PagesComponents/Services/FeaturedServices';
import NumberData2 from '../components/PagesComponents/NumberData2';

const page = () => {
    const servicesData = [
        { 
          title: 'Finance & Accounting',  
          description: 'Build a future of sustainable growth, agility, and financial resilience.',
          icon: FinanceIcon
        },
        { 
          title: 'Supply Chain Management Services',  
          description: 'Achieve sustainable growth and build resilience in your Pharma and Life Science business with data-driven insights and AI capabilities.',
          icon: SupplyChainIcon
        },
        { 
          title: 'Sales and Commercial Services',  
          description: 'Drive Pharma and Life Science customer success and loyalty through data-driven marketing and sales strategies.',
          icon: SalesIcon
        },
        { 
          title: 'Data & Analytics Services',  
          description: 'Leverage advanced analytics and AI to unlock the full potential of your Pharma and Life Science data and drive impactful results.',
          icon: AnalyticsIcon
        },
        { 
          title: 'Risk and Compliance Services',  
          description: 'Optimize your risk, financial risk, and financial crime management practices for regulatory compliance.',
          icon: RiskComplianceIcon
        },
        { 
          title: 'Customer Care Service',  
          description: 'Utilize AI-based care solutions to enhance customer experience and retention.',
          icon: CustomerCareIcon
        },
      ];



    

      const serviceData = [
        {
          title: "Does AI have the answer in regulatory affairs?",
          description: "Forward-thinking regulatory affairs professionals are strategically implementing AI, combined with a human-centered approach, to optimize responses to health authority inquiries and cultivate more productive relationships.",
          image: "/pharma/blog1.png",

          buttons: ["Read Blog", "View All Blogs"]
        },
        {
          title: "How AI and analytics are helping to cure at-risk individuals?",
          description: "Digital health expands access to medical care and mitigates life-threatening risks, offering a potential solution for the challenges facing healthcare systems.",
          image: "/pharma/blog2.png",
          buttons: ["Raed More", "See All Blogs"]
        }
      ];


      const impactData = [
        { percentage: "1.5x", description: "Health execs predict rise in home and virtual care " },
        { percentage: "87%", description: "projects delivered on pharma & life sciences" },
        { percentage: "96%", description: "Biopharma executives recognize the competitive edge gained through data transparency " },
       
      ];


     




   
  return (
    <>
    <IndustryHero1
                imageSrc="/pharma/PharmaBanner.png"
                altText="Banking Hero"
                heading="The MediReward Analytics Platform: AI, Cloud, and Data Engineering for Healthcare"
    />
    <Introduction2 
    heading="Redefine what&apos;s possible in Pharma and Life sciences"
    content1="The rapidly changing Life Science industry requires balancing patient needs, market potential, and innovation. Amlgo Labs empowers Pharma and Life Science stakeholders to improve healthcare access and affordability with AI-driven insights and solutions. Our tools support data management, competitive intelligence, and more, driving commercial effectiveness, cost reduction, faster time-to-market, and increased revenue."
    
    
    />

<NumberData2 
      title="We create meaningful impact by combining cutting-edge technology with unparalleled industry expertise." 
      data={impactData} 
    />


    <ServicesGrid services={servicesData} />



<FeaturedServices services={serviceData} />

    </>
  )
}

export default page