import React from 'react'
import Intro from '../components/PagesComponents/Solutions/ai-chatbot/Intro'
import Information from '../components/PagesComponents/Solutions/ai-chatbot/Information'
import SolutionsSteps from '../components/PagesComponents/SolutionsSteps'
import TechnicalArchitecture from '../components/PagesComponents/Solutions/ai-chatbot/TechnicalArchitecture'
import Benefits from '../components/PagesComponents/Solutions/ai-chatbot/Benefits'
import Table from '../components/PagesComponents/Solutions/ai-chatbot/Table'

export const metadata = {
  title: "Conversational AI Chatbot Solutions - Amlgo Labs",
  description: "Enhance customer experience with AI-powered chatbots by Amlgo Labs. Automate support, improve interactions & drive conversions with smart AI solutions.",
  keywords: "Conversational AI, AI chatbots, Amlgo Labs, customer experience, automated support, AI-powered interactions, chatbot development, virtual assistants, natural language processing, NLP, customer engagement, smart AI solutions, chatbot automation, AI-driven conversions",
};



const page = () => {

  const stepsData = [
    {
      id: 1,
      heading: 'Multi-Format Document Processing',
      content:
        'It excels in seamlessly extracting text from PDFs using pdf-parse, performing optical character recognition (OCR) on images through Tesseract.js, and efficiently parsing spreadsheets via xlsx and csv-parser, ensuring comprehensive data ingestion from diverse document types.',
    },
    {
      id: 2,
      heading: 'AI Chatbot with LLM (LLaMA3)',
      content:
        'An advanced AI Chatbot powered by LLaMA3, enabling it to interpret user queries, intelligently retrieve pertinent information from associated documents, and deliver sophisticated AI-generated responses.',
    },
    {
      id: 3,
      heading: 'User-Friendly Frontend (React.js)',
      content:
        'Amlgo Chatbot features a User-Friendly Frontend, built with React.js, providing an intuitive interface for efficient document management, streamlined search capabilities, and seamless interactions with the AI chatbot. This design prioritizes ease of use, ensuring a productive and accessible user experience.',
    },
    {
      id: 4,
      heading: 'AI-Powered Search & Retrieval',
      content:
        'On-Prem AI Chatbot utilizes ChromaDB to store document embeddings for rapid similarity searches. Sentence Transformers are leveraged to generate these embeddings, ensuring precise and efficient information retrieval, enhancing the chatbot\'s ability to deliver relevant responses.',
    },
    {
      id: 5,
      heading: 'Secure Authentication & Access Control',
      content:
        'Prioritizes data security with Secure Authentication & Access Control, integrating Keycloak to provide robust user authentication, ensuring that only authorized personnel can access and interact with the system. This implementation safeguards sensitive information and maintains stringent security protocols.',
    },
  ];

  return (
    <div>
        <Intro/>
        <Information/>
        <SolutionsSteps
            title="Discover the Functionality You Need"
            steps={stepsData}
        />
        <TechnicalArchitecture/>
        <Benefits/>
        <Table/>
    </div>
  )
}

export default page