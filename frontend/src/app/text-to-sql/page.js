import React from 'react'
import ExecutiveSummary from '../components/PagesComponents/Solutions/text-sql/ExecutiveSummary'
import Introduction from '../components/PagesComponents/Solutions/text-sql/Introduction'
import Problem from '../components/PagesComponents/Solutions/text-sql/Problem'
import SolutionsBoxes from '../components/PagesComponents/CapabilitiesPages/SolutionsBoxes'
import BusinessProblem from '../components/PagesComponents/Solutions/text-sql/BusinessProblem'
import Conclusion from '../components/PagesComponents/Solutions/vehicle-quality/Conclusion'


export const metadata = {
  title: "Text to SQL Converter - AI-Powered Query Generator - Amlgo Labs",
  description: "Convert natural language into SQL queries with AI-powered Text-to-SQL by Amlgo Labs. Simplify database queries, boost efficiency, and speed up data analysis.",
  keywords: "Text to SQL, AI-powered query generator, Amlgo Labs, natural language to SQL, database automation, SQL query generation, data analysis, AI-driven database queries, query optimization, data insights, automated SQL generation, natural language processing, NLP for databases",
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
      <ExecutiveSummary/>
      <Introduction/>
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
  imageUrl="/placeholder/500x350.png"
  imageAlt="AI Quality Control"
/>
    </div>
  )
}

export default page