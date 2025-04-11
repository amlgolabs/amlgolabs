import React from 'react';
import styles from '../../../../styles/pages/Components/Solutions/vehicle-quality-ai/KeyResultsMetrics.module.css';

const metrics = [
  { title: 'Faster Data Compilation', value: '47%', description: 'Reduces manual effort significantly' },
  { title: 'Accurate Defect Predictions', value: '28%', description: 'Improves quality control' },
  { title: 'Real-Time Defect Alerts', value: '28%', description: 'Proactive quality management' },
  { title: 'Vendor Analytics Enhancement', value: '22%', description: 'Reduces supplier-related defects' },
  { title: 'Predictive Testing Framework', value: '35%', description: 'Minimizes unexpected failures' },
];

const KeyResultsMetrics = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {metrics.map((metric, index) => (
          <div key={index} className={styles.card}>
            {metric.value && <span className={styles.value}>{metric.value}</span>}
            <h3 className={styles.title}>{metric.title}</h3>
            <p className={styles.description}>{metric.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyResultsMetrics;