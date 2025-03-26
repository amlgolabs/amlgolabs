import SingleBlog from '@/app/components/PagesComponents/Blogs/SingleBlog'
import React from 'react'
import PartnerSolutions from '../components/PartnerSolutions'
import Capabilities from '../components/Capabilities'
import IndividualHero from '../components/IndividualHero'

export const metadata = {
  title: "Amlgo Labs - Google Cloud Partner for AI & Data Solutions",
  description: "Amlgo Labs, a trusted Google Cloud Partner, delivers AI, ML, and data analytics solutions to drive innovation and business growth. Explore our expertise today.",
  keywords: "Amlgo Labs, Google Cloud Partner, AI solutions, machine learning, data analytics, cloud services, digital transformation, big data, cloud infrastructure, AI-driven innovation, business growth, GCP solutions, cloud consulting",
};


const page = () => {
    const capabilitiesData = [
        {
          title: "Data Lake Modernization",
          description:
            "Benefit from our Google Cloud partnership and transform your data lakes. We leverage cutting-edge services like Data Transfer Service, Storage Transfer Service, Cloud Composer, Cloud IoT Core, Cloud Storage, and BigQuery Storage to securely handle your data at any scale.",
        },
        {
          title: "DevOps",
          description:
            "Experience seamless builds in a fully managed Google Cloud environment. We leverage Cloud Build and our partnership to optimize your build processes, enhance productivity, and ensure smooth project execution.",
        },
        {
          title: "Compliance and Control",
          description:
            "Seamlessly manage and govern your hybrid data environment on Google Cloud. Our extended partner ecosystem and Google Cloud's robust capabilities—including Data Catalog, Datastream, Cloud Composer, and Cloud Security—enhance security and mitigate risks.",
        },
        {
          title: "Data Refinement",
          description:
            "Achieve rapid open-source data processing and accelerate your time to insights with our Google Cloud partnership. We leverage our extensive knowledge of BigQuery Compute, Dataflow, Dataproc, Dataprep, and Data Fusion to optimize your workflows.",
        },
      ];

      const tabsData = [
        {
          title: "E2E SCAI",
          content: `Drive operational excellence in your supply chain with Amlgo E2E SCAI. This sophisticated End-to-End Supply Chain AI Suite provides real-time intelligence, enabling you to elevate customer service and streamline order fulfillment.`,
          image: "/partners/google-cloud/e2escai.jpg",

        },
        {
          title: "Dataform Library",
          content: `Amlgo Labs Dataform libraries provide a robust framework for data transformation and validation. Leveraging this open-source, modern data transformation framework, our libraries empower data analysts to develop, test, version control, and schedule complex SQL transformations within BigQuery, optimizing the ELT (Extract, Load, Transform) process.`,
          image: "/partners/google-cloud/dataformlibrary.jpg",

        },
        {
          title: "Infra Provisioner",
          content: `Automated deployment delivers substantial benefits, including accelerated implementation cycles, minimized error rates, consistent and repeatable deployments, reduced operational costs, enhanced auditability, and seamless integration with application code deployment for a streamlined and unified release pipeline.`,
          image: "/partners/google-cloud/infraprovisioning.jpg",

        },
        {
          title: "Data Fabric",
          content: `Enable self-service data lake management with this powerful accelerator. It provides end-to-end capabilities for setting up ingestion and transformation pipelines, managing data, and monitoring performance.`,
          image: "/partners/google-cloud/datafabric.jpg",

        },
        {
          title: "Data Catalog",
          content: `Enhance data quality and governance with this comprehensive metadata management platform. It ingests all metadata types (business, operational, technical) via push and pull, offers robust user management and access controls, provides usage reporting and statistical profiling, integrates with Great Expectations for data quality reports, and is fully customizable.`,
          image: "/partners/google-cloud/cloudcatalog.jpg",

        },
        {
          title: "Data Onboarder",
          content: `Deliver a frictionless customer experience with this schema-driven decision maker. It streamlines data onboarding, ensuring effortless product/service use. Dynamic schema validation, data preview, and rapid processing enable quick, informed decisions.`,
          image: "/partners/google-cloud/dataonboarder.jpg",

        },
        {
          title: "FinOps Toolkit",
          content: `This operational framework enhances financial control and maximizes cloud ROI. By leveraging granular data from Google Cloud's CloudQuery and a robust rules database, it powers a unified semantic layer, a validation engine, and an insightful dashboard equipped with actionable recommendations.`,
          image: "/partners/google-cloud/finopstoolkit.jpg",

        },
      ];
      
      
      
  return (
    <div>
         <IndividualHero
        heading="Building a Better Future Together Amlgo Labs and Google Cloud's Cloud Expertise"
        content="To truly capitalize on digital transformation, organizations must go beyond simply lifting and shifting their IT infrastructure to the cloud. A holistic approach is essential, one that reimagines the entire business and embraces cloud technology as its core foundation. As a trusted Google Cloud partner, Amlgo Labs specializes in guiding businesses to make strategic cloud investments throughout their transformation. This empowers them to drive continuous innovation, remain at the cutting edge of technology, and effectively address their most critical challenges."
        buttonText="Read More"
        buttonLink="/partners/google-cloud"
        imageSrc="/partners/google-cloud/hero.png"
        imageAlt="Amazon Web Services"
      />

<Capabilities
      data={capabilitiesData}
      title="Our Capabilities"
      description="Discover how we empower businesses to harness the full potential of their data through our cutting-edge solutions."
    />

<PartnerSolutions tabs={tabsData} />
<SingleBlog
      title="The Future of Data: Why Google Cloud is the Game-Changer for Every Industry?"
      description="Google Cloud is revolutionizing industries by transforming how businesses handle data. From scalable infrastructure to AI-driven insights, Google Cloud empowers organizations to innovate, optimize operations, and stay ahead in a data-driven world. Explore how this cloud platform is shaping the future of technology across sectors."
      imageSrc="/partners/blogs/GoogleCloud.jpg"

      blogLink="/blog/generative-ai" // Update with actual blog route
      insightsLink="/insights/generative-ai" // Update with actual insights route
    />
    
    </div>
  )
}

export default page