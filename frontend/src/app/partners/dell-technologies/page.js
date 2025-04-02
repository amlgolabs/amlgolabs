import SingleBlog from '@/app/components/PagesComponents/Blogs/SingleBlog'
import React from 'react'
import PartnerSolutions from '../components/PartnerSolutions'
import Capabilities from '../components/Capabilities'
import IndividualHero from '../components/IndividualHero'

export const metadata = {
  title: "Amlgo Labs - Official Dell Partner for AI & Data Solutions",
  description: "Explore Amlgo Labs partnership with Dell, delivering cutting-edge AI, data analytics & cloud solutions for enterprise growth. Learn more today.",
  keywords: "Amlgo Labs, Dell Partner, AI solutions, data analytics, cloud services, enterprise growth, digital transformation, machine learning, big data, cloud infrastructure, AI-driven innovation, technology partnership, Dell technologies",
};


const page = () => {
    const capabilitiesData = [
        {
          title: "Hybrid Cloud Solutions",
          description:
            "Modernize your IT infrastructure with Amlgo Labs expertise in Dell Technologies hybrid cloud offerings. We help you seamlessly integrate on-premises systems with cloud environments, enhancing data accessibility, improving data security, and empowering data-driven decisions. Migrate and manage data across your hybrid landscape with solutions tailored to your specific needs.",
        },
        {
          title: "Data Center Modernization",
          description:
            "Optimize your data center with Amlgo Labs and Dell Technologies. We leverage Dell's PowerScale, PowerFlex, and VxRail platforms, combined with our expertise, to build a high-performance, scalable, and secure data foundation. Enhance data management, streamline operations, and reduce costs with our tailored solutions.",
        },
        {
          title: "Edge Computing",
          description:
            "Extend your data processing capabilities to the edge with Amlgo Labs and Dell Technologies. We leverage Dell's edge infrastructure and our expertise to enable real-time insights and decision-making closer to the data source. Process and analyze data at the edge for faster, more efficient operations.",
        },
      ];

      
    const tabsData = [
        {
          title: "Data Platform Optimization",
          content: `Accelerator for implementing modern data platforms leveraging Dell Technologies infrastructure and software, optimized for performance, scalability, and security. Includes pre-built configurations and best practices for rapid deployment.`,
          image: "/partners/dell-technologies/dataplatformoptimizer.jpg",
        },
        {
          title: "AI/ML Infrastructure",
          content: `This comprehensive solution, built on Dell Technologies PowerEdge servers and NVIDIA GPUs, offers a high-performance infrastructure for AI/ML workloads. Streamlines the development and deployment of AI/ML models.`,
          image: "/partners/dell-technologies/aimlinfrastructure.jpg",

        },
        {
          title: "Data Security & Compliance Framework",
          content: `Gain complete control over data security and compliance with this flexible, end-to-end solution. Leverages Dell's security features and best practices to protect your valuable data assets.`,
          image: "/partners/dell-technologies/securitycompliance.jpg",

        },
        {
          title: "Infrastructure Monitoring & Management",
          content: `Built on Dell Technologies OpenManage systems management tools, this accelerator streamlines data center operations with consolidated infrastructure monitoring and reporting, enabling proactive management and optimization.`,
          image: "/partners/dell-technologies/infrastructuremonitoring.jpg",

        },
        {
          title: "Edge Data Processing",
          content: `Accelerate edge data processing with this solution optimized for Dell Technologies edge infrastructure. Enables real-time insights and decision-making at the edge, reducing latency and bandwidth requirements.`,
          image: "/partners/dell-technologies/edgedata.jpg",

        },
      ];
      
      
      
      
  return (
    <div>
         <IndividualHero
        heading="Dell Technologies and Amlgo Labs: Powering Enterprise Transformation"
        content="Amlgo Labs partnership with Dell Technologies unites cutting-edge infrastructure and expertise to empower enterprises in solving complex problems and accelerating solutions for today's dynamic world and tomorrow's challenges. Harness the power of Dell's robust hardware and software solutions, seamlessly integrated with Amlgo Labs expertise in advanced analytics and AI/ML. Enable high-performance processing and analysis of massive datasets with optimized infrastructure. Streamline data center operations and seamlessly integrate data engineering, data science, and business analytics to maximize performance gains while reducing costs and complexity."
        buttonText="Read More"
        buttonLink="/partners/dell-technologies"
        imageSrc="/partners/dell-technologies/hero.png"
        imageAlt="Amazon Web Services"
      />

<Capabilities
      data={capabilitiesData}
      title="Our Capabilities"
      description="Discover how we empower businesses to harness the full potential of their data through our cutting-edge solutions."
    />

<PartnerSolutions tabs={tabsData} />
<SingleBlog
      title="Why Dell is the Go-To Partner for Scalable Data Infrastructure?"
      description="Dell is the trusted partner for building scalable data infrastructure that drives innovation across industries. From robust storage solutions to advanced analytics, Dell empowers businesses to handle growing data demands, optimize operations, and future-proof their infrastructure for tomorrow’s challenges."
      imageSrc="/partners/blogs/Dell.jpg"

      button1Link="/blog/generative-ai" // Update with actual blog route
      button2Link="/insights/generative-ai" // Update with actual insights route
      button1Text="Read Now"
      button2Text="Explore More"
    />
    
    </div>
  )
}

export default page