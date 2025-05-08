import React from 'react'
import CareerBanner from './CareerBanner'
import JobList from './JobList'
import Gallery from './Gallery'
import PerksandBenefits from './PerksandBenefits'
import EmployeeTestimonials from './EmployeeTestimonials'
import CompanyCulture from './CompanyCulture'

export const metadata = {
  title: "Careers at Amlgo Labs - Join Our Data & AI Experts Team",
  description: "Explore career opportunities at Amlgo Labs. Join our expert team in AI, ML, and data analytics. Apply now at jobs@amlgolabs.com & grow with innovation.",
  keywords: "Amlgo Labs careers, AI jobs, machine learning careers, data analytics jobs, AI experts, ML opportunities, data science roles, career growth, innovation, job openings, AI careers, tech jobs, career opportunities in AI development, jobs in generative AI and machine learning, ai data analytics, ai and data science, ai for data analytics, data science and artificial intelligence, careers in data analytics, ai data science, ai and data analytics, data analytics ai, machine learning and data science, ai for data, artificial intelligence data science, data science in bangalore, data analytics and ai, ai data scientist, data science machine learning, ai in data science, ai for data science, data science with ai, data analytics with ai, data science in ai, ai with data science, data science & ai, data science machine learning and artificial intelligence, data engineering for machine learning, about data analytics, all about data science, data science with machine learning, data analytics & ai, data analytics bangalore, ai and data engineering, learning data engineering, data science ai and machine learning",
};



const page = () => {
  return (
    <div>
        <CareerBanner/>
        <CompanyCulture/>
        <Gallery/>
        <PerksandBenefits/>
        <EmployeeTestimonials/>
        <JobList/>
    </div>
  )
}

export default page