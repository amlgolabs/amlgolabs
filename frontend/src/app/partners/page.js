import React from 'react'
import PartnersHero from '../components/PagesComponents/PartnersHero'
import Introduction2 from '../components/PagesComponents/Introduction/Introduction2'
import PartnerIntroduction from '../components/PagesComponents/PartnerIntroduction'
import CloudPartners from '../components/CloudPartners'
import SingleBlog from '../components/PagesComponents/Blogs/SingleBlog'

const page = () => {
    return (
        <div>
            <PartnersHero />
            <PartnerIntroduction />
            <CloudPartners />
            <SingleBlog
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus dolor magna"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus dolor magna, eu scelerisque nibh lobortis consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris fringilla, ante sit amet congue auctor, sem nulla lobortis nibh, at finibus metus tellus ac felis."
                imageSrc="/placeholder.png"
                blogLink="/blog/generative-ai" // Update with actual blog route
                insightsLink="/insights/generative-ai" // Update with actual insights route
            />
        </div>
    )
}

export default page