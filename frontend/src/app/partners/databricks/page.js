import React from 'react'
import IndividualHero from '../components/IndividualHero'
import Capabilities from '../components/Capabilities'
import PartnerSolutions from '../components/PartnerSolutions';
import SingleBlog from '@/app/components/PagesComponents/Blogs/SingleBlog';

export const metadata = {
  title: "Amlgo Labs - Databricks Partner for AI & Data Solutions",
  description: "Amlgo Labs, a trusted Databricks partner, accelerates AI, ML & data engineering with seamless cloud solutions. Unlock data-driven success today.",
  keywords: "Amlgo Labs, Databricks Partner, AI solutions, machine learning, data engineering, cloud solutions, big data, data-driven success, digital transformation, data analytics, MLOps, cloud integration, predictive analytics",
};


const page = () => {
    const capabilitiesData = [
        {
          title: "Data Modernization",
          description:
            "Transform your data landscape with Amlgo Labs' migration expertise and purpose-built accelerators. We enhance data accessibility, improve data quality, and empower data-driven decisions. Seamlessly migrate data from disparate legacy systems to a unified Databricks Lakehouse Platform using Databricks Autoloader.",
        },
        {
          title: "Data Governance and Ops",
          description:
            "Protect your valuable data assets and maintain compliance with industry regulations through Amlgo Labs' expertise in Unity Catalog implementation, leveraging Delta Sharing. Our advanced DataOps solutions and accelerators empower you to enhance agility, reliability, and cost-effectiveness in delivering business value at scale.",
        },
        {
          title: "Robust Infrastructure",
          description:
            "Modernize your data infrastructure with Amlgo Labs. We implement data ingestion from disparate sources, robust data processing, and the creation of tiered data layers for efficient consumption, powered by Delta Lake and Unity Catalog.",
        },
      ];

      const tabsData = [
        {
          title: "Data Fabric",
          content: `Accelerator for Implementing Modern Lakehouse leveraging Databricks and the underlying cloud in a highly scalable manner with powerful Governance & Automation Capabilities at its core.`,
          image: "/partners/databricks/datafabric.jpg",
        },
        {
          title: "MLCore",
          content: `This comprehensive accelerator, built on Databricks Delta Lake, MLflow, and Unity Catalog, offers end-to-end MLOps workflow modules to simplify and accelerate MLOps platform development and model management.`,
          image: "/partners/databricks/mlcore.jpg",

        },
        {
          title: "Data Quality & Profiling Framework",
          content: `Gain complete control over data testing with this flexible, end-to-end solution. It features 50+ rules, custom rule support, and dashboards for analyzing test and profiling results.`,
          image: "/partners/databricks/dataqualityandprofilingframework.jpg",

        },
        {
          title: "Databricks Operations Monitoring",
          content: `Built on Databricks Overwatch, this accelerator streamlines workspace-level governance with consolidated cost and infrastructure utilization reporting, enabling 360° optimization.`,
          image: "/partners/databricks/databricksoperationsmonitoring.jpg",

        },
        {
          title: "DataOps Observability",
          content: `Trace your data's journey with this Observability accelerator. It captures operational and runtime metadata, including pipeline details, dataset information, and data quality assertions, delivering end-to-end lineage across cloud services.`,
          image: "/partners/databricks/dataopsobservability.jpg",

        },
      ];
      
  return (
    <div>
        <IndividualHero
        heading="Lakehouse and Data: The Foundation for Enterprise Transformation"
        content="Amlgo Labs partnership with Databricks unites cutting-edge capabilities to empower enterprises in solving complex problems and accelerating solutions for today's dynamic world and tomorrow's challenges. Harness the power of the Databricks Lakehouse Platform, seamlessly integrated with Amlgo Labs expertise in advanced analytics and AI/ML. Enable real-time processing and analysis of massive datasets with centralized governance. Break down data silos and seamlessly integrate data engineering, data science, and business analytics to maximize performance gains while reducing costs and complexity."
        buttonText="Read More"
        buttonLink="/partners/databricks"
        imageSrc="/partners/databricks/hero.png"
        imageAlt="Amazon Web Services"
      />

<Capabilities
      data={capabilitiesData}
      title="Our Capabilities"
      description="Discover how we empower businesses to harness the full potential of their data through our cutting-edge solutions."
    />

<PartnerSolutions tabs={tabsData} />
<SingleBlog
      title="Lake Is The New Address Of Data"
      description="Data has always been an integral part of human life. With the evaluation of the former, the latter has also evolved. Data Lake is like a large container similar to real lakes and rivers."
      imageSrc="/partners/blogs/DataBrick.jpg"

      blogLink="/blog/generative-ai" // Update with actual blog route
      insightsLink="/insights/generative-ai" // Update with actual insights route
    />
    </div>
  )
}

export default page