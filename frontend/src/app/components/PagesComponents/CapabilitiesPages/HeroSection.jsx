import React from 'react';
import styles from "../../../styles/pages/Components/CapabilitiesPages/HeroSection.module.css";
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = ({ title, description, buttonText, imageSrc, imageAlt }) => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.leftContent}>
          <h1>{title}</h1>
          <p>{description}</p>
          <Link href="/contact-us">
          <button className='globalButton'>{buttonText}</button>
          </Link>
        </div>
        <div className={styles.rightContent}>
          <Image
            height={500}
            width={500}
            src={imageSrc}
            alt={imageAlt}
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
