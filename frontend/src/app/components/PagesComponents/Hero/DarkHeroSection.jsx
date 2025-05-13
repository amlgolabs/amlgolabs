import React from 'react';
import styles from '../../../styles/pages/Components/IndustryHero/DarkHeroSection.module.css';
import Image from 'next/image';

const DarkHeroSection = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h3>Capabilities / Cyber Security and IAM</h3>
          <h2>Amlgo Labs Cybersecurity Consulting</h2>
          <h1 className={styles.heading}>Empowering Secure and Efficient Access Controls</h1>
          <p>
            At Amlgo Labs, we offer comprehensive Identity and Access Management (IAM) solutions
            designed to enhance user identity and access management functions across organizations.
            Our IAM capabilities ensure that the right individuals have appropriate access to
            organizational resources, thereby safeguarding critical systems and data.
          </p>
          <button className="globalButtonBlack">Let's Talk</button>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/capabilities/cybersecurity/hero.png"
            height={500}
            width={500}
            alt="Cybersecurity"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default DarkHeroSection;