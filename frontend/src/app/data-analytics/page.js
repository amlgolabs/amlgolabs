import React from 'react'
import Hero from '../components/PagesComponents/CapabilitiesPages/Hero'
import ClientsList from '../components/PagesComponents/CapabilitiesPages/ClientsList'
import Challenges from '../components/PagesComponents/Challenges';
// import { Lightbulb, PersonSearch, Shield, Speed } from '@mui/icons-material';
import { AccessTime, SyncProblem, Warning, Tune } from "@mui/icons-material";
import Introduction1 from '../components/PagesComponents/Introduction/Introduction1';
import TechStack from '../components/PagesComponents/CapabilitiesPages/TechStack';
import CaseStudyList from '../components/PagesComponents/CapabilitiesPages/CaseStudyList';
import CtaDark from '../components/PagesComponents/CapabilitiesPages/CtaDark';

export const metadata = {
  title: "Data Analytics - Amlgo Labs",
  description: "Boost business growth with Amlgo Labs data analytics solutions. Leverage AI, machine learning, & big data insights for smarter, data-driven decisions.",
  keywords: "Amlgo Labs, data analytics, AI solutions, machine learning, big data, business intelligence, data-driven decisions, predictive analytics, cloud data services, data engineering, digital transformation, AI consulting, data science, enterprise AI, automated insights, data strategy",
};


const page = () => {

  const techStackData = [
    { src: "/techStack/tensorflow.png", alt: "tensorflow" },
    { src: "/techStack/sagemaker.png", alt: "aws sagemaker" },
    { src: "/techStack/huggingface.png", alt: "hugging face" },
    { src: "/techStack/kafka.png", alt: "apache kafka" },
    { src: "/techStack/powerbi.png", alt: "power bi" },
    { src: "/techStack/snowflake.png", alt: "snowflake" },
    { src: "/techStack/pytorch.png", alt: "pytorch" },
    { src: "/techStack/azureiothub.png", alt: "microsoft azure iot" },
    { src: "/techStack/databricks.png", alt: "databricks" },
    { src: "/techStack/googlebigquery.png", alt: "google bigquery" },
  ];
  
    const IntroductionData = {
        title: 'Amlgo Labs transoforming industries through Data Analytics',
        subtitle: 'Empowering Industries with AI-Driven Data Analytics and Intelligent Technology Solutions',
        content1: "Amlgo Labs is at the forefront of transforming industries by leveraging the transformative power of Data Analytics, advanced Technology, and cutting-edge AI. By converting complex data into actionable insights, Amlgo Labs empowers businesses to make informed decisions, optimize processes, and drive innovation. Their expertise lies in unlocking the hidden potential of data, enabling organizations to stay ahead in today’s competitive landscape.",
        content2:
          'Consider a groundbreaking case study in the manufacturing sector. Amlgo Labs collaborated with a global automotive leader to implement AI-driven predictive maintenance solutions. This initiative reduced operational downtime by 30% and saved millions annually, showcasing how Amlgo Labs turns data into strategic advantage. By integrating Data Analytics and AI, Amlgo Labs is not just solving problems—it’s redefining the future of industries, one intelligent solution at a time.',
      };

      const challengeData = [
        { icon: AccessTime, label: "Increased Downtime" }, // AccessTime represents time-related downtime.
        { icon: SyncProblem, label: "Reactive Decision-Making" }, // SyncProblem represents issues in decision-making.
        { icon: Warning, label: "Missed Opportunities" }, // Warning signifies risks or missed chances.
        { icon: Tune, label: "Inefficient Operations" } // Tune represents optimization and efficiency issues.
    ];

    const caseStudiesData = [
      {
          id: 1,
          title: "PowerBI Box & Whisker Plot",
          image: "/capabilities/data-analytics/casestudy1.jpg",
          description: "Power BI's Box & Whisker Plot visually summarizes data distribution, highlighting median, quartiles, and outliers. It’s ideal for comparing datasets, identifying trends, and making data-driven decisions with clarity and precision in analytics workflows.",
          link: "/case-study/1",
      },
      {
          id: 2,
          title: "Mastering Case Study Analysis: Tips for Drawing the Best Conclusion",
          image: "/capabilities/data-analytics/casestudy2.jpg",

          description: "Mastering case study analysis requires sharp focus on key insights. Analyze data, identify patterns, and align findings with objectives. A strong conclusion synthesizes evidence, offers actionable solutions, and highlights impact, ensuring clarity and value for stakeholders.",
          link: "/case-study/2",
      },
      {
          id: 3,
          title: "Creating Beautiful Maps with Alteryx and Tableau",
          image: "/capabilities/data-analytics/casestudy3.jpg",

          description: "Transform raw data into stunning visual stories with Alteryx and Tableau. Seamlessly integrate, analyze, and design interactive maps that reveal insights and drive decisions. Elevate your data storytelling with precision and creativity.",
          link: "/case-study/3",
      },
      {
          id: 4,
          title: "AI and Analytics Are Helping to Cure At-Risk Individuals",
          image: "/capabilities/data-analytics/casestudy4.jpg",

          description: "AI and analytics are revolutionizing healthcare by identifying and curing at-risk individuals. Through predictive models and data-driven insights, these technologies enable early intervention, personalized treatments, and improved outcomes, transforming lives with precision and efficiency.",
          link: "/case-study/4",
      },
  ];

  return (
    <div>
         <Hero
        videoSrc="/capabilities/dataanalytics.mp4"
        heading="Illuminating the Path to Intelligent Decisions"
        description="Your business thrives on data-driven insights, predictive capabilities, and the ability to anticipate market trends. Data Analytics empowers you to extract meaning from raw data, identify patterns, and make informed decisions that drive growth and innovation. Amlgo Labs can help you harness the transformative power of Data Analytics to revolutionize your operations, personalize customer experiences, and achieve unprecedented business outcomes."
      />
      <ClientsList/>
  <Introduction1 {...IntroductionData} />

      <Challenges 
            title="Unlock your data’s potential with Amlgo Labs for actionable insights, drive efficiency, and transform your business with precision and innovation!"
            subtitle="Challenges"
            challenges={challengeData}
        />

      <TechStack title="Tools and Technologies we are using" techStack={techStackData} />
      <CaseStudyList caseStudies={caseStudiesData} />

      {/* <CtaDark/> */}
      <CtaDark 
  title="Struggling with your data? Elevate your business with our analytics expert, transforming insights into actions today!" 
  buttonText="Talk to Us" 
  link="/" 
/>

    </div>
  )
}

export default page