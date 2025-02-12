import React from 'react';
import { Lightbulb, BarChart, CheckCircle } from 'lucide-react';
import styles from '../../../styles/pages/Components/AboutUs/ProcessFlow.module.css';

const steps = [
  {
    id: 1,
    title: 'Research',
    description: 'Comprehensive research services dedicated to uncovering insights using your data.',
    icon: <BarChart size={40} className={styles.iconBlue} />, 
  },
  {
    id: 2,
    title: 'Ideas',
    description: 'We believe in innovations that strive to realize ideas which exceed customer expectations.',
    icon: <Lightbulb size={40} className={styles.iconYellow} />,
  },
  {
    id: 3,
    title: 'Results',
    description: 'We are committed to achieving results that help enterprises in better decision making.',
    icon: <CheckCircle size={40} className={styles.iconGreen} />,
  },
];

const ProcessFlow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textCenter}>
        <h2 className={styles.heading}>Understanding the Process</h2>
        {/* <p className={styles.subheading}>How We Work</p> */}
      </div>
     
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={step.id} className={styles.stepWrapper}>
            <div className={styles.stepIndicator}>
              <div className={styles.stepCircle}>{step.icon}</div>
              {index < steps.length - 1 && <div className={styles.connector}></div>}
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessFlow;
