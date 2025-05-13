import React from 'react';
import styles from '../../../styles/pages/Components/IndustryHero/IndustryHero2.module.css';
import Link from 'next/link';
import Image from 'next/image';

const IndustryHero2 = ({ title, description, buttonText, buttonLink, backgroundImage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <Image
          src={backgroundImage}
          alt="Industry Hero Background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          quality={85}
          sizes="100vw"
        />
      </div>
      <div className={styles.headingContainer}>
        <div className={styles.heading}>
          <h1>{title}</h1>
          <p>{description}</p>
        
          <Link href={buttonLink}>
            <button className="globalButton">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustryHero2;