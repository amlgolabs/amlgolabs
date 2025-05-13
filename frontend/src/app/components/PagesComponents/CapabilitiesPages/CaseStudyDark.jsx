"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/pages/Components/CapabilitiesPages/CaseStudyDark.module.css';
import { usePopup } from '@/app/context/PopupContext';


const caseStudies = [
  {
    id: 1,
    image: '/capabilities/data-engineering/FinanceCaseStudy.jpg',
    title: 'Big Data Engineering Massive Parallel Processing',
    link: '/documents/Big Data Engineering  Massive Parallel Processing.pdf',
    requiresPopup: true,
    pdfName: 'Big Data Engineering  Massive Parallel Processing',
  },
  {
    id: 2,
    image: '/capabilities/data-engineering/HealthCareCaseStudy.jpg',

    title: 'Lake is the New Address of Data',
    link: '/documents/lake-is-the-new-address-of-data.pdf',
        requiresPopup: false,
    pdfName: null,
  },
  {
    id: 3,
    image: '/capabilities/data-engineering/RetailCaseStudy.jpg',

    title: 'Optimizing Retail Supply Chains with Real-Time Data Pipelines',
    link: '/documents/Optimizing Retail Supply Chains with Real-Time Data Pipelines.pdf',
        requiresPopup: true,
    pdfName: 'Optimizing Retail Supply Chains with Real-Time Data Pipelines',
  }
];

const CaseStudyDark = () => {
    const { openPopup } = usePopup();

  const handleReadMoreClick = (caseStudy) => {
    if (caseStudy.requiresPopup && caseStudy.pdfName) {
      openPopup(caseStudy.pdfName); // Trigger popup with pdfName
    }
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <h2 className={styles.heading}>Success Stories</h2>
        <div className={styles.caseStudyGrid}>
          {caseStudies.map(({ id, image, title, link, requiresPopup, pdfName }) => (
           <div key={id} className={styles.itemCard}>
           <Image
             src={image}
             alt="Case Study"
             width={400}
             height={200} /* Match CSS height */
             className={styles.image}
           />
           <h3 className={styles.title}>{title}</h3>
           <div className={styles.buttonContainer}>
             {requiresPopup ? (
               <button
                 className="globalButtonBlack"
                 onClick={() => handleReadMoreClick({ pdfName, requiresPopup })}
               >
                 Read
               </button>
             ) : (
               <Link href={link} target="_blank" rel="noopener noreferrer">
                 <button className="globalButtonBlack">Read</button>
               </Link>
             )}
           </div>
         </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDark;




