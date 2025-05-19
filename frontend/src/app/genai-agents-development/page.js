import React from 'react'
import Hero from '../components/PagesComponents/CapabilitiesPages/Hero'
import ClientsList from '../components/PagesComponents/CapabilitiesPages/ClientsList'
import InformationStripLine from '../components/PagesComponents/CapabilitiesPages/InformationStripLine'
import SolutionsBoxes from '../components/PagesComponents/CapabilitiesPages/SolutionsBoxes'
import PartnersSection from '../components/PagesComponents/CapabilitiesPages/PartnersSection'
import IndustryFocus2 from '../components/PagesComponents/CapabilitiesPages/IndustryFocus2'
import TechStack from '../components/PagesComponents/CapabilitiesPages/TechStack'
import SingleBlog from '../components/PagesComponents/Blogs/SingleBlog'

export const metadata = {
  title: "Gen AI Agent – Amlgo Labs",
  description: "Amlgo Labs - Gen AI Agent—automate tasks, enhance decision-making, and drive innovation. Experience the future of Gen AI-powered business solutions today.",
  keywords: "Gen AI Agent, Amlgo Labs, AI automation, decision intelligence, business innovation, artificial intelligence, machine learning, AI-powered solutions, task automation, digital transformation, intelligent agents, enterprise AI, AI-driven insights, future of AI, gen ai, ai automation, ai intelligence, customer support ai, generative ai, ai help, data analysis ai, ai in customer support, ai learning, ai data analysis, ai for data analysis, using ai to analyze data, ai management, ai systems, predict ai, ai for data analytics, ai generative, ai analysis, ai solutions for business, automation with ai, ai predict, ai for data, generate with ai, ai and data analytics, business with ai, ai customer, ai for recommendations, analysis ai, ai data insights, business and ai, data analysis and ai, through ai, ai and data analysis, operations ai, ai in management, ai it operations, business in ai, ai of ai, ai in automation industry, ai for management, ai and management, ai manage, analytics with ai, ai in it industry, management and ai, ai solutions in manufacturing, ai on business, ready for ai, ai analyze, ai for services, data analysis in ai, inventory management using ai, ai solutions in business, ai learning data, ai & data analytics, automated intelligence systems",
};


const page = () => {
  const techStackData = [
    { src: "/TechStack/apachespark.png", alt: "apache spark" },
    { src: "/TechStack/azure.png", alt: "microsoft azure ai" },
    { src: "/TechStack/pytorch.png", alt: "pytorch" },
    { src: "/TechStack/huggingface.png", alt: "hugging face transformers" },
    { src: "/TechStack/NLTK.png", alt: "nltk (natural language toolkit)" },
    { src: "/TechStack/openAI.png", alt: "openai" },
    { src: "/TechStack/rasa.png", alt: "rasa" },
    { src: "/TechStack/github.png", alt: "github" },
    { src: "/TechStack/kubernetes.png", alt: "kubernetes" },
    { src: "/TechStack/fairlearn.png", alt: "fairlearn" },
  ];
  
  const solutionsData = [
    { 
        heading: "Autonomous Workflow Management", 
        text: "Orchestrate complex workflows with intelligent agents that can autonomously manage tasks, allocate resources, and optimize processes in real-time." 
    },
    { 
        heading: "Proactive Customer Support", 
        text: "Anticipate customer needs and provide proactive support with intelligent agents that can analyze data, predict potential issues, and offer timely solutions." 
    },
    { 
        heading: "Intelligent Decision Support", 
        text: "Empower decision-makers with intelligent agents that can analyze vast amounts of data, generate insights, and provide recommendations for optimal outcomes." 
    },
    { 
        heading: "Personalized Product Recommendations", 
        text: "Drive sales and customer loyalty with AI-powered agents that can provide personalized product recommendations based on individual preferences and behavior." 
    },
   
];

  return (
    <div>
      <Hero
        videoSrc="/capabilities//gen-ai-agents/genaiagents.mp4"
        heading="Creating the Agile and Responsive Enterprise"
        description="Your business demands agility, efficiency, and the ability to anticipate and respond to evolving market dynamics. GenAI Agents represent a paradigm shift in automation, enabling the creation of intelligent, autonomous systems that can reason, learn, and act on your behalf. Amlgo Labs can help you harness the transformative power of GenAI Agents to revolutionize your operations, unlock new levels of productivity, and achieve unprecedented business outcomes."
      />
      <ClientsList />
      {/* <InformationStripLine /> */}
      <InformationStripLine
  title="Is your enterprise ready for true autonomous intelligence?"
  subtitle="Amlgo Labs builds GenAI Agents that go beyond automation, driving proactive decisions and adaptive strategies to make your business dynamic and future-ready."
  // buttonText="Explore Now"
  // buttonLink="/"
/>

      {/* <SolutionsBoxes /> */}
      <SolutionsBoxes 
  title="Our Solutions" 
  description="We empower businesses to leverage the full potential of GenAI Agents with tailored solutions designed to address specific needs and drive measurable results." 
  solutions={solutionsData} 
/>
      <IndustryFocus2/>
      <TechStack title="Tech Stack We are working on" techStack={techStackData} />

      <SingleBlog
      category="WHITE PAPER"
      title="Overcome GenAI Fears: Get your Live GenAI Agent in days."
      description="Explore how Generative AI drives automation, innovation, and smarter decisions. Overcome challenges in scalability, data quality, and integration to streamline processes and stay ahead in the evolving AI landscape."
      imageSrc="/capabilities/gen-ai-agents/blog.png"
      button1Text = "Read Now"
      button1Link="/documents/genaiagent_amlgolabs.pdf" // Update with actual blog route
      />
    </div>
  )
}

export default page