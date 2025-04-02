import React from 'react'
import IndividualHero from '../components/IndividualHero'
import Capabilities from '../components/Capabilities'
import SingleBlog from '@/app/components/PagesComponents/Blogs/SingleBlog'
import PartnerSolutions from '../components/PartnerSolutions'

export const metadata = {
  title: "Amlgo Labs - Trusted Azure Partner for AI & Cloud Solutions",
  description: "Amlgo Labs, a certified Azure Partner, delivers cutting-edge AI, data analytics, and cloud solutions to drive digital transformation. Explore our expertise today.",
  keywords: "Amlgo Labs, Azure Partner, AI solutions, cloud consulting, digital transformation, data analytics, Microsoft Azure, cloud services, machine learning, big data, cloud migration, enterprise solutions, AI-driven innovation, cloud infrastructure",
};


const page = () => {
    const capabilitiesData = [
        {
          title: "Cloud Storage",
          description:
            "Strengthen your data security and disaster recovery posture. Our expertise in Azure Data Lake Storage Gen 2, Azure Synapse, Azure Cosmos DB, Azure SQL DB, and Azure Databricks operations monitoring delivers robust and reliable solutions. ",
        },
        {
          title: "Streamlining Data Pipelines",
          description:
            "Leverage our services for secure data ingestion and workload orchestration. We utilize Azure Data Fabric, Azure Data Factory, Azure Logic Apps, Azure IoT Hub, combined with our Data Quality and Profiling framework and Data Acquisition accelerator, to deliver a complete solution.",
        },
        {
            title: "Data Processing",
            description:
              "Accelerate your data processing and gain a competitive edge. Our mastery of Azure HDInsight, Databricks, Synapse Analytics, Machine Learning, Stream Analytics, and IoT Analytics unlocks the full potential of your data.",
          },
          {
            title: "Management and Governance",
            description:
              "Securely manage and govern your data across on-premises, multi-cloud, and SaaS environments with our expertise in Azure Data Catalog, Purview, AD, Key Vault, and Security Center.",
          },
      ];


      const tabsData = [
        {
          title: "Microsoft Fabric",
          content: `Amlgo Labs Microsoft Fabric solution streamlines the creation and implementation of a cutting-edge data and analytics platform. Built on Microsoft's Fabric SaaS platform, our solution seamlessly integrates data, analytics, and business intelligence, enhanced by generative AI. This provides a robust, scalable, and cost-effective foundation for high-impact use cases across diverse business functions and industries. Delivered as a complete, end-to-end package, including a demo environment, pre-built data frameworks, and seamless Power BI integration, our offering empowers you to unlock comprehensive insights and advanced analytics capabilities.`,
          image: "/partners/azure/fabric.png",
        },
        {
          title: "Azure OpenAI",
          content: `In today's digital world, data is the lifeblood of business success, a treasure trove of untapped potential. Navigating this data-rich landscape can be overwhelming without the right guidance. Amlgo Labs empowers businesses to confidently unlock the value hidden within their data. Our AI-powered search summarization swiftly extracts critical information from sprawling documents, transforming data complexity into strategic clarity. With Amlgo Labs instant insights, your data seamlessly translates into rapid, strategic decisions, propelling your business to new heights of industry leadership.`,
          image: "/partners/azure/AzureOpenAI.jpg",

        },
        {
          title: "Azure Cosmos DB",
          content: `Amlgo Labs robust solution, built on the powerful foundation of Azure Cosmos DB, Azure OpenAI, and Delta Lake, tackles your most complex data challenges head-on. Leveraging Cosmos DB's scalable, low-latency architecture, our solution enables real-time interaction with structured and unstructured data, delivering immediate access to critical information. Coupled with intelligent document summarization and natural language querying, our system transforms raw data into actionable insights, empowering you to make informed decisions based on the most current and relevant information. Perfect for organizations demanding high-performance data management and real-time insights across diverse data formats.`,
          image: "/partners/azure/cosmosdb2.png",

        },
      ];


  return (
    <div>
        {/* <IndividualHero/> */}
        <IndividualHero
        heading="Architect your future-proof data landscape on Microsoft Fabric, powered by Amlgo Labs transformative frameworks."
        content="Process your data at lightning speed with cloud platforms strategically located in global data centers, ensuring your users have instant access to critical information. Amlgo Labs partnership with Microsoft Azure provides unparalleled flexibility in service levels, storage locations, and coding languages, empowering you to scale seamlessly to meet your unique needs."
        buttonText="Read More"
        buttonLink="/partners/azure"
        imageSrc="/partners/azure/hero3.png"
        imageAlt="Microsoft Azure cloud services"
      />
         <Capabilities
      data={capabilitiesData}
      title="Our Capabilities"
      description="Discover how we empower businesses to harness the full potential of their data through our cutting-edge solutions."
    />
        <PartnerSolutions tabs={tabsData} />;
        <SingleBlog
      title="Migration of SQL Server to Azure SQL Managed Instance"
      description="Migration of legacy data warehouse to cloud-native centralized architecture” Problem statement: One of our business partners wanted to harness the power of modern-day problem-solving using the latest technology."
      imageSrc="/partners/blogs/Azure.jpg"

      button1Link="/blog/generative-ai" // Update with actual blog route
      button2Link="/insights/generative-ai" // Update with actual insights route
      button1Text="Read Now"
      button2Text="Explore More"
    />
    </div>
  )
}

export default page