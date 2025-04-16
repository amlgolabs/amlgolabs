import React from 'react';
import styles from "../styles/Components/CaseStudies.module.css";
import Image from 'next/image';
import Link from 'next/link';

const CaseStudies = ({ caseStudies }) => {
  return (
    <div className={styles.backContainer}>
      <div className={styles.parentContainer}>
        <div className={styles.heading}>
          <h2>Insights</h2>
        </div>
        <div className={styles.cardsContainer}>
          {caseStudies.map((caseStudy) => (
            <div className={styles.card} key={caseStudy.id}>
              <div className={styles.cardImageContainer}>
                <Image
                  height={200}
                  width={300}
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className={styles.cardImage}
                  objectFit="cover"
                />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{caseStudy.title}</h2>
                <div className={styles.cardDescription}>{caseStudy.description}</div>
                {/* <a href={caseStudy.link} target="_blank" rel="noopener noreferrer">
                  <button className={styles.cardButton}>Read More</button>
                </a> */}

                 <Link href={caseStudy.link} target="_blank" rel="noopener noreferrer">
                  <button className="globalButton">Read More</button>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;