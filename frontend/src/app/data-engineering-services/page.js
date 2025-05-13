import React from 'react'
import HeroImage from '../components/PagesComponents/CapabilitiesPages/HeroImage'
import NumberData2 from '../components/PagesComponents/NumberData2';
import Benefits from '../components/PagesComponents/CapabilitiesPages/Benefits';
import InformationStripLine from '../components/PagesComponents/CapabilitiesPages/InformationStripLine';
import SolutionsSteps from '../components/PagesComponents/SolutionsSteps';
import CaseStudyDark from '../components/PagesComponents/CapabilitiesPages/CaseStudyDark';
import BlackCta from '../components/BlackCta';
import IndustryHero2 from '../components/PagesComponents/Hero/IndustryHero2';

export const metadata = {
  title: "Data Engineering Services - Amlgo Labs",
  description: "Boost your business with scalable Data Engineering solutions by Amlgo Labs. Optimize big data, ETL, pipelines & cloud for real-time insights.",
  keywords: "Data Engineering, Amlgo Labs, big data solutions, ETL pipelines, cloud data integration, real-time insights, data pipelines, data optimization, scalable architecture, data processing, cloud data engineering, data infrastructure, business intelligence",
};


const page = () => {
    const impactData = [
        { percentage: "78%", description: "Seamless data access for timely, informed decisions" },
        { percentage: "65%", description: "Delivering accurate, consistent data through reliable pipelines" },
        { percentage: "52%", description: "Integrate data into a cohesive, actionable view" },
        { percentage: "41%", description: "Building scalable data infrastructure for growing complexity" },
      ];

      const benefitsList = [
        "Enable data-driven decisions with accessible, high-quality data.",
        "Optimize data workflows for operational efficiency.",
        "Unify diverse data for holistic business insights.",
        "Create scalable, robust data infrastructure for growth.",
        "Future-proof your data with advanced engineering.",
        "Gain a competitive edge by leveraging data effectively."
      ];

      const stepsData = [
        {
            id: 1,
            heading: 'Data Lakehouse Implementation',
            content:
                ' Design and build modern data lakehouses that merge the scalability of data lakes with the governance and ACID properties of data warehouses.',
        },
        {
            id: 2,
            heading: 'Data Pipeline Development',
            content:
                'Build scalable ETL/ELT pipelines for efficient data ingestion, transformation, and loading from multiple sources.',
        },
        {
            id: 3,
            heading: 'Data Integration & Transformation',
            content:
                'Integrate and transform data from diverse systems into actionable formats for analysis and reporting.',
        },
        {
            id: 4,
            heading: 'Cloud Data Engineering',
            content:
                'Utilize cloud platforms (AWS, Azure, GCP) to build and manage scalable, cost-effective data infrastructure.',
        },
        {
            id: 5,
            heading: 'Real-time Data Streaming',
            content:
                'Implement real-time data streaming for instant insights and faster decision-making.',
        },
        {
          id: 6,
          heading: 'Custom Data Engineering Solutions',
          content:
              'Develop custom data engineering solutions using expertise in data architecture, pipelines, and cloud technologies to address business challenges.',
      },
    ];
    
  return (
    <div>
        <IndustryHero2
                title="Architecting the Foundation for Data-Driven Success"
          description="Your business thrives on data. Amlgo Labs builds robust data pipelines, transforming accessibility, quality, and speed into actionable insights, unlocking your data's full potential."
                buttonText="Let's Talk"
                buttonLink="/contact-us"
                backgroundImage="/capabilities/dataengineeringbanner4.png" // Provide the correct image path
            />
        <NumberData2 
      title="Amlgo Labs Helps You Transform Your Data Into Actionable Insights with Seamless Access Resulting in Improvements in the Following" 
      data={impactData} 
    />
<Benefits title="Key Advantages" benefitsData={benefitsList} />      
<InformationStripLine
  title="How can data engineering transform business efficiency?"
  subtitle=" Global retailers improved data accessibility by 78% and decision-making speed by 40% with scalable data pipelines."
  buttonText="Explore Now"
  buttonLink="/consumer-goods-retail"
/>

<SolutionsSteps
            title="Empowering Businesses with Data Engineering Solutions"
            subtitle="We empower businesses to build world-class data platforms with tailored data engineering solutions designed to address specific needs and drive measurable results."
            steps={stepsData}
        />

        <CaseStudyDark/>
        <BlackCta heading = "Ready to turn your data into a superpower? Let&apos;s start your data transformation journey today, by building smarter systems for faster, better decisions."
         buttonText="Get in touch"/>
    </div>
  )
}

export default page