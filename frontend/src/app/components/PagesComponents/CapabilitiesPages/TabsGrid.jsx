'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../../styles/pages/Components/CapabilitiesPages/TabsGrid.module.css';

const tabs = [
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Amlgo Labs empowers your DevOps journey with cutting-edge automation, seamless CI/CD pipelines, and scalable cloud solutions. We optimize workflows, enhance collaboration, and deliver faster, reliable software for transformative business growth.',
    image: '/capabilities/data-ops/DevOps.png',
  },
  {
    id: 'dataops',
    title: 'DataOps',
    description: 'In DataOps, Amlgo Labs enhances data management by automating workflows, ensuring seamless integration, and improving data quality. This empowers businesses to accelerate analytics, optimize decision-making, and maintain operational agility.',

    image: '/capabilities/data-ops/DataOps.png',

  },
  {
    id: 'mlops',
    title: 'MLOps',
    description: ' Amlgo Labs transforms MLOps by automating machine learning workflows, accelerating model deployment, and ensuring scalability. We enable businesses to harness AI-driven insights with efficiency, reliability, and innovation.',

    image: '/capabilities/data-ops/MlOps.png',

  },
  {
    id: 'securityops',
    title: 'SecurityOps',
    description: 'In SecurityOps, Amlgo Labs embeds security across your infrastructure with proactive monitoring, threat detection, and Identity and Access Management (IAM). Our approach reduces risk, ensures compliance, and safeguards data—enabling leaders to drive innovation confidently while maintaining full control over access and security posture.',

    image: '/capabilities/data-ops/SecurityOps.png',

  },
];

const TabsGrid = () => {
  const [activeTab, setActiveTab] = useState('devops');

  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <div className={styles.mainContainer}>

    <div className={styles.container}>
      <div className={styles.tabButtons}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image src={activeContent.image} alt={activeContent.title} width={500} height={350} className={styles.image} />
        </div>
        <div className={styles.textContent}>
          <h2>{activeContent.title}</h2>
          <p>{activeContent.description}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TabsGrid;
