"use client"
import { useState } from 'react';
import styles from '../styles/Components/Services.module.css';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
  import ShowChartIcon from '@mui/icons-material/ShowChart';
  import ChatIcon from '@mui/icons-material/Chat';
  import WarningAmberIcon from '@mui/icons-material/WarningAmber';
  import BuildIcon from '@mui/icons-material/Build';
  import AccountTreeIcon from '@mui/icons-material/AccountTree';
  import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
  import StorageIcon from '@mui/icons-material/Storage';
  import PollIcon from '@mui/icons-material/Poll';
  import TrendingUpIcon from '@mui/icons-material/TrendingUp';
  import SecurityIcon from '@mui/icons-material/Security';
  import UpdateIcon from '@mui/icons-material/Update';
  import DataUsageIcon from '@mui/icons-material/DataUsage';
  import CloudIcon from '@mui/icons-material/Cloud';
  import QueryStatsIcon from '@mui/icons-material/QueryStats';
  import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';

const Services = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  
  
  const services = [
    {
      title: 'Data Science & AI',
      description: 'Amlgo Labs specializes in data science and AI services to help businesses grow and streamline operations. Our expert team delivers custom solutions in deep learning, machine learning, time series forecasting, and natural language processing. We empower businesses with advanced analytics to uncover insights, optimize strategies, and drive growth.',
      subServices: [
        {
          title: 'Deep Learning',
          description: 'Amlgo Labs harnesses the power of deep learning to transform complex data into actionable insights, empowering businesses with tailored AI models for smarter, data-driven decisions.',
          icon: <AutoGraphIcon />
        },
        {
          title: 'Machine Learning',
          description: 'Amlgo Labs provides custom AI and machine learning solutions to help businesses uncover patterns, enhance decision-making, and predict future outcomes for a competitive edge.',
          icon: <SettingsSuggestIcon />
        },
        {
          title: 'Time Series Forecasting',
          description: 'Amlgo Labs offers time series forecasting services to help businesses identify trends and make informed decisions with predictive models for a competitive edge.',
          icon: <ShowChartIcon />
        },
        {
          title: 'Natural Language Processing',
          description: 'Amlgo Labs specializes in natural language processing, developing custom models to analyze topics, sentiment, and key metrics for optimized decision-making.',
          icon: <ChatIcon />
        },
      ],
    },
    {
        title: 'Generative AI',
      description: 'At Amlgo Labs, we leverage advanced generative AI technologies like GPT-4, Llama 3, Gemini, and Mistral to transform business workflows and enhance decision-making. Our AI experts provide tailored solutions to maximize data potential, ensuring operational efficiency, resilience, and superior insights. Partner with us to optimize your business outcomes with cutting-edge AI applications.',
      subServices: [
        {
          title: 'Information Retrieval and Semantic Search',
          description: 'Amlgo Labs delivers advanced information retrieval and semantic search solutions, leveraging AI to enhance data search capabilities for precise, relevant results.',
          icon: <ScreenSearchDesktopIcon />
          
        },
        {
          title: 'Recommendation and Sentiment Analysis',
          description: 'We provide robust recommendation and sentiment analysis services to personalize customer experiences, improve satisfaction, and build stronger relationships.',
          icon: <PollIcon />
        },
        {
          title: 'Text Analysis and Summarization',
          description: 'Our text analysis and summarization services transform unstructured data into actionable insights, enabling businesses to extract essential information from large volumes.',
          icon: <UpdateIcon />
        },
        {
          title: 'Content Creation',
          description: 'Amlgo Labs specializes in AI-powered content creation, helping businesses generate high-quality, engaging content to enhance brand messaging and boost engagement.',
          icon: <BuildIcon />
        },
        {
          title: 'Fraud Detection',
          description: 'Our advanced fraud detection services use real-time data analysis to identify and prevent fraudulent activities, safeguarding organizations from risks.',
          icon: <WarningAmberIcon />
        },
        {
          title: 'Customer Services Automation',
          description: 'We offer comprehensive customer service automation solutions with AI-driven chatbots and virtual assistants to improve response times and enhance customer satisfaction.',
          icon: <CloudIcon />
        },
      ],
    },
    {
      title: 'Cloud Engineering',
      description: 'At Amlgo Labs, we help clients design, build, and maintain cloud-based systems and applications to meet their specific business needs. Our team of experienced cloud engineers can provide guidance on selecting the right cloud platform, migrating existing systems to the cloud, and optimizing cloud infrastructure for performance and cost efficiency.',
      subServices: [
        {
          title: 'Architecture Consulting',
          description: 'Amlgo Labs’ Architecture Consulting service offers expert advice on designing scalable, reliable, and secure systems, helping clients choose the right technologies and design patterns.',
          icon: <AccountTreeIcon />
        },
        {
          title: 'Cost Engineering',
          description: 'Amlgo Labs’ Cost Engineering service optimizes cloud costs by identifying savings opportunities and providing recommendations for cost-effective cloud infrastructure design.',
          icon: <AttachMoneyIcon />
        },
        {
          title: 'Cloud Ops',
          description: 'Amlgo Labs’ Cloud Ops service manages and maintains cloud-based systems, handling everything from infrastructure provisioning to monitoring, alerting, and incident response.',
          icon: <StorageIcon />
        },
        {
          title: 'Data Lakes & Warehouses',
          description: 'Amlgo Labs’ Data Lakes & Warehouses service designs, builds, and maintains secure, performant data storage systems, assisting with data pipelines and integration with business applications.',
          icon: <DataUsageIcon />
        },
      ],
    },
    {
      title: 'Data Analytics',
      description: 'At Amlgo Labs, we provide comprehensive data analytics services to our clients. Our team of data scientists, engineers, and analysts have the expertise and experience to develop complete data–driven solutions for our clients. Our services include data visualization, Power BI and Tableau, as well as data ingestion pipelines.',
      subServices: [
        {
          title: 'Data Visualization',
          description: 'We utilize data visualization with interactive dashboards and reports using tools like Tableau and Power BI to help clients gain insights and make decisions.',
          icon: <QueryStatsIcon />
        },
        {
          title: 'Power BI & Tableau',
          description: 'We develop customized Power BI and Tableau dashboards and reports to provide clients with the insights they need, tailored to their specific requirements.',
          icon: <PollIcon />
        },
        {
          title: 'Data Ingestion Pipelines',
          description: 'We build custom data ingestion pipelines to efficiently and cost-effectively transform data from multiple sources, delivering the insights clients need.',
          icon: <CloudIcon />
        },
      ],
    },
    {
      title: 'Risk & Regulatory',
      description: 'Amlgo Labs offers Risk & Regulatory Services to help organizations identify, assess, and manage risks while ensuring compliance with laws and regulations. Our experienced team provides tailored solutions to protect against potential losses and meet industry-specific needs.',
      subServices: [
        {
          title: 'External Reporting',
          description: 'Amlgo Labs offers external reporting services, including the preparation and filing of financial statements, disclosure documents, and regulatory filings.',
          icon: <SecurityIcon />
        },
        {
          title: 'Internal Reporting',
          description: 'Amlgo Labs provides tailored internal reporting services, including customized reports, dashboards, and analytics for internal use.',
          icon: <SecurityIcon />
        },
        {
          title: 'IFRS9 Reporting',
          description: 'Amlgo Labs specializes in IFRS9 reporting services, preparing necessary documents and reports to ensure compliance with applicable standards.',
          icon: <UpdateIcon />
        },
        {
          title: 'CECL Reports',
          description: 'Amlgo Labs offers comprehensive CECL reporting services, preparing required documents and reports to ensure compliance with applicable standards, tailored to each client.',
          icon: <TrendingUpIcon />
        },
      ],
    },
    {
      title: 'Data Pipelining',
      description: 'Amlgo Labs offers Data Pipelining Services to help organizations build and maintain scalable systems for collecting, storing, and processing data. Our expert data engineers design efficient pipelines, set up data lakes and warehouses, and integrate data with business applications to support data-driven decision-making.',
      subServices: [
        {
          title: 'Cloud-native Data Pipelining',
          description: 'Amlgo Labs specializes in deploying cloud-native data-pipelining solutions optimized for scalability and security, enabling businesses to manage data pipelines efficiently at scale.',
          icon: <CloudIcon />
        },
        {
          title: 'Automated and Scalable Data Pipelining',
          description: 'Our automated and scalable data-pipelining services help businesses quickly transfer data from various sources into the cloud to gain insights faster.',
          icon: <CloudIcon />
        },
        {
          title: 'Hybrid Architectures',
          description: 'Amlgo Labs designs and deploys hybrid architectures that securely transfer data between cloud and on-premise environments, leveraging the benefits of both.',
          icon: <DataUsageIcon />
        },
        {
          title: 'Real-Time Use',
          description: 'Our real-time data-pipelining services enable businesses to quickly transfer data to the cloud and gain insights faster, supporting better, data-driven decisions.',
          icon: <QueryStatsIcon />
        },
      ],
    },
    {
      title: 'Cloud & Data Ops',
      description: 'Amlgo Labs provides cloud and data operations services to optimize data performance and unlock the full value of data assets. Our solutions cover resource provisioning, data quality, and pipeline execution, helping businesses enhance efficiency, resilience, and decision-making for improved outcomes.',
      subServices: [
        {
          title: 'Resource Provisioning',
          description: 'Amlgo Labs ensures successful cloud infrastructure and data operations deployment, offering reliable, secure, and cost-efficient solutions from planning to monitoring.',
          icon: <CloudIcon />
        },
        {
          title: 'Operationalization',
          description: 'Amlgo Labs helps organizations operationalize cloud and data operations through comprehensive planning, process optimization, automation, and system integration.',
          icon: <CloudIcon />
        },
        {
          title: 'Data Quality Solutions',
          description: 'Amlgo Labs offers data quality solutions to improve accuracy, completeness, visibility, and provide processes for data cleaning and normalization.',
          icon: <SecurityIcon />
        },
        {
          title: 'Data Pipeline Execution',
          description: 'Amlgo Labs provides data pipeline execution solutions, including data integration, ETL, and analytics, to ensure timely and accurate data delivery.',
          icon: <DataUsageIcon />
        },
      ],
    },
  ];
  

  const handleServiceClick = (index) => {
    setActiveServiceIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <h1 className={styles.heading}>Our <br/>Services</h1>
        <ul className={styles.servicesList}>
          {services.map((service, index) => (
            <li
              key={index}
              className={`${styles.serviceItem} ${index === activeServiceIndex ? styles.active : ''}`}
              onClick={() => handleServiceClick(index)}
            >
              {service.title}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.rightPanel}>
        <h2 className={styles.subheading}>{services[activeServiceIndex].title}</h2>
        <p className={styles.description}>{services[activeServiceIndex].description}</p>
        <div className={styles.cardGrid}>
          {services[activeServiceIndex].subServices.map((subService, subIndex) => (
            <div className={styles.card} key={subIndex}>
              <h3 className={styles.cardTitle}>{subService.icon}{subService.title}</h3>
              <p className={styles.cardDescription}>{subService.description}</p>
              <span className={styles.arrow}>&rarr;</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
