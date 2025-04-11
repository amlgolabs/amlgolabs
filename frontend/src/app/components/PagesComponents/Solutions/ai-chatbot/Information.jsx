import React from 'react';
import styles from '../../../../styles/pages/Components/Solutions/ai-chatbot/Information.module.css';

const Information = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.heading}>
          <h2>Amlgo On-Prem Your Own AI Expert</h2>
        </div>
        <div className={styles.content}>
          <p>
            Amlgo Labs GenAI is an on-prem AI chatbot with pre-trained knowledge ensuring secure and private 
            interactions without relying on external services. It processes internal documents by extracting, 
            cleaning, and structuring data to train and fine-tune a custom AI model. Once trained, the chatbot 
            is deployed locally, allowing users to interact through a web interface, command-line tool, or 
            chat-based application. The system is optimized for performance with efficient inference and retrieval 
            capabilities while maintaining strict security controls. This approach provides enterprises with a 
            reliable, scalable, and privacy-focused AI solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
