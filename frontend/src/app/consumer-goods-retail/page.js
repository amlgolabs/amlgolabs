import React from 'react'
import IndustryHero2 from '../components/PagesComponents/Hero/IndustryHero2';
import IndustrySectors from '../components/PagesComponents/IndustrySectors/IndustrySectors';
import NumberData2 from '../components/PagesComponents/NumberData2';
import FeaturedServices from '../components/PagesComponents/Services/FeaturedServices';
import SingleBlog from '../components/PagesComponents/Blogs/SingleBlog';
import IndustryCaseStudy3 from '../components/PagesComponents/CaseStudy/IndustryCaseStudy3';
import CTASection from '../components/CTA';

export const metadata = {
  title: "AI-Powered Retail & Consumer Goods Solutions - Amlgo Labs",
  description: "Boost sales & optimize operations with Amlgo Labs AI-driven solutions for consumer goods & retail. Enhance demand forecasting & supply chain efficiency.",
  keywords: "AI-powered retail, consumer goods solutions, Amlgo Labs, demand forecasting, supply chain optimization, retail automation, predictive analytics, inventory management, customer insights, sales optimization, machine learning in retail, AI-driven operations, smart retail solutions",
};


const page = () => {

  const impactData = [
    { percentage: "40%", description: "Improvement in working capital through supply chain modernization." },
    { percentage: "15%", description: "Higher profit margins achieved with revenue management tools." },
    { percentage: "62%", description: "Boost in customer satisfaction and loyalty through proactive support." },
    { percentage: "91%", description: "Increase in Strategic Projects Delivered throughout the years." },
  ];


  const serviceData = [
    {
      title: "Data Analytics Services",
      description: "Drive sustainable growth and resilience in the automotive industry with our data analytics services, empowering every stage from strategic planning to aftersales support.",
      image: "/consumer-retail/featuredService1.png",
      buttons: ["Explore Service"],
      link1: "/data-analytics-services#case-studies",
    },
    {
      title: "Generative AI Services",
      description: "Optimize your consumer goods operations, personalize customer experiences, and drive product innovation with our AI, machine learning, and generative AI solutions.",
      image: "/consumer-retail/featuredService2.png",
      buttons: ["Learn More"],
      link1: "/generative-ai-services",
    
    }
  ];
  
  // Usage of the FeaturedServices component
 
  const ServiceHeading = "Featured Services";


  // Redirection Links
  

  return (
    

    <>
    <IndustryHero2
    title="Innovation in Consumer Goods and Retail"
    description="Stay ahead of evolving consumer needs in the retail and consumer goods industry with smart, integrated operations."
    buttonText="Let's Talk"
    buttonLink="/contact-us"
    backgroundImage="/ConsumerGoodsBanner.png" // Provide the correct image path
  />

  <IndustrySectors/>

  <NumberData2 
      title="We create meaningful impact for our clients by combining cutting-edge technology with unparalled industry expertise." 
      data={impactData} 
    />
   <SingleBlog
   category="CASE STUDY"
      title="Optimizing Retail Supply Chains with Real-Time Data Pipelines"
      description="Enhance retail efficiency by leveraging real-time data pipelines for smarter inventory management and faster decision-making. Optimize supply chains with live insights into demand, stock levels, and logistics."
      imageSrc="/consumer-retail/Blog.png"
      button1Link="/contact-us" // Update with actual blog route
       button1Text="Learn More"
        usePopupForButton1={true} // Enable popup for this button
  pdfName="Optimizing Retail Supply Chains with Real-Time Data Pipelines"
     
    />

<FeaturedServices heading={ServiceHeading} services={serviceData} />
  <IndustryCaseStudy3/>
  <CTASection
      heading="Talk to One of Our Experts"
      description="Get in touch today to ﬁnd out about how Amlgo Labs can help you improve your processes, making you better, faster and more efﬁcient."
      buttonText="Let's Talk"
      imageSrc="/cta.png"
    />
  </>

  )
}

export default page