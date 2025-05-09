import React from 'react'
import HeroSection from '../components/PagesComponents/CapabilitiesPages/HeroSection'
import Clients from '../components/Clients'
import ClientsList from '../components/PagesComponents/CapabilitiesPages/ClientsList'
import CloudPartners from '../components/CloudPartners'
import IndustryFocusBlack from '../components/PagesComponents/CapabilitiesPages/IndustryFocusBlack'
import { BiSolidBank } from 'react-icons/bi'
import { FaCar } from 'react-icons/fa'
import { MdLocalPharmacy, MdOutlinePrecisionManufacturing, MdRealEstateAgent } from 'react-icons/md'
import { TiShoppingCart } from 'react-icons/ti'
import SolutionsBoxes from '../components/PagesComponents/CapabilitiesPages/SolutionsBoxes'
import SingleBlog from '../components/PagesComponents/Blogs/SingleBlog'
import InformationStripLine from '../components/PagesComponents/CapabilitiesPages/InformationStripLine'
import TechStack from '../components/PagesComponents/CapabilitiesPages/TechStack'

export const metadata = {
  title: "Cloud Solutions – AWS, Azure, GCP - Amlgo Labs",
  description: "Boost performance with AWS, Azure & GCP cloud solutions. Amlgo Labs helps you scale securely with expert cloud consulting & migration. Get started today.",
  keywords: "azure cloud services, azure cloud computing, cloud solutions company, microsoft azure hosting, cloud security, storage cloud services, storage cloud, azure hosting services, amazon storage, aws cloud cost optimization, amazon hosting, amazon cloud hosting, aws experts, aws cost optimization, microsoft azure cloud storage, amazon web services cloud storage, aws cloud optimization, cloud hosting, aws cloud labs, azure business, azure hosting cost, cloud cost optimization best practices, amazon web hosting, cloud services security, cloud to cloud migration, data storage cloud services, amazon hosting services, microsoft azure for business, cloud based security solutions, security in cloud computing, best cloud services, microsoft azure hosting services, aws cost optimization services, google cloud services platform, cloud storage solutions for business, amazon cloud hosting services, azure cloud pricing, gcp multi cloud, amazon azure cloud, google cloud data storage, microsoft azure cloud computing courses, aws ec2 azure, cloud cost optimization aws, manage cloud services, microsoft cloud hosting, aws for cloud computing, services in azure cloud, hosting azure, azure cloud computing services, microsoft azure cloud partners, google cloud cloud computing services, cloud and security, cost optimization cloud, aws hosted services, azure cloud services pricing, cloud services aws azure, cloud analytics platforms, google cloud storage business, microsoft cloud provider, cloud native security solutions, google and cloud, microsoft azure web services, amazon hosting costs, amazon aws cloud storage, aws analytics platform, azure and cloud, cost of aws cloud services, cost optimization in cloud, aws cloud data analytics, cloud services provided by aws, azure cloud subscription, gcp cloud hosting, microsoft azure cloud pricing, manage cloud, cost optimisation aws, azure cloud platform services, cost effective cloud storage, cloud services for machine learning, aws expertise, services by aws, cloud it security, best practices cloud security, microsoft azure cloud services."
};



