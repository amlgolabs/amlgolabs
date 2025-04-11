import React from 'react'
import IndustryHero from '../components/PagesComponents/Hero/IndustryHero1'
import Introduction1 from '../components/PagesComponents/Introduction/Introduction1';
import NumberData2 from '../components/PagesComponents/NumberData2';
import IndustrySectors2 from '../components/PagesComponents/IndustrySectors/IndustrySectors2';
import ServicesBifurcation from '../components/PagesComponents/Services/ServicesBifurcation';
import IndustryTechnology from '../components/PagesComponents/IndustryTechnology';
import IndustryCaseStudy1 from '../components/PagesComponents/CaseStudy/IndustryCaseStudy1';

export const metadata = {
  title: "AI & Data Solutions for Manufacturing and Industries - Amlgo Labs",
  description: "Boost efficiency with AI-driven analytics for manufacturing & industries. Optimize production, reduce costs & enhance quality. Learn more at Amlgo Labs.",
  keywords: "AI in manufacturing, industrial analytics, Amlgo Labs, production optimization, cost reduction, quality enhancement, smart manufacturing, predictive maintenance, AI-driven solutions, industrial automation, process optimization, data-driven manufacturing, Industry 4.0, factory automation",
};


const page = () => {

  const impactData = [
    { percentage: "15%", description: "Increase in estimated savings through assembly line diagnostics " },
    { percentage: "25%", description: "Reduction of the stockout index rate " },
    { percentage: "58%", description: "Increase in the speed of decision-making " },
    { percentage: "96%", description: "Increase in Strategic Projects Delivered throughout the years" },
  ];

  const technologies = [
    { name: 'Microsoft Azure', image: '/azure.png' },
    { name: 'Amazon Web Services', image: '/aws.png' },
    { name: 'Google Cloud', image: '/googlecloud.png' },
    { name: 'Dell Technologies', image: '/dell.png' },
    // { name: 'Natural Language Processing', image: '/partner5.png' },
    // { name: 'Knowledge Graph', image: '/partner6.png' },

];

const manufacturingHeading = "Driving Innovation in the Manufacturing Industry with Strategic Partnerships"

const IntroductionData = {
  title: 'Amlgo Labs in Manufacturing',
  subtitle: 'Building a Sustainable and Transformative Ecosystem for Growth',
  content1:
    'Manufacturing is undergoing a dramatic transformation. The future of manufacturing demands a bold new approach, where technology benefits both people and the planet. Amlgo Labs recognizes this as a critical opportunity. We leverage transformative technologies, including generative AI and advanced computing, to deliver impactful business results and sustainable growth for our manufacturing clients. Our goal is to equip you for operational optimization, increased productivity, and sustainable growth in today’s competitive manufacturing landscape.',
  content2:
    'In heavy asset manufacturing, precision, agility, and innovation are essential. Our analytics-driven consulting partners with you, using your data to inform decisions and establish industry leadership in manufacturing. We understand your specific manufacturing challenges and opportunities, delivering tailored solutions that pave the way for operational excellence in manufacturing. Join us in shaping the future of industrial manufacturing—a future designed for your success in manufacturing.',
};


const sectorsData = [
  {
    name: "Consumer Goods Manufacturing",
    description: "Enhancing the production of everyday essentials by harnessing the power of AI, advanced technology, and data analytics.",
    link: "/consumer-goods"
  },
  {
    name: "Industrial Manufacturing",
    description: "Develop connected ecosystems to streamline operations and foster stronger customer-supplier partnerships.",
    link: "/industrial-manufacturing"
  },
  {
    name: "Automotive Manufacturing",
    description: "Elevate customer experiences and supplier collaboration with AI-powered operating models.",
    link: "/automotive"
  },
  {
    name: "Chemical Manufacturing",
    description: "Drive operational resilience and sustainability with cutting-edge AI and advanced analytics.",
    link: "/pharma-life-sciences"
  }
];

const sectorsHeadingText = "Our Industry Focus";

  return (
    
    <>
    <IndustryHero
        imageSrc="/ManufacturingBanner.png"
        altText="Manufacturing Industry"
        heading="Transforming Manufacturing for the Future"
        subHeading="Powering the future with Amlgo Labs' Data-Driven Insights"
      />

<Introduction1 {...IntroductionData} />
      <NumberData2 
      title="We drive transformative change in manufacturing by combining cutting-edge technology with unparalleled industry expertise." 
      data={impactData} 
    />

    {/* <IndustrySectors2/> */}
    <IndustrySectors2 heading={sectorsHeadingText} sectors={sectorsData} />
    <ServicesBifurcation/>

    <IndustryTechnology heading={manufacturingHeading} technologies={technologies} />
    <IndustryCaseStudy1 caseStudyHeading="IoT-enabled AC temperature controller system (IoT Data,and ML/AI)" 
                                CaseStudyImageSrc="/businesses/manufacturing/casestudy.jpg"
                                link="/documents/IotCaseStudy.pdf"/>

    </>
  )
}

export default page