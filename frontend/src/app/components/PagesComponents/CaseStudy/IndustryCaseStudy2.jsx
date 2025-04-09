import React from 'react';
import styles from "../../../styles/pages/Components/IndustryCaseStudy2/IndustryCaseStudy2.module.css";
import Image from 'next/image';
import Link from 'next/link';

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
                  height={200} // Fixed height for consistency
                  width={360}  // Matches card width
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className={styles.cardImage}
                  objectFit="cover" // Ensures image fills container uniformly
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{caseStudy.title}</h2>
                <p className={styles.cardDescription}>{caseStudy.description}</p>
                <Link  href={caseStudy.link} target='_blank'>
                  <button className='globalButton'>Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryCaseStudy2;