const page = () => {
    const industryData = [
        { industryName: 'Banking and Finance', description: 'Secure, scalable cloud solutions for seamless transactions and compliance.', link: '/banking-and-finance' , icon: <BiSolidBank/>},
        { industryName: 'Automotive', description: 'Drive innovation with AI-powered analytics and IoT integration.', link: '/automotive-industry', icon: <FaCar/> },
        { industryName: 'Manufacturing', description: 'Optimize production with real-time data and predictive maintenance.', link: '/manufacturing-ai-industry', icon: <MdOutlinePrecisionManufacturing/> },
        { industryName: 'Consumer-Goods', description: 'Enhance customer experiences with personalized insights and agility.', link: '/consumer-goods-retail',  icon: <TiShoppingCart/> },
        { industryName: 'Real Estate', description: 'Streamline operations with smart data management and analytics.', link: '/real-estate-infrastructure' , icon: <MdRealEstateAgent/>},
        { industryName: 'Pharma and Life Sciences', description: 'Accelerate research with secure, compliant cloud platforms.', link: '/pharma-life-sciences',icon : <MdLocalPharmacy/> }
    ];

    const solutionsData = [
      { heading: "AWS Cloud Solutions", text: "Harness the power of Amazon Web Services (AWS) with our expertise in EC2, S3, Lambda, and other core services. Build scalable, secure, and cost-effective solutions for your business." },
      { heading: "Azure Cloud Solutions", text: "Leverage the capabilities of Microsoft Azure with our expertise in Virtual Machines, Azure Storage, Azure Functions, and other key services. Develop and deploy enterprise-grade applications in a hybrid or cloud-native environment." },
      { heading: "GCP Cloud Solutions", text: "Utilize the innovative technologies of Google Cloud Platform (GCP) with our expertise in Compute Engine, Cloud Storage, Cloud Functions, and other powerful services. Build intelligent and data-driven solutions with GCP's cutting-edge AI and ML capabilities." },
      { heading: "Multi-Cloud Strategy & Management", text: "Manage your workloads across multiple cloud platforms with our multi-cloud management solutions. Optimize costs, enhance flexibility, and avoid vendor lock-in." },
      { heading: "Cloud Migration & Modernization", text: "Seamlessly migrate your existing applications and infrastructure to the cloud and modernize your IT environment for increased agility and efficiency." },
      { heading: "Cloud Security & Compliance", text: "Ensure the security and compliance of your cloud deployments with our comprehensive security solutions and best practices." },
      { heading: "Cloud Cost Optimization", text: "Optimize your cloud spending and maximize ROI with our cost optimization services. We help you identify and eliminate unnecessary costs, and implement cost-effective cloud strategies." },
      { heading: "Cloud-Native Application Development", text: "Build and deploy modern, scalable applications optimized for cloud environments using microservices, containers, and serverless architectures." }
    ];
    

    const techStackData = [
      { src: "/TechStack/kubernetes.png", alt: "kubernetes" },
      { src: "/TechStack/jenkins.png", alt: "jenkins" },
      { src: "/TechStack/awslambda.png", alt: "aws lambda" },
      { src: "/TechStack/postgresql.png", alt: "postgresql" },
      { src: "/TechStack/mongodb.png", alt: "mongodb" },
      { src: "/TechStack/prometheus.png", alt: "prometheus" },
      { src: "/TechStack/awscloudformation.png", alt: "aws cloudformation" },
      { src: "/TechStack/firebase.png", alt: "firebase" },
      { src: "/TechStack/elasticbeanstalk.png", alt: "elastic beanstalk" },
      { src: "/TechStack/terraform.png", alt: "terraform" },
    ];
    
  return (
    <div>
        {/* <HeroSection/> */}
        <HeroSection
  title="Cloud Architecting Your Digital Future"
  description="Drive agility, scalability, and innovation with cloud platforms. 
               Amlgo Labs helps you navigate cloud adoption—AWS, Azure, or GCP—
               to optimize operations and architect your digital future."
  buttonText="Get in Touch"
  imageSrc="/capabilities/cloudservices.png"
  imageAlt="Cloud Services"
/>

        <ClientsList/>
        <IndustryFocusBlack title="Businesses We Support"
        industryData={industryData}
      />
        <CloudPartners />
        <SingleBlog
      title="Deploying Language Model Applications to AWS: An Open-Source Approach"
      description="In the ever-evolving landscape of cloud computing, deploying and managing language model (LLM) applications efficiently is crucial for developers and businesses alike. Amazon Web Services (AWS) provides a robust infrastructure for hosting applications."
      imageSrc="/capabilities/cloud-services/blog.png"
      button1Link="/documents/aws.pdf" // Update with actual blog route
      
      button1Text="Read Now"
    
    />
<SolutionsBoxes 
  title="Our Solutions" 
  description="We empower businesses to leverage the full potential of cloud platforms with tailored solutions designed to address specific needs and drive measurable results." 
  solutions={solutionsData} 
/>

<InformationStripLine
  title="Dream bigger, achieve more! Let the cloud empower your journey with limitless possibilities, seamless growth, and a future built on innovation. Start soaring today. "
  buttonText="Let's Talk"
  usePopup={true}
/>
<TechStack title="Tech Stack We are working on" techStack={techStackData} />


    </div>
  )
}

export default page