import React from 'react';
import styles from '../../../../styles/pages/Components/Solutions/ai-chatbot/TechnicalArchitecture.module.css';
import Image from 'next/image';

const ImplementationFramework = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
            <h2>Technical Architecture</h2>
            <p>AI-driven defect prevention system begins with data collection, unifying quality reports, vendor audits, and defect logs into a comprehensive platform. With this foundation, algorithm training employs advanced NLP and ML models to uncover hidden defect patterns, ensuring precise failure prediction. These insights power a real-time analytics dashboard, delivering proactive monitoring and instant visibility into quality metrics. Strengthening oversight, vendor-level insights pinpoint high-risk suppliers, enabling informed decision-making for quality control. The system continuously evolves, with AI-driven refinements ensuring adaptability to emerging challenges, reinforcing a commitment to excellence in automotive manufacturing.</p>
            <div className={styles.imageContainer}>
                <Image
                    src="/solutions/vehicle-quality-ai/Vehicle.png" // Ensure this path is correct
                    alt="architecture"
                    width={1366}
                    height={768}
                    layout="intrinsic" // Allows responsive resizing based on natural aspect ratio
                    quality={75} // Optional: Adjusts image quality for optimization
                    priority // Optional: If this image is critical for above-the-fold content, consider marking it as priority
                />
            </div>
        </div>
    </div>
  )
} 

export default ImplementationFramework;
