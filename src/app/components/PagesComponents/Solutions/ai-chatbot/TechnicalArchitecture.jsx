import React from 'react';
import styles from '../../../../styles/pages/Components/Solutions/ai-chatbot/TechnicalArchitecture.module.css';
import Image from 'next/image';

const TechnicalArchitecture = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
            <h2>Technical Architecture</h2>
            <div className={styles.imageContainer}>
                <Image
                    src="/solutions/ai-chatbot/technicalarchitecture.jpg" // Ensure this path is correct
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

export default TechnicalArchitecture;
