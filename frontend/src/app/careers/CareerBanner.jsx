import React from 'react';
import Image from 'next/image';
import styles from "../styles/pages/Components/Careers/CareerBanner.module.css";

const CareerBanner = () => {
  return (
    <div className={styles.mainContainer}>
      <Image 
        src="/careersBanner2.jpg"
        alt="Career Banner" 
        layout="fill" 
        objectFit="cover" 
        quality={90} 
        className={styles.bgImage}
      />
      <div className={styles.heading}>
        <h1>Join Our Team</h1>
        <p>Shape the future with innovation and expertise. Explore exciting career opportunities at Amlgo Labs.</p>
        <button className={styles.ctaButton}>View Openings</button>
      </div>
    </div>
  );
};

export default CareerBanner;