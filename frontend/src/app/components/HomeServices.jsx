"use client"
import React, { useState } from 'react';
import styles from "../styles/Components/HomeServices.module.css";
import Image from 'next/image';
import Link from 'next/link';

const HomeServices = () => {
  // State to manage the active case study
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  // Array of case studies data
  const caseStudies = [
    {
      title: 'Generative AI Agent Development & Integration',
      description: 'Gen-AI Agents tailored to your unique needs, unlike traditional Predictive AI, which forecasts outcomes based on historical data.',
      imageSrc: '/Home/service1.png',
      partnerAlt: 'casestudy',
      caseStudyTitle: 'Gen AI Agents',
      link:"/genai-agents"
    },
    {
      title: 'Streamline AI & Software Delivery with Integrated Ops',
      description: 'Accelerate your AI and software development lifecycle with our end-to-end DataOps, DevOps, and MLOps solutions.',
      imageSrc: '/Home/service2.png',
      partnerImage: '/partner2.png',
      partnerAlt: 'casestudy2',
      caseStudyTitle: 'Optimize Efficiency & Innovation with Unified AI & DevOps.',
      link:"/devops-dataops-mlops"
    },
    {
      title: 'Power Intelligent Systems with Cutting-Edge ML & DL',
      description: 'Leverage our Machine Learning (ML) and Deep Learning (DL) expertise to build high-performance AI models that solve complex business challenges.',
      imageSrc: '/Home/service3.png',
      partnerImage: '/partner3.png',
      partnerAlt: 'casestudy3',
      caseStudyTitle: 'Power Intelligent Systems with Advanced ML & DL',
       link:"/ml-dl"
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
      <h4>As a trusted partner to leading AI companies, we bring unparalleled expertise in addressing challenges with your data as well as AI adoption and deployment.</h4>
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
            <Link href={caseStudies[activeCaseStudy].link}>
            <button>Know More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

  );
};

export default HomeServices;
