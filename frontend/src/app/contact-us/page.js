import React from 'react'
import OfficeLocationMap from './OfficeLocation'
import ContactUsForm from './ContactUsForm'
import styles from "../styles/pages/Contact-Us/ContactUs.module.css"

const page = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mapContainer}>

      <OfficeLocationMap/>
      </div>

<div className={styles.contactFormContainer}>

      <ContactUsForm/>
</div>
    </div>
  )
}

export default page