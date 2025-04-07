import React from 'react'
import IndividualHero from '../components/IndividualHero'
import Capabilities from '../components/Capabilities'
import PartnerSolutions from '../components/PartnerSolutions';
import SingleBlog from '@/app/components/PagesComponents/Blogs/SingleBlog';

export const metadata = {
  title: "AWS Partner - Amlgo Labs - Cloud & AI Solutions",
  description: "Amlgo Labs, an AWS Partner, offers AI-driven cloud solutions, data analytics & automation. Optimize performance with our AWS expertise. Visit us today.",
  keywords: "Amlgo Labs, AWS Partner, cloud solutions, AI-driven innovation, data analytics, cloud infrastructure, machine learning, digital transformation, cloud automation, big data, AWS consulting, performance optimization",
};


const page = () => {

    const capabilitiesData = [
        {
          title: "Data Storage",
          description:
            "We tailor data management solutions to your specific needs, leveraging our expertise in Amazon S3, Lake Formation, DynamoDB, Redshift, and RDS to optimize, organize, and configure access to your data.",
        },
        {
          title: "Management and Governance",
          description:
            "Enable fine-grained access control, security, and compliance management with Amlgo Labs expertise in AWS Glue Data Catalog, IAM, IAM Identity Center, CloudWatch, KMS, GuardDuty, and Macie.",
        },
        {
          title: "Data Ingestion & Orchestration",
          description:
            "Streamline your data ingestion and pipeline management with Amlgo Labs. We utilize AWS DMS, Transfer Family, Glue, Lambda, Kinesis Data Streaming, and Data Pipeline to automate key processes and improve efficiency.",
        },
        {
          title: "Consumption and Egress",
          description:
            "Gain the insights you need in near real-time with our expertise in ANS Glue, Amazon EMR, Amazon Athena, and Amazon Kinesis Data Analytics.",
        },
      ];


      const tabsData = [
        {
          title: "AWS CPG",
          content: `AWS empowers CPG businesses to build data-driven solutions in the cloud. Their platform facilitates data insights, model development, and application deployment to solve operational challenges.`,
          image: "/partners/aws/awscpg.jpg",
        },
        {
          title: "AWS Lambda",
          content: `Increase developer productivity with AWS Lambda. This serverless platform removes the burden of server management, enabling developers to focus solely on writing and deploying code.`,
          image: "/partners/aws/awslambda.jpg",

        },
        {
          title: "AWS Data and Analytics",
          content: `The AWS Data and Analytics suite provides a cloud-based platform for developing and managing DnA solutions, empowering organizations to efficiently and cost-effectively collect, store, process, analyze, and visualize vast datasets.`,
          image: "/partners/aws/awsdataandanalytics.jpg",

        },
        {
          title: "Amazon Redshift",
          content: `The exponential growth of application data is impacting business operations. Challenges include inadequate system scalability, the inability to effectively manage both structured and unstructured data, and unsustainable infrastructure and maintenance costs.`,
          image: "/partners/aws/amazonredshift.jpg",

        },
        {
          title: "AWS Generative AI",
          content: `Amlgo Labs Gen-AI offerings and solutions span a broad spectrum of capabilities, encompassing text, vision, speech, and multi-modal functionalities. These advanced technologies enable us to optimize both business processes and data engineering workflows. Furthermore, our dedicated AI engineering practice focuses on LLMOps and LLM governance, ensuring the effective management and responsible deployment of Gen-AI applications built on large language models.`,
          image: "/partners/aws/awsgenerativeai.jpg",

        },
        {
          title: "AWS Machine Learning",
          content: `Leverage the power of AWS Machine Learning to transform your operations. Their cloud platform provides the tools to extract insights, build models, and deploy applications that solve critical business challenges.`,
          image: "/partners/aws/awsmachinelearning.jpg",

        },
        {
          title: "AWS Glue",
          content: `In today's data-driven world, businesses rely on data for everything from analytics and machine learning to strategic decision-making. This data, often residing in various sources like data lakes and warehouses, requires processing prior to analysis.`,
          image: "/partners/aws/awsglue.jpg",

        },
        {
          title: "AWS EMR",
          content: `Traditional data management approaches struggle with the sheer volume of data produced by modern digital touchpoints. A solution capable of processing this data and delivering interactive analytics and machine learning is crucial for extracting actionable insights.`,
          image: "/partners/aws/awsemr.jpg",

        },
        {
          title: "AWS DevOps",
          content: `AWS DevOps provides a cloud-based platform for developing and managing DevOps solutions. Their service helps businesses monitor the entire development lifecycle — from planning, development, integration and testing, deployment, and operations.`,
          image: "/partners/aws/awsdevops.jpg",

        },
      ];
      
      
      
      

  return (
    <div>
        <IndividualHero
        heading="Centralized Data Management and Agility with a Data Lakehouse on AWS."
        content="Fragmented data and disjointed systems leave traditional supply chains exposed. Amlgo-SCAI, our Supply Chain Intelligence solution, addresses this vulnerability by establishing a unified data foundation and leveraging targeted AI to generate actionable insights. With a human-centric design, we prioritize user adoption and implement solutions incrementally to minimize disruption, enabling you to build resilience, agility, and true visibility, one strategic use case at a time. "
        buttonText="Let's Talk"
        buttonLink="/contact-us"
        imageSrc="/partners/aws/hero2.png"
        imageAlt="Amazon Web Services"
      />
       <Capabilities
      data={capabilitiesData}
      title="Our Capabilities"
      description="Discover how we empower businesses to harness the full potential of their data through our cutting-edge solutions."
    />

<PartnerSolutions tabs={tabsData} />
<SingleBlog
      title="Deploying Language Model Applications to AWS: An Open-Source Approach"
      description="In the ever-evolving landscape of cloud computing, deploying and managing language model (LLM) applications efficiently is crucial for developers and businesses alike. Amazon Web Services (AWS) provides a robust infrastructure for hosting applications, and with the rise of open-source tools."
      imageSrc="/partners/blogs/AWS.jpg"
      button1Link="/documents/aws.pdf" // Update with actual blog route
      button1Text="Read Now"
    />

    </div>
  )
}

export default page