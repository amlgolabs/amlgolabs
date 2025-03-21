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
  keywords: "Computer Vision, AI-powered solutions, Amlgo Labs, visual automation, pattern detection, intelligent insights, machine learning, image recognition, object detection, deep learning, computer vision applications, AI in business, automated visual analysis, real-time processing",
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
        buttonLink="/contact"
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

      <IndustryCaseStudy1 caseStudyHeading="Innovation to Automation: How Computer Vision Drives Modern Manufacturing?"
        CaseStudyImageSrc="/placeholder/2048x2048.png" />

        <BlackCta heading = "Ready to see the future? Let’s build smarter, vision-driven success together and transform your business with cutting-edge computer vision solutions!"
         buttonText="Get in touch"/>
    </div>
  )
}

export default page