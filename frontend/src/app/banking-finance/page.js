import React from 'react'
import IndustryHero1 from '../components/PagesComponents/Hero/IndustryHero1'
import NumbersData from '../components/PagesComponents/NumbersData';
import Challenges from '../components/PagesComponents/Challenges';
import SolutionsSteps from '../components/PagesComponents/SolutionsSteps';
import OfferingsCard from '../components/PagesComponents/OfferingsCard';
import IndustryTechnology from '../components/PagesComponents/IndustryTechnology';
import IndustryCaseStudy from '../components/PagesComponents/CaseStudy/IndustryCaseStudy1';
import { FaRegBuilding, FaRegCreditCard, FaRegMoneyBillAlt, FaChartLine } from 'react-icons/fa';

export const metadata = {
    title: "Banking & Finance - Amlgo Labs",
    description: "Learn more about Amlgo Labs, our mission, vision, and team.",
    keywords: "Amlgo Labs, about us, mission, vision, team, data analytics, AI, ML",
};

const page = () => {
    const financialData = [
        { icon: FaRegBuilding, label: "Retail Banking" },
        { icon: FaRegCreditCard, label: "Commercial Banking" },
        { icon: FaRegMoneyBillAlt, label: "Payments" },
        { icon: FaChartLine, label: "Capital Markets" },
      ];

    // Define the technology data
    const technologies = [
        { name: 'Gen-AI', image: '/genai.png' },
        { name: 'Robotic Process Automation', image: '/RoboticProcess.png' },
        { name: 'Machine Learning', image: '/MachineLearning.png' },
        { name: 'Forecasting and Process Mapping', image: '/RoboticProcess.png' },
        { name: 'Natural Language Processing', image: '/NLP.png' },
        { name: 'Knowledge Graph', image: '/KnowledgeGraph.png' },
        { name: 'Agile Operations', image: '/AgileOperations.png' },
        { name: 'Behavioral Science', image: '/BehavioralScience.png' },
    ];

    // Define the heading
    const technologyHeading = "Advanced Operations Analytics Powered by Amlgo Labs";

    const stepsData = [
        {
            id: 1,
            heading: 'Technological transformation',
            content:
                'Harness the power of advanced code generation, seamless translation, and intelligent optimization to drive operational efficiency, scalability, and business growth. Embrace cutting-edge technologies that streamline processes and enhance performance for your organization.',
        },
        {
            id: 2,
            heading: 'Trusted, Immersive Experience',
            content:
                'We craft humanized interactions that feel personal and relevant. Smart search and dynamic content ensure seamless access to accurate information. Experience efficiency and engagement like never before.',
        },
        {
            id: 3,
            heading: 'Streamlining Costs and Efficiency',
            content:
                'GenAI transforms processes like underwriting for seamless efficiency. Real-time call and chat summarization delivers actionable customer insights. Advanced document extraction and querying simplify operations with precision.',
        },
        {
            id: 4,
            heading: 'Fraud, risk and compliance',
            content:
                'We leverage synthetic data generation to address sparse and low-incidence scenarios effectively. An on-demand search platform provides seamless access to evolving banking regulations, ensuring compliance and agility. Together, these solutions empower smarter decision-making and operational efficiency.',
        },
        {
            id: 5,
            heading: 'Employee Productivity',
            content:
                'Our knowledge management engine streamlines organizational policy and compliance, ensuring easy access and understanding. With advanced summarization tools, semantic Q&A, and credit analysis, we enhance decision-making efficiency. Additionally, self-serve AI decisioning engines translate English into SQL, simplifying complex data queries.',
        },
    ];

    return (
        <>
            <IndustryHero1
                imageSrc="/BankingHero3.png"
                altText="Banking Hero"
                heading="AI and Data Powerhouse in Banking and Finance"
            />

<NumbersData 
      heading="We integrate AI, engineering, and design to empower global financial enterprises with seamless, intuitive experiences. By leveraging cutting-edge innovation and Generative AI (GenAI), we provide scalable, transformative solutions that drive growth and efficiency."
      data={financialData}
    />

            <Challenges />

            <SolutionsSteps
            title="Unlocking Business Potential Through GenAI Solutions"
            subtitle="GenAI transforms banking by driving operational excellence and fueling growth."
            steps={stepsData}
        />

            <OfferingsCard />

            {/* Pass heading and technologies data to IndustryTechnology component */}
            <IndustryTechnology heading={technologyHeading} technologies={technologies} />

            <IndustryCaseStudy caseStudyHeading="Financial Regulatory Reporting" 
                                CaseStudyImageSrc="/CaseStudyHome1.jpeg"/>


        </>
    )
}

export default page
