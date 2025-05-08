import React from 'react';
import styles from '../../../../styles/pages/Components/Solutions/ai-chatbot/TechnicalArchitecture.module.css';
import Image from 'next/image';

const ImplementationFramework = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <h2>AI Usage at Each Stage</h2>
        <p>
          AI-driven defect prevention system begins with data collection, unifying quality reports, vendor audits, and defect logs into a comprehensive platform. With this foundation, algorithm training employs advanced NLP and ML models to uncover hidden defect patterns, ensuring precise failure prediction. These insights power a real-time analytics dashboard, delivering proactive monitoring and instant visibility into quality metrics. Strengthening oversight, vendor-level insights pinpoint high-risk suppliers, enabling informed decision-making for quality control. The system continuously evolves, with AI-driven refinements ensuring adaptability to emerging challenges, reinforcing a commitment to excellence in automotive manufacturing.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/solutions/vehicle-quality-ai/Vehicle.png"
            alt="AI defect prevention architecture"
            width={1200}
            height={675}
            layout="responsive" // Ensures the image scales with container
            quality={80} // Balances quality and performance
            priority // Since this is a key visual, prioritize loading
          />
        </div>
      </div>
    </div>
  );
};

export default ImplementationFramework;