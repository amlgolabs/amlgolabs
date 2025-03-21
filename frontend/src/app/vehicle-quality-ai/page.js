import React from 'react'
import CaseStudy from '../components/PagesComponents/Solutions/vehicle-quality/CaseStudy'
import Summary from '../components/PagesComponents/Solutions/vehicle-quality/Summary'
import ProblemStatement from '../components/PagesComponents/Solutions/vehicle-quality/ProblemStatement'
import SolutionsBoxes from '../components/PagesComponents/CapabilitiesPages/SolutionsBoxes'
import ImplementationFramework from '../components/PagesComponents/Solutions/vehicle-quality/ImplementationFramework'
import KeyResultsMetrics from '../components/PagesComponents/Solutions/vehicle-quality/KeyResultsMetrics'
import Conclusion from '../components/PagesComponents/Solutions/vehicle-quality/Conclusion'

export const metadata = {
  title: "AI-Powered Vehicle Quality Inspection - Amlgo Labs",
  description: "Enhance vehicle quality with AI-powered inspection solutions by Amlgo Labs. Automate defect detection, improve accuracy, and optimize production efficiency.",
  keywords: "AI-powered vehicle inspection, Amlgo Labs, defect detection, quality control, automotive AI, vehicle quality assurance, automated inspection, production efficiency, machine learning, computer vision, smart manufacturing, automotive innovation, AI-driven quality checks",
};

const page = () => {
    const solutionsData = [
        { 
            heading: "Centralized Data Integration", 
            text: "Consolidating insights from market quality reports, in-house testing, and new model evaluations into a unified platform." 
        },
        { 
            heading: "Advanced AI Algorithms", 
            text: "Leveraging over 10,000+ lines of machine learning (ML) and natural language processing (NLP) code to detect defect trends with higher accuracy." 
        },
        { 
            heading: "Real-Time Analytics Dashboard", 
            text: "Providing engineers with intuitive, data-driven insights to monitor quality and prevent defects proactively." 
        },
        { 
            heading: "Social Media Data Mining", 
            text: "Analyzing consumer feedback to identify emerging defect patterns and enhance early detection." 
        },
        { 
            heading: "Comprehensive Root Cause Analysis", 
            text: "Utilizing advanced FTIR (Fourier-transform infrared spectroscopy) and warranty data to pinpoint defect sources and drive continuous improvements." 
        },
        { 
            heading: "Automated Quality Assurance", 
            text: "Implementing AI-driven quality checks to detect anomalies early, ensuring consistent product standards throughout the manufacturing process."
        }
    ];
    
  return (
    <div>
        <CaseStudy/>
        <Summary/>
        <ProblemStatement/>
        <SolutionsBoxes 
  title="Our Solutions" 
  description="To address these challenges, Amlgo Labs developed a cloud-based AI solution that seamlessly integrates QA datasets and delivers predictive analytics to enhance defect prevention. This comprehensive system includes: " 
  solutions={solutionsData} 
/>
<ImplementationFramework/> 
<KeyResultsMetrics/>
<Conclusion
  title="Impact and Future Potential"
  paragraphs={[
    "The AI-driven defect prevention system transformed the company’s quality assurance by eliminating inefficiencies and proactively mitigating risks. The solution significantly improved defect prediction accuracy, reduced manual efforts, and provided a scalable framework for future quality enhancements.",
    "Moving forward, Amlgo Labs aims to further refine the system by incorporating deep learning models, IoT integration, and expanding predictive capabilities to enhance quality control across all stages of vehicle production."
  ]}
  buttonText="Learn More"
  imageUrl="/solutions/vehicle-quality-ai/conclusion.png"
  imageAlt="AI Quality Control"
/>

    </div>
  )
}

export default page