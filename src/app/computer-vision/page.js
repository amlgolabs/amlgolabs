import React from 'react'
import IconHeadingGrid from '../components/PagesComponents/CapabilitiesPages/IconHeadingGrid'
import IndustryHero2 from '../components/PagesComponents/Hero/IndustryHero2'
import TechStack from '../components/PagesComponents/CapabilitiesPages/TechStack'
import KeyVerticals from '../components/PagesComponents/KeyVerticals'
import { FaCar, FaCogs } from 'react-icons/fa'
import IndustryCaseStudy1 from '../components/PagesComponents/CaseStudy/IndustryCaseStudy1'
import BlackCta from '../components/BlackCta'
import IndustryFocusBlack from '../components/PagesComponents/CapabilitiesPages/IndustryFocusBlack'
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { MdRealEstateAgent } from "react-icons/md";
import { MdLocalPharmacy } from "react-icons/md";
import { BiSolidBank } from "react-icons/bi";

import {
  Visibility, // Quality Control
  Accessible, // Accessibility Technology
  ReportProblem, // Damage Detection
  Security, // AI-Powered Security
  Description, // Document Digitization
  MonitorHeart, // Remote Patient Monitoring
  Warning, // Real-Time Anomaly Detection
  Mood, // Emotion Recognition
  AutoGraph, // Autonomous Process Optimization
  Inventory // Smart Inventory Management
} from '@mui/icons-material';


export const metadata = {
  title: "Computer Vision Solutions - Amlgo Labs",
  description: "Enhance business efficiency with AI-powered Computer Vision solutions by Amlgo Labs. Automate visual tasks, detect patterns, and drive intelligent insights.",
  keywords: "Computer Vision, AI-powered solutions, Amlgo Labs, visual automation, pattern detection, intelligent insights, machine learning, image recognition, object detection, deep learning, computer vision applications, AI in business, automated visual analysis, real-time processing, using ai, generative ai, ai analysis, ai generative, ai for computer, visual inspection ai, data analysis ai, analysis ai, ai data analysis, ai for data analysis, ai app, predictive ai, ai learning, ai for image, ai data insights, ai prediction, data analytics and ai, generative ai for images, image generative ai, generative image ai, ai for data, ai with images, create an image using ai, ai an image, data analysis and ai, data analytics with ai, ai and data analysis, ai generative image, ai how to use, through ai, management ai, video analysis computer vision, security for ai, images by ai, ai powered data analytics, ai quality inspection, inventory management using ai, image using ai, data analytics & ai, ai analyze, ai predictive, ai in it security, ai customer, images using ai, analytics with ai, by using ai, ai real time applications, generative images ai, business using ai, security with ai, data analytics in ai, process optimization ai, data analysis in ai, predictive analytics using ai, the generative ai, create image through ai, utilize ai, ai learning data, image through ai, ai analytical, ai for services, ai predicting, data platform for ai, machine learning and real estate",
};



