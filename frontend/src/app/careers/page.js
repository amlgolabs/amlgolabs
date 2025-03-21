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
  keywords: "Amlgo Labs careers, AI jobs, machine learning careers, data analytics jobs, AI experts, ML opportunities, data science roles, career growth, innovation, job openings",
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