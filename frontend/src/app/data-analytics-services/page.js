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
  title: "AI-Powered Data Analytics Solutions | Amlgo Labs",
  description: "Boost business growth with Amlgo Labs data analytics solutions. Leverage AI, machine learning, & big data insights for smarter, data-driven decisions.",
  keywords: "ai data analytics, ai for data analytics, data analysis ai, ai and data analytics, business data analytics, ai driven data analytics, data analytics for business, ai for data analysis, data analytics and ai, data analytics power bi, about data analytics, business and data analytics, data analytics with power bi, data analytics with ai, ai data insights, ai for data, power bi for data analytics, advanced data analytics, data analysis solutions, power bi for data analysis, as data analytics, data analysis and ai, business with data analytics, data analytics & ai, ai for predictive maintenance, ai and data analysis, business analytics and data analytics, ai data analytics tools, data informed decision making, data analytics using power bi, business in data analytics, power bi ai, data analysis power bi, power bi and data analytics, data analytics and power bi, data analytics using tableau, data analysis with power bi, data analytics and business, business data analytics courses, machine learning for data analysis, ai based data analytics, data analytics in ai, latest technology in data analytics, data analytics in power bi, data and data analytics, data analytics in energy sector, analytics with ai, business & data analytics, ai & data analytics, cloud for data analytics, best data analytics, make data analysis, data analytics path, power bi and ai, transform data into actionable insights, data analysis in ai, prerequisites for data analytics, data analytics business analytics, tools data analytics, ai predictive, predictive analytics using ai, ai & data, data analytics in decision making, microsoft azure for data analytics, power bi and predictive analytics, data analysis operations, data analytix, data of business, business of data, advanced analytics ai, devops for data analytics, data analysis advanced, data analysis in it, new data analytics technology, business case data analytics."
};



const page = () => {

  const techStackData = [
    { src: "/TechStack/tensorflow.png", alt: "tensorflow" },
    { src: "/TechStack/sagemaker.png", alt: "aws sagemaker" },
    { src: "/TechStack/huggingface.png", alt: "hugging face" },
    { src: "/TechStack/kafka.png", alt: "apache kafka" },
    { src: "/TechStack/powerbi.png", alt: "power bi" },
    { src: "/TechStack/snowflake.png", alt: "snowflake" },
    { src: "/TechStack/pytorch.png", alt: "pytorch" },
    { src: "/TechStack/azureiothub.png", alt: "microsoft azure iot" },
    { src: "/TechStack/databricks.png", alt: "databricks" },
    { src: "/TechStack/googlebigquery.png", alt: "google bigquery" },
  ];
  
    const IntroductionData = {
        title: 'Amlgo Labs transforming industries through Data Analytics',
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
          link: "/documents/powerbi_box_whisker_plot.pdf",
      },
      {
          id: 2,
          title: "Mastering Case Study Analysis: Tips for Drawing the Best Conclusion",
          image: "/capabilities/data-analytics/casestudy2.jpg",

          description: "Mastering case study analysis requires sharp focus on key insights. Analyze data, identify patterns, and align findings with objectives. A strong conclusion synthesizes evidence, offers actionable solutions, and highlights impact, ensuring clarity and value for stakeholders.",
          link: "/documents/mastering_case_study_analysis_tips_for_drawing_the_best_conclusion.pdf",
      },
      {
          id: 3,
          title: "Creating Beautiful Maps with Alteryx and Tableau",
          image: "/capabilities/data-analytics/casestudy3.jpg",

          description: "Transform raw data into stunning visual stories with Alteryx and Tableau. Seamlessly integrate, analyze, and design interactive maps that reveal insights and drive decisions. Elevate your data storytelling with precision and creativity.",
          link: "/documents/creating_beautiful_maps_with_alteryx_and_tableau.pdf",
      },
      {
          id: 4,
          title: "5 Top Open-Source BI Tools to Empower Your Analytics Journey",
          image: "/capabilities/data-analytics/casestudy4.png",

          description: "In today's data-driven world, businesses are constantly seeking innovative ways to harness the power of their data for strategic decision-making. Business Intelligence (BI) tools play a pivotal role in this endeavor, providing organizations with the means to visualize, analyze, and derive insights from their vast troves of data.",
          link: "/documents/5 top open source bi tools to empower your analytics journey.pdf",
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
      
      {/* <CaseStudyList caseStudies={caseStudiesData} /> */}
      <section id="case-studies">
  <CaseStudyList caseStudies={caseStudiesData} />
</section>

      {/* <CtaDark/> */}
      <CtaDark 
  title="Struggling with your data? Elevate your business with our analytics expert, transforming insights into actions today!" 
  buttonText="Talk to Us" 
  link="/contact-us" 
/>

    </div>
  )
}

export default page