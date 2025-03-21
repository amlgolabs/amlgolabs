import React from 'react';
import styles from "../styles/Components/CaseStudies.module.css";
import Image from 'next/image';

const CaseStudies = ({ caseStudies }) => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.heading}>
        <h1>Case Studies</h1>
      </div>
      <div className={styles.cardsContainer}>
        {caseStudies.map((caseStudy) => (
          <div className={styles.card} key={caseStudy.id}>
            <Image height={300} width={300} src={caseStudy.image} alt={caseStudy.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{caseStudy.title}</h2>
              <div className={styles.cardDescription}>{caseStudy.description}</div>
              <button className={styles.cardButton}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
