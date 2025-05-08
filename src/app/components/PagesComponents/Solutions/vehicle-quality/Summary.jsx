import React from 'react';
import Image from 'next/image';
import styles from '../../../../styles/pages/Components/Solutions/vehicle-quality-ai/Summary.module.css';

const Summary = () => {
  return (
    <div className={styles.mainContainer} id = "market-analysis">
      <div className={styles.contentContainer}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/solutions/vehicle-quality-ai/marketanalysis.png" 
            height={500} 
            width={500} 
            alt="vehicle-quality"
            className={styles.image}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Market Analysis</h2>
          <p className={styles.description}>
            A leading <span>Automotive Manufacturer&apos;s</span> Quality Division faced challenges in defect correlation and prediction, impacting new model development. <span>Amlgo Labs</span> implemented an AI-driven defect detection and prevention system, leveraging <span>Machine Learning (ML)</span> and <span>Natural Language Processing (NLP)</span> to analyze QA datasets and forecast failures. The solution streamlined defect tracking, improved prediction accuracy, and optimized vendor and component analytics, achieving significant reductions 
            in defect recurrence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
