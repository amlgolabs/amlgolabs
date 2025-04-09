import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/pages/Components/CapabilitiesPages/CaseStudyDark.module.css';

const caseStudies = [
  {
    id: 1,
    image: '/capabilities/data-engineering/FinanceCaseStudy.jpg',
    title: 'Streamlining Financial Fraud Detection with Advanced Data Engineering',
    link: '/coming-soon'
  },
  {
    id: 2,
    image: '/capabilities/data-engineering/HealthCareCaseStudy.jpg',

    title: 'Enhancing Healthcare Analytics with Scalable Data Lakehouses',
    link: '/coming-soon'
  },
  {
    id: 3,
    image: '/capabilities/data-engineering/RetailCaseStudy.jpg',

    title: 'Optimizing Retail Supply Chains with Real-Time Data Pipelines',
    link: '/coming-soon'
  }
];

const CaseStudyDark = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <h2 className={styles.heading}>Success Stories</h2>
        <div className={styles.caseStudyGrid}>
          {caseStudies.map(({ id, image, title, link }) => (
            <div key={id} className={styles.itemCard}>
              <Image
                src={image}
                alt="Case Study"
                width={400}
                height={400}
                className={styles.image}
              />
              <h3 className={styles.title}>{title}</h3>
              <Link href={link} className={styles.link}>
                <button className={styles.button}>Read</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDark;
