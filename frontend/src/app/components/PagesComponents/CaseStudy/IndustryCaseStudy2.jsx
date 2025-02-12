import React from 'react';
import styles from "../../../styles/pages/Components/IndustryCaseStudy2/IndustryCaseStudy2.module.css";
import Image from 'next/image';

const IndustryCaseStudy2 = ({ heading, caseStudies }) => {
  return (
    <div className={styles.backContainer}>
      <div className={styles.parentContainer}>
        <div className={styles.heading}>
          <h1>{heading}</h1>
        </div>
        <div className={styles.cardsContainer}>
          {caseStudies.map((caseStudy) => (
            <div className={styles.card} key={caseStudy.id}>
              <div className={styles.cardImageContainer}>
                <Image
                  height={300}
                  width={360}
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className={styles.cardImage}
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{caseStudy.title}</h2>
                <p className={styles.cardDescription}>{caseStudy.description}</p>
                <button className={styles.cardButton}>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryCaseStudy2;
