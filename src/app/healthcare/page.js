import React from 'react'
import IndustryHero from '../components/PagesComponents/Hero/IndustryHero1'

export const metadata = {
    title: "Healthcare - Amlgo Labs",
    description: "Learn more about Amlgo Labs, our mission, vision, and team.",
    keywords: "Amlgo Labs, about us, mission, vision, team, data analytics, AI, ML",
  };

const page = () => {
  return (
    <IndustryHero
        imageSrc="/HealthcareBanner.png"
        altText="Healthcare Industry"
        heading="Smarter Decisions, Healthier Outcomes"
      />
  )
}

export default page