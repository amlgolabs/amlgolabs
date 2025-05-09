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
  keywords: "Machine Learning, Deep Learning, AI solutions, Amlgo Labs, predictive analytics, automation, AI-powered insights, neural networks, data-driven decisions, artificial intelligence, model development, intelligent automation, advanced analytics, business transformation, ai learning, deep learning ai, ai deep learning, machine learning ai, ai and machine learning, learning artificial intelligence, ml learning, machine learning and artificial intelligence, artificial intelligence machine learning, using ai, ai and ml, about artificial intelligence, machine learning for data analysis, ai and deep learning, machine learning how to, learn ai ml, artificial intelligence and deep learning, ai training, learning with ai, using artificial intelligence, cloud services for machine learning, ai for learning, artificial intelligence data analytics, ml ai, learn ml, artificial intelligence and data analytics, microsoft azure machine learning, ai for machine learning, artificial intelligence in data analytics, artificial intelligence for data analytics, ai with machine learning, artificial intelligence automation, machine learning with ai, ai learning machine, ai and learning, ai with deep learning, learning nlp, data engineering for machine learning, ai driven data analytics, artificial intelligence & deep learning, artificial intelligence for data analysis, data analysis and artificial intelligence, about artificial intelligence and machine learning, data analysis for machine learning, ai ml predictive analytics, predictive maintenance and machine learning, machine learning in data analysis, microsoft azure for machine learning, artificial intelligence how to use, about ai and machine learning, artificial intelligence for predictive maintenance, automated sentiment analysis, data analysis with machine learning, ai and machine learning for business, using artificial intelligence in business, machine learning artificial intelligence and deep learning, ml & ai, artificial intelligence use in business, ai learning process, be in artificial intelligence, about ai artificial intelligence, artificial intelligence opportunities, deep learning in data analytics, machine learning is ai, deep learning data analytics, ai ml machine learning, process optimization using machine learning, ai algorithms machine learning, machine learning and deep learning courses, artificial intelligence machine learning and data science, data analytics deep learning"
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
        // description="Leverage Machine Learning (ML) and Deep Learning (DL) to optimize operations, automate processes, and drive innovation. Amlgo Labs empowers your business with data-driven insights and intelligent decision-making for enhanced efficiency and personalized experiences."
         description="Smarter operations. Faster automation. Bigger innovations. Amlgo Labs powers your business with ML, DL, and data-driven intelligence."
        buttonText="Let's Talk"
        buttonLink="/contact-us"
        backgroundImage="/capabilities/mldlbanner.png" // Provide the correct image path
      />

<NumbersData 
      heading="Machine Learning and Deep Learning are essential for businesses to unlock valuable insights, automate tasks, and enhance decision-making. These technologies drive innovation, improve efficiency, and enable personalized customer experiences, positioning your business for sustainable growth and success."
      data={financialData}
    />

<NumberData2 
      title="Smarter Decisons with Machine Learning Insights and Data-Driven Precision Have Resulted in Increases in the Following" 
      data={impactData} 
    />

<SolutionsBoxes 
  title="Our Solutions" 
  description="We empower businesses to leverage the full potential of ML & DL with tailored solutions designed to address specific needs and drive measurable results." 
  solutions={solutionsData} 
/>
<ClientsList/>
<InformationStripLine
  title="Explore the differences between Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL) in simple, easy-to-understand terms."
  subtitle="Understand how each technology functions and the unique part they play in driving innovation. Discover how these powerful tools are shaping the future across industries."
  // buttonText="Explore Now"
  buttonLink="/"
/>

<IndustryTechnology heading = "Powering Innovation Through Strategic Tech Partnerships"
 technologies={technologies} />

<SingleBlog
      title="Real-World Applications of AI in Logistics"
      description="AI is transforming logistics by turning supply chains into data-driven ecosystems, optimizing operations, reducing costs, and improving customer satisfaction through automation and predictive analytics."
      imageSrc="/capabilities/ml-dl/blog.png"
      button1Link="/documents/Ai_Logistics.pdf" 
      button1Text="Read Now"
    />

<BlackCta heading = "Struggling to stay ahead? Let’s turn your challenges into opportunities with Machine Learning and Deep Learning AI that thinks, learns, and grows with you. Begin today!"
         buttonText="Get in touch"/>

    </div>
  )
}

export default page