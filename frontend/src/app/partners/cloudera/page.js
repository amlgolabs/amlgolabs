import SingleBlog from '@/app/components/PagesComponents/Blogs/SingleBlog'
import React from 'react'
import PartnerSolutions from '../components/PartnerSolutions'
import Capabilities from '../components/Capabilities'
import IndividualHero from '../components/IndividualHero'

export const metadata = {
  title: "Amlgo Labs - Trusted Cloudera Partner for Data & AI Solutions",
  description: "Explore Amlgo Labs, a certified Cloudera partner, delivering advanced big data, AI, and analytics solutions to drive business growth and innovation.",
  keywords: "Amlgo Labs, Cloudera Partner, big data solutions, AI-driven innovation, data analytics, machine learning, cloud solutions, digital transformation, data engineering, predictive analytics, business growth",
};


const page = () => {
    const capabilitiesData = [
        {
          title: "Data Storage",
          description:
            "We tailor data storage solutions to your specific needs, leveraging our expertise in Cloudera Data Platform's (CDP) HDFS, HBase, Impala, and Kudu to optimize, organize, and configure access to your data.",
        },
        {
          title: "Management and Governance",
          description:
            "Enable fine-grained access control, security, and compliance management with Amlgo Labs expertise in Cloudera Ranger, Atlas, and Navigator, ensuring data integrity and regulatory adherence.",
        },
        {
          title: "Data Ingestion & Orchestration",
          description:
            "Streamline your data ingestion and pipeline management with Amlgo Labs. We utilize Cloudera DataFlow (CDF), NiFi, Kafka, and Spark Streaming to automate key processes and improve efficiency.",
        },
        {
          title: "Consumption and Egress",
          description:
            "Gain the insights you need in near real-time with our expertise in Cloudera Impala, Spark SQL, and Cloudera Machine Learning, enabling rapid data exploration and analysis.",
        },
      ];
      

      
      const tabsData = [
        {
          title: "Cloudera Data Platform (CDP)",
          content: `CDP empowers enterprises to build data-driven solutions across hybrid and multi-cloud environments. Their platform facilitates data integration, analytics, and machine learning to solve complex business challenges.`,
          image: "/partners/cloudera/clouderadataplatform.jpg",
        },
        {
          title: "Cloudera DataFlow (CDF)",
          content: `Enhance data ingestion and real-time processing with Cloudera DataFlow. This platform streamlines data movement and transformation, enabling rapid data integration and analysis.`,
          image: "/partners/cloudera/clouderadataflow.jpg",

        },
        {
          title: "Cloudera Machine Learning (CML)",
          content: `The Cloudera Machine Learning suite provides a unified platform for developing and managing machine learning models, empowering organizations to efficiently build, deploy, and monitor AI solutions.`,
          image: "/partners/cloudera/clouderamachinelearning.jpg",

        },
        {
          title: "Cloudera Impala",
          content: `The exponential growth of data is impacting business operations. Challenges include inadequate system scalability, the inability to effectively manage diverse data types, and unsustainable infrastructure and maintenance costs. Cloudera Impala addresses these challenges with its high-performance SQL query engine.`,
          image: "/partners/cloudera/clouderaimpala.jpg",
          
        },
        {
          title: "Cloudera GenAI Solutions",
          content: `Amlgo Labs GenAI offerings and solutions span a broad spectrum of capabilities, encompassing text, vision, speech, and multi-modal functionalities within the Cloudera ecosystem. These advanced technologies enable us to optimize data processing and analytics workflows. Furthermore, our dedicated AI engineering practice focuses on MLOps and LLM governance, ensuring the effective management and responsible deployment of GenAI applications on the Cloudera platform.`,
          image: "/partners/cloudera/clouderagenaisolution.jpg",

        },
        {
          title: "Cloudera Data Science Workbench (CDSW)",
          content: `Leverage the power of CDSW to transform your data science operations. This platform provides the tools to extract insights, build models, and deploy applications that solve critical business challenges.`,
          image: "/partners/cloudera/clouderadatascienceworkbench.jpg",

        },
        {
          title: "Cloudera Data Engineering",
          content: `In today's data-driven world, businesses rely on data for everything from analytics and machine learning to strategic decision-making. This data, often residing in various sources within the Cloudera platform, requires processing prior to analysis.`,
          image: "/partners/cloudera/clouderadataengineering.jpg",
        },
        {
          title: "Cloudera Spark",
          content: `Traditional data management approaches struggle with the sheer volume of data produced by modern digital touchpoints. Cloudera Spark provides a powerful and scalable solution for processing this data and delivering interactive analytics and machine learning insights.`,
          image: "/partners/cloudera/clouderaspark.jpg",
        },
        {
          title: "Cloudera DevOps",
          content: `It provides a platform for developing and managing DevOps solutions within the Cloudera ecosystem. Their service helps businesses monitor the entire data lifecycle — from ingestion, processing, and analytics, to deployment and operations.`,
          image: "/partners/cloudera/clouderadevops.jpg",
        },
      ];
      
      
      
      
  return (
    <div>
         <IndividualHero
        heading="Unified Data Enterprise with Cloudera: Driving Insight and Agility"
        content="Fragmented data silos hinder enterprise agility and limit actionable insights. Amlgo Labs partnership with Cloudera addresses these challenges by establishing a unified data foundation and leveraging robust data management capabilities. With a focus on seamless integration, we prioritize streamlined workflows and implement solutions to minimize disruption, enabling you to build resilience, agility, and true data-driven visibility, one strategic initiative at a time."
        buttonText="Let's Talk"
        buttonLink="/contact-us"
        imageSrc="/partners/cloudera/hero.png"
        imageAlt="Amazon Web Services"
      />

<Capabilities
      data={capabilitiesData}
      title="Our Capabilities"
      description="Discover how we empower businesses to harness the full potential of their data through our cutting-edge solutions."
    />

<PartnerSolutions tabs={tabsData} />
<SingleBlog
      title="Three Key Elements of a Future-Ready Data and AI Strategy"
      description="A future-ready data and AI strategy focuses on three key elements: robust data governance, scalable AI infrastructure, and ethical AI practices. By ensuring data quality, investing in flexible technology, and prioritizing responsible AI usage, organizations can drive innovation and stay ahead in the evolving digital landscape."
      imageSrc="/partners/blogs/Cloudera.jpg"

      button1Link="https://www.cloudera.com/blog/business/3-elements-of-a-forward-looking-data-and-ai-strategy.html" // Update with actual blog route
      
      button1Text="Read Now"
    
    />
    
    </div>
  )
}

export default page