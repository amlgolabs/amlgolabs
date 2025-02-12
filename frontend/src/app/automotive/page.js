import React from 'react'
import IndustryHero2 from '../components/PagesComponents/Hero/IndustryHero2';
import KeyVerticals from '../components/PagesComponents/KeyVerticals';
import IndustryTechnology from '../components/PagesComponents/IndustryTechnology';
import Challenges2 from '../components/PagesComponents/Challenges2';
import KeyStats from '../components/PagesComponents/KeyStats';
import IndustryCaseStudy from '../components/PagesComponents/CaseStudy/IndustryCaseStudy1';
import NumberStats from '../components/PagesComponents/NumberStats';
import AutomotiveOfferings from '../components/PagesComponents/AutomotiveOfferings';
import IndustryCaseStudy2 from '../components/PagesComponents/CaseStudy/IndustryCaseStudy2';
import { FaCar, FaPlug, FaRobot, FaCogs, FaTools, FaRegLightbulb, FaTruck, FaTrophy, FaLeaf } from 'react-icons/fa';

export const metadata = {
    title: "Automotive - Amlgo Labs",
    description: "Learn more about Amlgo Labs, our mission, vision, and team.",
    keywords: "Amlgo Labs, about us, mission, vision, team, data analytics, AI, ML",
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
        { name: 'Microsoft Azure', image: '/partner1.png' },
        { name: 'Amazon Web Services', image: '/partner3.png' },
        { name: 'Google Cloud', image: '/partner5.png' },
        { name: 'Dell Technologies', image: '/partner6.png' },
        // { name: 'Natural Language Processing', image: '/partner5.png' },
        // { name: 'Knowledge Graph', image: '/partner6.png' },

    ];



    const technologyHeading = "Driving Innovation in the Automotive Industry with Strategic Partnerships"

    const caseStudiesData = [
        {
            id: 1,
            title: "GenAI based CRM call insights and response management",
            image: "/CaseStudyHome1.jpeg",
            description: "Explore the differences between Generative AI, which creates new content, and Predictive AI, which forecasts future outcomes.",
        },
        {
            id: 2,
            title: "Document generation with RAG implementation",
            image: "/CaseStudyHome2.jpeg",
            description: "Empowering banks with seamless MAS610 reporting and compliance through robust solutions.",
        },
    ];

    return (
        // <IndustryHero
        //     imageSrc="/AutomotiveBanner.png"
        //     altText="Automotive Industry"
        //     heading="AI and Data Driven Automotive Excellence"
        //   />
        <>
            <IndustryHero2
                title="Gen-AI & Data-Driven Automotive Innovation"
                description="From Design to Delivery, we leverage Gen-AI and Data Analytics to create vehicles tailored for the rapidly growing industry."
                buttonText="Let's Talk"
                buttonLink="/contact"
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
            {/* <IndustryCaseStudy caseStudyHeading="Financial Regulatory Reporting"
                CaseStudyImageSrc="/CaseStudyHome3.jpeg" /> */}
        </>
    )
}

export default page