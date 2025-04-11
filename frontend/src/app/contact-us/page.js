import React, { use } from 'react'
import OfficeLocationMap from './OfficeLocation'
import ContactUsForm from './ContactUsForm'
import styles from "../styles/pages/Contact-Us/ContactUs.module.css"
import Banner from './Banner';
import Socials from './Socials';
import Locations from './Locations';
import CompanyAchievements from '../components/PagesComponents/AboutUs/CompanyAchievements';
import Achievements from '../components/Achievements';

export const metadata = {
  title: "Contact Amlgo Labs - AI & Data Analytics Experts",
  description: "Get in touch with Amlgo Labs for cutting-edge AI, ML, and data analytics solutions. Reach us at contact@amlgolabs.com for expert consultation.",
  keywords: "Amlgo Labs, contact Amlgo Labs, AI solutions, machine learning, data analytics, expert consultation, AI consultation, ML experts, data-driven solutions, business growth",
};


const page = () => {
  return (
    // <div className={styles.mainContainer}>
    //   <div className={styles.mapContainer}>

    //     <OfficeLocationMap />
    //   </div>

    //   <div className={styles.contactFormContainer}>

    //     <ContactUsForm />
    //   </div>
    // </div>
    <div>
      <Banner/>
      
         <ContactUsForm />
         <Locations/>
         {/* <CompanyAchievements/> */}
         <Achievements/>
       
    </div>
  )
}

export default page