import React from 'react'
import ExecutiveSummary from '../components/PagesComponents/Solutions/text-sql/ExecutiveSummary'
import Introduction from '../components/PagesComponents/Solutions/text-sql/Introduction'
import Problem from '../components/PagesComponents/Solutions/text-sql/Problem'
import SolutionsBoxes from '../components/PagesComponents/CapabilitiesPages/SolutionsBoxes'
import BusinessProblem from '../components/PagesComponents/Solutions/text-sql/BusinessProblem'
import Conclusion from '../components/PagesComponents/Solutions/vehicle-quality/Conclusion'
import DemoVideo from '../components/PagesComponents/Solutions/ai-chatbot/DemoVideo'


export const metadata = {
  title: "Text to SQL Convertor - AI-powered Query Generator - Amlgo Labs",
  description: "Convert natural language into SQL queries with AI-powered Text-to-SQL by Amlgo Labs. Simplify database queries, boost efficiency, and speed up data analysis.",
  keywords: "ai for sql, data analysts, sql for data analysis, ai for data analysis, sql for data analytics, data analysis ai, ai data analysis, ai for data analytics, ai for data, data analysis generator, ai and data analytics, ai data insights, sql for data analysts, ai for database, data analysis using sql, real estate data management, ai and data analysis, data analysis and ai, ai for data analysts, query from sql, ai powered data analytics, sql for analysts, ai & data, data analysis in ai, industry data analysis, ai & data analytics, text to sql, ai-powered query generator, natural language to sql, automated sql generation"
};



const page = () => {

  const solutionsData = [
    { 
        heading: "Natural Language Interface", 
        text: "Users could type questions like, 'Show me all properties in downtown with three bedrooms and a pool?' instead of writing complex SQL queries." 
    },
    { 
        heading: "Democratized Data Access", 
        text: "Non-technical teams, such as marketing or production, accessed insights independently without relying on analysts." 
    },
    { 
        heading: "Real-Time Responses", 
        text: "Queries were answered within seconds, accelerating decisions." 
    },
    { 
        heading: "Seamless Integration", 
        text: "The system integrated with existing ERP and CRM platforms, ensuring smooth adoption." 
    },
    { 
        heading: "User-Friendly Design", 
        text: "A simple interface encouraged use by employees with no analytics expertise." 
    },
    { 
        heading: "Robust Security Measures", 
        text: "Implemented advanced encryption and access controls to safeguard sensitive data." 
    }
];


  return (
    <div>
      <Introduction/>
      <ExecutiveSummary/>
      <Problem/>
      <SolutionsBoxes 
  title="Proposed Solution" 
  description="Amlgo Labs solved the issue by implementing a Generative AI solution powered by Large Language Models (LLMs). These models, trained on vast datasets, understood natural language, converting plain-language queries into structured database commands like SQL." 
  solutions={solutionsData} 
/>

<BusinessProblem/>

<Conclusion
  title="Conclusion"
  paragraphs={[
    "This case study demonstrates the transformative potential of Generative AI and LLM-driven database interaction within the real estate sector. By eliminating data access barriers, Amlgo Labs empowered real estate professionals to make informed decisions faster, improve efficiency, and reduce costs. As the industry continues to embrace data-driven strategies, solutions like these will redefine how professionals interact with information, fostering a more agile and intelligent real estate market."
  ]}
  buttonText="Learn More"
  imageUrl="/solutions/text-sql/conclusion.jpg"
  imageAlt="AI Quality Control"
/>
    </div>
  )
}

export default page