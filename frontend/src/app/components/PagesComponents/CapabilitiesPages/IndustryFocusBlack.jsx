import React from 'react'
import styles from "../../../styles/pages/Components/CapabilitiesPages/IndustryFocusBlack.module.css"
import Link from 'next/link'
import { FaIndustry } from "react-icons/fa"; // Example Icon (you can change it)

const IndustryFocusBlack = ({title, industryData}) => {
  return (
    <div className={styles.mainContainer}>
       <div className={styles.contentContainer}>
            <h2>{title}</h2>
            <div className={styles.industryGrid}>
            {industryData.map((industry, index) => (
                industry.link ? (
                    <Link key={index} href={industry.link} className={styles.industryItem}>
                        <div className={styles.iconContainer}>{industry.icon || <FaIndustry />}</div>
                        <h3>{industry.industryName}</h3>
                        <p>{industry.description}</p>
                    </Link>
                ) : (
                    <div key={index} className={styles.industryItem}>
                        <div className={styles.iconContainer}>{industry.icon || <FaIndustry />}</div>
                        <h3>{industry.industryName}</h3>
                        <p>{industry.description}</p>
                    </div>
                )
            ))}
            </div>
       </div>
    </div>
  )
}

export default IndustryFocusBlack;
