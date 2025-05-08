import React from 'react';
import { FaDollarSign, FaShieldAlt, FaTachometerAlt, FaCogs, FaBriefcase, FaCalendarCheck } from 'react-icons/fa';
import styles from '../../../../styles/pages/Components/Solutions/ai-chatbot/Benefits.module.css';

const Benefits = () => {
  const benefitsData = [
    {
      icon: <FaDollarSign />,
      title: 'Cost Savings & ROI',
      description: 'Reduces cloud API costs with a one-time hardware investment, ensuring long-term savings and optimized resource usage.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Data Security & Compliance',
      description: 'Keeps sensitive data on-premises, ensuring compliance with GDPR, HIPAA, and enterprise security policies while preventing data leaks.'
    },
    {
      icon: <FaTachometerAlt />,
      title: 'High Performance & Low Latency',
      description: 'GPU-accelerated processing enables real-time AI responses with fast document retrieval and query execution.'
    },
    {
      icon: <FaCogs />,
      title: 'Customization & Scalability',
      description: 'Fine-tunes AI models on enterprise data, integrates seamlessly with ERP/CRM tools, and scales with Kubernetes/Docker.'
    },
    {
      icon: <FaBriefcase />,
      title: 'Productivity & Efficiency',
      description: 'Automates document processing, enhances knowledge retrieval, and reduces manual effort, boosting employee efficiency.'
    },
    {
      icon: <FaCalendarCheck />,
      title: 'Future-Proof & Business Continuity',
      description: 'Supports AI advancements, allows hardware upgrades, and ensures uninterrupted operations even without internet access.'
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>AI Chatbot Benefits</h2>
      <div className={styles.benefitsGrid}>
        {benefitsData.map((benefit, index) => (
          <div key={index} className={styles.benefitCard}>
            <div className={styles.icon}>{benefit.icon}</div>
            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
            <p className={styles.benefitDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
