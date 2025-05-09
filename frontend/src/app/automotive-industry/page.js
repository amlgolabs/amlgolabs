import React from 'react'
import IndustryHero2 from '../components/PagesComponents/Hero/IndustryHero2';
import KeyVerticals from '../components/PagesComponents/KeyVerticals';
import IndustryTechnology from '../components/PagesComponents/IndustryTechnology';
import Challenges2 from '../components/PagesComponents/Challenges2';
import KeyStats from '../components/PagesComponents/KeyStats';

import NumberStats from '../components/PagesComponents/NumberStats';
import AutomotiveOfferings from '../components/PagesComponents/AutomotiveOfferings';
import IndustryCaseStudy2 from '../components/PagesComponents/CaseStudy/IndustryCaseStudy2';
import { FaCar, FaPlug, FaRobot, FaCogs, FaTools, FaRegLightbulb, FaTruck, FaTrophy, FaLeaf } from 'react-icons/fa';

export const metadata = {
    title: "Driving Automotive Innovation - Amlgo Labs",
    description: "Amlgo Labs delivers intelligent, connected automotive solutions, enhancing efficiency, safety, and performance with AI-driven innovation.",
    keywords: "Automotive innovation, AI in automotive, Amlgo Labs, smart vehicles, connected cars, vehicle safety, performance optimization, autonomous driving, predictive maintenance, automotive analytics, intelligent transportation, mobility solutions, machine learning in automotive, future of driving",
  };
  

const page = () => {

    const keyVerticalsData = [
        { name: 'Vehicle Manufacturing', icon: <FaCar />, color: '#4e73df', description: 'Innovating the future of vehicle production.' },
        { name: 'Automotive Components and Parts', icon: <FaCogs />, color: '#1cc88a', description: 'Precision-engineered components for every vehicle.' },
        { name: 'Electric Vehicles (EVs)', icon: <FaPlug />, color: '#f6c23e', description: 'Driving the transition to sustainable mobility.' },
        { name: 'Connected and Autonomous Vehicles', icon: <FaRobot />, color: '#36b9cc', description: 'The future of intelligent, self-driving cars.' },
        { name: 'Automotive Aftermarket Services', icon: <FaTools />, color: '#e74a3b', description: 'Enhancing vehicle performance and longevity.' },
        { name: 'Mobility Solutions', icon: <FaRegLightbulb />, color: '#ff9f43', description: 'Smart solutions for the evolving mobility landscape.' },
        { name: 'Automotive Software and Technology', icon: <FaCar />, color: '#f39c12', description: 'Empowering vehicles with cutting-edge software.' },
        { name: 'Commercial Vehicles', icon: <FaTruck />, color: '#8e44ad', description: 'Efficient and reliable vehicles for the commercial sector.' },
        { name: 'Luxury and High-Performance Vehicles', icon: <FaTrophy />, color: '#2ecc71', description: 'Exquisite craftsmanship meets cutting-edge technology.' },
        { name: 'Sustainable Automotive Solutions', icon: <FaLeaf />, color: '#27ae60', description: 'Driving sustainability through innovative solutions.' },
    ];

    const technologies = [
        { name: 'Microsoft Azure', image: '/azure.png' },
        { name: 'Amazon Web Services', image: '/aws.png' },
        { name: 'Google Cloud', image: '/googlecloud.png' },
        { name: 'Dell Technologies', image: '/dell.png' },
 

    ];



    const technologyHeading = "Driving Innovation in the Automotive Industry with Strategic Partnerships"

    const caseStudiesData = [
        {
            id: 1,
            title: "How AI is Changing the Automotive Industry?",
            image: "/businesses/automotive/casestudy1.jpg",

            description: "AI reshapes cars: designs shift, safety soars, drives learn, build smart. Connected cars rise, output climbs, trips smooth. AI's future drives on.",
            link:"/documents/automotiveusecases.pdf"
        },
        {
            id: 2,
            title: "Leveraging AI & ML in Automotive Industry",
            image: "/businesses/automotive/casestudy2.jpg",
            description: "Social media sentiment tracks car buyer joy. Real-time system finds users, spots issues. Big auto firm gets fast feedback, solves problems now.",
            link:"/documents/LeveragingAI&MLinAutomotiveIndustry.pdf"
        },
    ];

    return (
  
        <>
            <IndustryHero2
                title="GenAI & Data-Driven Automotive Innovation"
                description="From Design to Delivery, we leverage GenAI and Data Analytics to create vehicles tailored for the rapidly growing industry."
                buttonText="Let's Talk"
                buttonLink="/contact-us"
                backgroundImage="/AutomotiveBanner.png" // Provide the correct image path
            />
            <KeyVerticals
                title="Amlgo Labs focused Verticals in the Automotive Industry"
                keyVerticals={keyVerticalsData}
            />
            <AutomotiveOfferings />

            <IndustryTechnology heading={technologyHeading} technologies={technologies} />
            <NumberStats />
            <Challenges2 />
            <IndustryCaseStudy2
                heading="Case Studies"
                caseStudies={caseStudiesData}
            />

            <KeyStats />
           
        </>
    )
}

export default page