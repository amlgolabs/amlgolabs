import React from 'react'
import Intro from '../components/PagesComponents/Solutions/ai-chatbot/Intro'
import Information from '../components/PagesComponents/Solutions/ai-chatbot/Information'
import SolutionsSteps from '../components/PagesComponents/SolutionsSteps'
import TechnicalArchitecture from '../components/PagesComponents/Solutions/ai-chatbot/TechnicalArchitecture'
import Benefits from '../components/PagesComponents/Solutions/ai-chatbot/Benefits'
import Table from '../components/PagesComponents/Solutions/ai-chatbot/Table'
import DemoVideo from '../components/PagesComponents/Solutions/ai-chatbot/DemoVideo'

export const metadata = {
  title: "Conversational AI Chatbot Solutions - Amlgo Labs",
  description: "Enhance customer engagement with Conversational AI Chatbots by Amlgo Labs. Build intelligent, custom AI chatbots powered by LLMs, generative AI, and secure cloud-based solutions for seamless communication and business growth.",
  keywords: "conversational ai, custom ai chatbot, ai conversational chatbot, gen ai, using ai, chat bots ai, conversational ai bot, chatbot with ai, generative ai, advanced ai chatbot, ai for document processing, ai talkbot, advanced ai, ai based chatbot, intelligent ai chatbot, ai for documents, ai training, llm ai, ai for data, ai system, conversational ai demo, ai generated chat bot, ai tool, ai generative, ai solutions for business, chat bot ai free, security for ai, ai for free, ai and data security, train your own ai, use ai chatbot, ai chat api, web based ai, conversational ai free, conversational ai tools, ai for search, customer chatbot, all about ai, tools ai, advanced ai chat, i chat bot, cloud for ai, custom ai models, ai in it security, generate with ai, talkbot ai, chatterbot ai, llms ai, ai how to use, security with ai, ai chatbot demo, conversational ai analytics, ai security solutions, ai chat it, ai of ai, expert in ai, internet ai chatbot, ai privacy and security, through ai, data processing ai, search by ai, tool ai, ai bot chatbot, business with ai, advanced ai bot, information ai, ai as api, ai for services, ai user, business and ai, analytics with ai, intelligent ai chat, network security ai, business ai solutions, ai trained, business in ai, by using ai, ai react js, ai trained model, ai advanced, chatterbot api, ai trained models, chatbot customer, conversational ai agents, ai web services, knowledge of ai"
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
        <DemoVideo 
        
  src="/solutions/ai-chatbot/demo.mp4"
  heading="Amlgo Labs' Custom AI Chatbot"
  description="Experience the power of Amlgo Labs' cutting-edge AI Chatbot, designed to enhance and streamline your customer interactions. Watch this quick demo to see how our intelligent solution offers real-time engagement, seamless communication, and unmatched flexibility."
  poster="/images/video-poster.jpg" // optional
/>
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