const page = () => {
  const techStackData = [
    { src: "/TechStack/tensorflow.png", alt: "tensorflow" },
    { src: "/TechStack/pytorch.png", alt: "pytorch" },
    { src: "/TechStack/aws.png", alt: "aws" },
    { src: "/TechStack/azure.png", alt: "microsoft azure" },
    { src: "/TechStack/googlecloud.png", alt: "google cloud platform" },
    { src: "/TechStack/python.png", alt: "python" },
    { src: "/TechStack/nvdia.png", alt: "nvidia" },
    { src: "/TechStack/postgresql.png", alt: "sql" },
    { src: "/TechStack/apachespark.png", alt: "apache spark" },
    { src: "/TechStack/opencv.png", alt: "opencv" },
  ];
  

  const keyVerticalsData = [
    { name: 'Quality Control', icon: <Visibility />, color: '#4e73df', description: 'Ensure product consistency by automating visual inspection.' },
    { name: 'Accessibility Technology', icon: <Accessible />, color: '#1cc88a', description: 'Enhance independence by describing environments and reading text.' },
    { name: 'Damage Detection', icon: <ReportProblem />, color: '#f6c23e', description: 'Evaluate and quantify changes in static and mobile assets.' },
    { name: 'AI-Powered Security', icon: <Security />, color: '#36b9cc', description: 'Detect intrusions, suspicious activity, and anomalies in real-time.' },
    { name: 'Document Digitization', icon: <Description />, color: '#e74a3b', description: 'Build a single source of truth using multiple unstructured data sets.' },
    { name: 'Remote Patient Monitoring', icon: <MonitorHeart />, color: '#ff9f43', description: 'Analyze patient movements and behaviors for remote healthcare.' },
    { name: 'Real-Time Anomaly Detection', icon: <Warning />, color: '#f39c12', description: 'Using cameras and AI to detect leaks, corrosion, or other issues.' },
    { name: 'Emotion Recognition', icon: <Mood />, color: '#8e44ad', description: 'Analyzing people’s facial expressions and body language.' },
    { name: 'Autonomous Process Optimization', icon: <AutoGraph />, color: '#2ecc71', description: 'Improve efficiency by analyzing workflows and identifying bottlenecks in real-time.' },
    { name: 'Smart Inventory Management', icon: <Inventory />, color: '#27ae60', description: 'Use AI to monitor stock levels, predict demand, and reduce waste in supply chains.' },
];


const industryData = [
  { 
      industryName: 'Banking and Finance', 
      description: 'Streamline fraud detection and enhance customer verification with AI-powered visual analysis.', 
      link: '/banking', 
      icon: <BiSolidBank/> 
  },
  { 
      industryName: 'Automotive', 
      description: 'Revolutionize quality control and advanced driver-assistance systems through precise visual inspection.', 
      link: '/automotive', 
      icon: <FaCar/> 
  },
  { 
      industryName: 'Manufacturing', 
      description: 'Optimize production lines and reduce defects with automated visual inspection and real-time monitoring.', 
      link: '/manufacturing', 
      icon: <MdOutlinePrecisionManufacturing/> 
  },
  { 
      industryName: 'Consumer Goods', 
      description: 'Drive personalized shopping experiences and optimize shelf placement with AI-driven visual analytics.', 
      link: '/consumer-goods',  
      icon: <TiShoppingCart/> 
  },
  { 
      industryName: 'Real Estate', 
      description: 'Enhance property valuations and create immersive virtual tours with advanced image analysis.', 
      link: '/real-estate',  
      icon: <MdRealEstateAgent/> 
  },
  { 
      industryName: 'Pharma and Life Sciences', 
      description: 'Accelerate drug discovery and improve patient diagnostics with AI-powered medical image analysis.', 
      link: '/pharma-life-sciences', 
      icon: <MdLocalPharmacy/> 
  }
];


  return (
    <div>
      {/* <Hero
        videoSrc="/capabilities/genaiagents.mp4"
        heading="See the World Through Data"
        description="Your business thrives on efficiency, innovation, and the ability to extract actionable insights from the world around you. Computer Vision empowers your systems to 'see' and interpret images and videos, unlocking a wealth of data and automation possibilities. Amlgo Labs can help you harness the transformative power of Computer Vision to revolutionize your operations, enhance customer experiences, and achieve unprecedented levels of intelligence."
      /> */}
      <IndustryHero2
        title="See the World Through Data"
        description="Boost efficiency and innovation with Computer Vision. Amlgo Labs helps you leverage image and video analysis to automate processes, enhance customer experiences, and unlock actionable insights for smarter operations."
        buttonText="Let's Talk"
        buttonLink="/contact-us"
        backgroundImage="/capabilities/computervisionbanner.png" // Provide the correct image path
      />
      <IconHeadingGrid />
      <TechStack title="Tech Stack We are working on" techStack={techStackData} />
      <KeyVerticals
        title="Leverage the full potential of Computer Vision"
        keyVerticals={keyVerticalsData}
      />

      <IndustryFocusBlack title="Businesses We Support"
        industryData={industryData}
      />

      {/* <IndustryCaseStudy1 caseStudyHeading="Parts Inspection using Computer
Vision & AI by Comparing 3D
Images with Actual Part Image"
        CaseStudyImageSrc="/capabilities/computer-vision/blog.jpg" 
        link="/documents/mobile inspection ppt for computer vision case study.pdf"/> */}

<IndustryCaseStudy1
  caseStudyHeading="Parts Inspection using Computer Vision & AI by Comparing 3D Images with Actual Part Image"
  CaseStudyImageSrc="/capabilities/computer-vision/blog.jpg"
  link="/documents/mobile inspection ppt for computer vision case study.pdf"
  pdfName="mobile inspection ppt for computer vision case study"
/>
        <BlackCta heading = "Ready to see the future? Let’s build smarter, vision-driven success together and transform your business with cutting-edge computer vision solutions!"
         buttonText="Get in touch"/>
    </div>
  )
}

export default page