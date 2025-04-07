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
    { percentage: "40%", description: "Improved working capital through supply chain modernization." },
    { percentage: "15%", description: "Higher profit margins achieved with revenue management tools." },
    { percentage: "62%", description: "Boost customer satisfaction and loyalty through proactive support." },
    { percentage: "91%", description: "Strategic Projects Delivered throughout the years." },
  ];


  const serviceData = [
    {
      title: "Data Analytics Services",
      description: "Drive sustainable growth and resilience in the automotive industry with our data analytics services, empowering every stage from strategic planning to aftersales support.",
      image: "/consumer-retail/featuredService1.png",
      buttons: ["Explore Service"],
      link1: "/data-analytics#case-studies",
    },
    {
      title: "Generative AI Services",
      description: "Optimize your consumer goods operations, personalize customer experiences, and drive product innovation with our AI, machine learning, and generative AI solutions.",
      image: "/consumer-retail/featuredService2.png",
      buttons: ["Learn More"],
      link1: "/generative-ai",
    
    }
  ];
  
  // Usage of the FeaturedServices component
 
  const ServiceHeading = "Featured Services";


  // Redirection Links
  

  return (
    // <IndustryHero
    //     imageSrc="/ConsumerGoodsBanner.png"
    //     altText="Consumer Goods Industry"
    //     heading="Shaping the Future of Consumer Goods"
    //   />

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
      title="We create meaningful impact by combining cutting-edge technology with unparalleled industry expertise." 
      data={impactData} 
    />
   <SingleBlog
      title="Exploring the Potential of Generative AI for CPG and Retail Industries"
      description="Leverage the power of generative AI to revolutionize retail and CPG operations. Our cutting-edge solutions enable businesses to predict consumer trends, automate decision-making, and create personalized experiences that drive measurable results."
      imageSrc="/consumer-retail/Blog.png"
      button1Link="/contact-us" // Update with actual blog route
       button1Text="Let's Talk"
     
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