import React from 'react'
import styles from "../../styles/pages/Components/IndustryTechnology.module.css"
import Image from 'next/image'

const IndustryTechnology = ({ technologies, heading }) => {
  return (
    <div className={styles.container}>
        <div className={styles.technologyContainer}>
            <div className={styles.content}>
                <h3>{heading}</h3>
            </div>
            <div className={styles.technologyGrid}>
                {technologies.map((tech, index) => (
                  <div key={index} className={styles.gridItem}>
                    <Image src={tech.image} height={150} width={150} alt={tech.name} />
                    <h4>{tech.name}</h4>
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default IndustryTechnology
