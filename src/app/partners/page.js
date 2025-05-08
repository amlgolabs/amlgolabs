import React from 'react'
import PartnersHero from '../components/PagesComponents/PartnersHero'
import Introduction2 from '../components/PagesComponents/Introduction/Introduction2'
import PartnerIntroduction from '../components/PagesComponents/PartnerIntroduction'
import CloudPartners from '../components/CloudPartners'
import SingleBlog from '../components/PagesComponents/Blogs/SingleBlog'

export const metadata = {
    title: "Our Partners - Amlgo Labs",
    description: "We bring cloud and data best practices to our customers so they can focus on what they do best in any industry.",
    keywords: "Amlgo Labs partners, cloud solutions, data best practices, industry collaboration, technology partnerships, digital transformation, AI-driven solutions, business innovation, cloud and data services, strategic partnerships, industry expertise, data-driven growth, AI partnerships, technology alliances, leading AI partnerships for enterprise transformation, strategic AI collaborations for data excellence, cloud azure, azure cloud services, microsoft azure cloud partners, aws migration partners, windows cloud, microsoft cloud service provider, microsoft azure courses, cloud solutions company, databricks cloud, cloud analytics platforms, microsoft cloud provider, aws cloud labs, azure service provider, google and cloud, cloud databricks, cloud services for machine learning, microsoft cloud solutions provider, cloudm migration, on cloud service, microsoft azure for data analytics, end to end cloud, databricks for aws, azure and cloud, google cloud it, microsoft azure partner network, google cloud microsoft azure, ai microsoft azure, aws migration from on premise, google microsoft azure, microsoft azure a, cloud migration provider, cloud for data analytics, cloud for data, microsoft azure mlops, learning azure cloud, google cloud service partner, service provider azure, azure industry solutions, microsoft azure cloud provider, cloud technology azure, microsoft azure service provider, microsoft azure and cloud computing, cloud services industry, microsoft azure cloud learning, cloud serving, on premise to aws migration, we are cloud, aws migration to azure, cloud migration technology, cloud services top, migration of cloud, on cloud solutions",
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
                button1Link="/documents/maestro_application_on_premise_to_aws.pdf" // Update with actual blog route
                
                button1Text="Read Now"
            />
        </div>
    )
}

export default page