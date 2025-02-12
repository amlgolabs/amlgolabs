import React from 'react'
import IndustryHero from '../components/PagesComponents/Hero/IndustryHero1'

export const metadata = {
    title: "Travel - Amlgo Labs",
    description: "Learn more about Amlgo Labs, our mission, vision, and team.",
    keywords: "Amlgo Labs, about us, mission, vision, team, data analytics, AI, ML",
  };

const page = () => {
  return (
    <IndustryHero
        imageSrc="/TravelBanner.png"
        altText="Travel Industry"
        heading="AI and Data Transforming Travel Industry"
      />
  )
}

export default page