import React from 'react'
import IndustryHero2 from '../components/PagesComponents/Hero/IndustryHero2'
import NumbersData from '../components/PagesComponents/NumbersData'
import { TrendingUp, AutoGraph, BarChart, Lightbulb } from "@mui/icons-material";
import NumberData2 from '../components/PagesComponents/NumberData2';
import SolutionsBoxes from '../components/PagesComponents/CapabilitiesPages/SolutionsBoxes';
import ClientsList from '../components/PagesComponents/CapabilitiesPages/ClientsList';
import InformationStripLine from '../components/PagesComponents/CapabilitiesPages/InformationStripLine';
import IndustryTechnology from '../components/PagesComponents/IndustryTechnology';
import SingleBlog from '../components/PagesComponents/Blogs/SingleBlog';
import BlackCta from '../components/BlackCta';


export const metadata = {
  title: "Machine Learning & Deep Learning Solutions - Amlgo Labs",
  description: "Discover cutting-edge Machine Learning & Deep Learning solutions at Amlgo Labs. Drive innovation with AI-powered insights, automation & predictive analytics.",
  keywords: "Machine Learning, Deep Learning, AI solutions, Amlgo Labs, predictive analytics, automation, AI-powered insights, neural networks, data-driven decisions, artificial intelligence, model development, intelligent automation, advanced analytics, business transformation",
};



const page = () => {

  const financialData = [
    { icon: TrendingUp, label: "Predictive Accuracy" },
    { icon: AutoGraph, label: "Automated Efficiency" },
    { icon: BarChart, label: "Scalable Insights" },
    { icon: Lightbulb, label: "Innovative Solutions" },
  ];

          const impactData = [
            { percentage: "68%", description: " PREDICTIVE ANALYTICS" },
            { percentage: "59%", description: "AUTOMATED DECISION-MAKING" },
            { percentage: "51%", description: " PERSONALIZED EXPERIENCES" },
            { percentage: "43%", description: "PROCESS OPTIMIZATION" },
          ];
          const solutionsData = [
            { heading: "Predictive Maintenance", text: "Predict equipment failures and optimize maintenance with ML-powered solutions, reducing downtime and costs." },
            { heading: "Fraud Detection", text: "Detect and prevent fraud using advanced ML algorithms to identify anomalies and suspicious patterns in real-time." },
            { heading: "Personalized Recommendations", text: "Boost sales and loyalty with AI-driven product recommendations and personalized marketing campaigns." },
            { heading: "Demand Forecasting", text: "Forecast demand accurately to optimize inventory management and resource allocation." },
            { heading: "Natural Language Processing (NLP)", text: "Use NLP and DL to analyze text, extract insights, and automate tasks like sentiment analysis and summarization." },
            { heading: "Computer Vision", text: "Enable systems to interpret images and videos for applications in quality control, security, and retail." },
            { heading: "Custom ML & DL Model Development", text: "Create custom ML & DL models tailored to your needs using our expertise in deep learning frameworks and algorithms." },
            { heading: "MLOps & Model Governance", text: "Ensure efficient deployment and management of ML & DL models with our MLOps and model governance framework." }
          ];
          
          const technologies = [
            { name: 'Microsoft Azure', image: '/azure.png' },
            { name: 'Amazon Web Services', image: '/aws.png' },
            { name: 'Google Cloud', image: '/googlecloud.png' },
            { name: 'Dell Technologies', image: '/dell.png' },
            // { name: 'Natural Language Processing', image: '/partner5.png' },
            // { name: 'Knowledge Graph', image: '/partner6.png' },
    
        ];
    
    
    
        

  return (
    <div>
         <IndustryHero2
        title="Engine for a Visually Driven World"
        description="Leverage Machine Learning (ML) and Deep Learning (DL) to optimize operations, automate processes, and drive innovation. Amlgo Labs empowers your business with data-driven insights and intelligent decision-making for enhanced efficiency and personalized experiences."
        buttonText="Let's Talk"
        buttonLink="/contact"
        backgroundImage="/capabilities/mldlbanner.png" // Provide the correct image path
      />

<NumbersData 
      heading="Machine Learning and Deep Learning are essential for businesses to unlock valuable insights, automate tasks, and enhance decision-making. These technologies drive innovation, improve efficiency, and enable personalized customer experiences, positioning your business for sustainable growth and success."
      data={financialData}
    />

<NumberData2 
      title="Smarter Decisions with Machine Learning Insights and Data-Driven Precision" 
      data={impactData} 
    />

<SolutionsBoxes 
  title="Our Solutions" 
  description="We empower businesses to leverage the full potential of ML & DL with tailored solutions designed to address specific needs and drive measurable results." 
  solutions={solutionsData} 
/>
<ClientsList/>
<InformationStripLine
  title="Discover the distinctions between Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL) in simple terms."
  subtitle="Learn how these technologies work and their unique roles in innovation."
  buttonText="Explore Now"
  buttonLink="/"
/>

<IndustryTechnology heading = "Powering Innovation Through Strategic Tech Partnerships"
 technologies={technologies} />

<SingleBlog
      title="Real-World Applications of AI in Logistics"
      description="AI is transforming logistics by turning supply chains into data-driven ecosystems, optimizing operations, reducing costs, and improving customer satisfaction through automation and predictive analytics."
      imageSrc="/placeholder/1024x1024.png"
      blogLink="/" // Update with actual blog route
      insightsLink="/" // Update with actual insights route
    />

<BlackCta heading = "Struggling to stay ahead? Let’s turn your challenges into opportunities with Machine Learning and Deep Learning AI that thinks, learns, and grows with you. Begin today!"
         buttonText="Get in touch"/>

    </div>
  )
}

export default page