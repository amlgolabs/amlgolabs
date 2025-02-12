import React from 'react';
import Image from 'next/image';
import styles from "../../../styles/pages/Components/IndustryHero/IndustryHero1.module.css"

const IndustryHero1 = ({ imageSrc, altText, heading, subHeading }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.heroContainer}>
        <div className={styles.heroImage}>
          <Image
            width={1366}
            height={768}
            src={imageSrc}
            alt={altText}
            priority
          />
        </div>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h1>{heading}</h1>
            <h3>{subHeading}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryHero1;
