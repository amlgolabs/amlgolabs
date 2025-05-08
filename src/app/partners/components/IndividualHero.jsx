import React from 'react';
import styles from "../../styles/pages/Components/Partners/IndividualHero.module.css";
import Image from 'next/image';

const IndividualHero = ({ 
  heading, 
  content, 
  buttonText, 
  buttonLink, 
  imageSrc, 
  imageAlt 
}) => {
  return (
    <section className={styles.mainContainer}>
      <h1 className={styles.heroHeading}>{heading}</h1>

      <div className={styles.contentContainer}>
        <div className={styles.contentInfo}>
          <p>{content}</p>
          <a href={buttonLink} className="globalButtonBlack" aria-label={`Let's Talk: ${buttonText}`}>
            {buttonText}
          </a>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            height={1000}
            width={1000}
            alt={imageAlt}
            priority
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default IndividualHero;
