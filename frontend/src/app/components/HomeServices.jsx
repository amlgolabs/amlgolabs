"use client"
import React, { useState } from 'react';
import styles from "../styles/Components/HomeServices.module.css";
import Image from 'next/image';

const HomeServices = () => {
  // State to manage the active case study
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  // Array of case studies data
  const caseStudies = [
    {
      title: 'Generative vs Predictive AI: Core Differences',
      description: 'Delve into the fundamental technical differences between Generative and Predictive AI models.',
      imageSrc: '/CaseStudyHome1.jpeg',
      partnerAlt: 'casestudy',
      caseStudyTitle: 'Know the differences'
    },
    {
      title: 'Helping Banks with MAS610 Implementation',
      description: 'Empowering banks with seamless MAS610 reporting and compliance through robust solutions.',
      imageSrc: '/CaseStudyHome2.jpeg',
      partnerImage: '/partner2.png',
      partnerAlt: 'casestudy2',
      caseStudyTitle: 'MAS610 Reporting and Compliances'
    },
    {
      title: 'Top 5 AI Use Cases Transforming the Automotive Industry',
      description: 'Discover how AI is revolutionizing the automotive industry with top use cases in 2024.',
      imageSrc: '/CaseStudyHome3.jpeg',
      partnerImage: '/partner3.png',
      partnerAlt: 'casestudy3',
      caseStudyTitle: 'AI transforms Automotive Industry'
    }
  ];

  // Handle the click event on a heading
  const handleHeadingClick = (index) => {
    setActiveCaseStudy(index);
  };

  return (
    <div className={styles.overlay}>

    <div className={styles.parentContainer}>
    <div className={styles.headContainer}>
      <h1>Develop and Deploy with confidence</h1>
      <h4>As a trusted partner to leading AI companies, we bring unparalleled expertise in addressing your data and AI adoption and deployment challenges.</h4>
    </div>
    <div className={styles.CaseStudyContainer}>
      <div className={styles.leftContent}>
        <h2 className={styles.subheading}>SERVICES</h2>
        <div className={styles.headingsList}>
        
          {caseStudies.map((caseStudy, index) => (
            <div 
              key={index} 
              className={styles.headingItem} 
              onClick={() => handleHeadingClick(index)} 
              style={{ cursor: 'pointer', padding: '10px', color: activeCaseStudy === index ? 'black' : 'gray'}}
            >
              <h3 className={styles.headingLeft}>{caseStudy.title}</h3>
              {/* Display a short description when clicked */}
              {activeCaseStudy === index && <p className={styles.description}>{caseStudy.description}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.rightContent}>
        {/* Content dynamically changes based on active case study */}
        {/* <div className={styles.content}>
          <h1 className={styles.heading}>{caseStudies[activeCaseStudy].title}</h1>
        </div> */}

        <div className={styles.imageContainer}>
          <Image
            src={caseStudies[activeCaseStudy].imageSrc}
            width={400}
            height={400}
            alt="whitepaper"
            className={styles.image}
          />

          <div className={styles.caseStudyRedirect}>
            
            <div>
              <h4>{caseStudies[activeCaseStudy].caseStudyTitle}</h4>
              <p>{caseStudies[activeCaseStudy].description}</p>
            </div>
            <button>Read</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

  );
};

export default HomeServices;
