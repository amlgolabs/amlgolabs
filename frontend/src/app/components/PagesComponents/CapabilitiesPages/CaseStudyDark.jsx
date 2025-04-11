import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/pages/Components/CapabilitiesPages/CaseStudyDark.module.css';

const caseStudies = [
  {
    id: 1,
    image: '/capabilities/data-engineering/FinanceCaseStudy.jpg',
    title: 'Big Data Engineering Massive Parallel Processing',
    link: '/documents/Big Data Engineering  Massive Parallel Processing.pdf'
  },
  {
    id: 2,
    image: '/capabilities/data-engineering/HealthCareCaseStudy.jpg',

    title: 'Lake is the New Address of Data',
    link: '/documents/lake-is-the-new-address-of-data.pdf'
  },
  {
    id: 3,
    image: '/capabilities/data-engineering/RetailCaseStudy.jpg',

    title: 'Optimizing Retail Supply Chains with Real-Time Data Pipelines',
    link: '/documents/Optimizing Retail Supply Chains with Real-Time Data Pipelines.pdf'
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
                <button className="globalButtonBlack">Read</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDark;
