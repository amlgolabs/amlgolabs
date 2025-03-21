import React from 'react'
import PartnersHero from '../components/PagesComponents/PartnersHero'
import Introduction2 from '../components/PagesComponents/Introduction/Introduction2'
import PartnerIntroduction from '../components/PagesComponents/PartnerIntroduction'
import CloudPartners from '../components/CloudPartners'
import SingleBlog from '../components/PagesComponents/Blogs/SingleBlog'

export const metadata = {
    title: "Our Partners - Amlgo Labs",
    description: "We bring cloud and data best practices to our customers so they can focus on what they do best in any industry.",
    keywords: "Amlgo Labs partners, cloud solutions, data best practices, industry collaboration, technology partnerships, digital transformation, AI-driven solutions, business innovation, cloud and data services, strategic partnerships, industry expertise, data-driven growth",
  };
  

const page = () => {
    return (
        <div>
            <PartnersHero />
            <PartnerIntroduction />
            <CloudPartners />
            <SingleBlog
                title="Maestro Application On- Premise to AWS"
                description="An end-to-end cloud migration by Amlgo Labs Background: Our client is one of the top financial services provider firms from Europe having 100+ applications to support day-to-day banking businesses around the globe."
                imageSrc="/partners/blog.jpg"
                blogLink="/blog/generative-ai" // Update with actual blog route
                insightsLink="/insights/generative-ai" // Update with actual insights route
            />
        </div>
    )
}

export default page