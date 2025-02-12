import React from 'react';
import styles from '../../styles/pages/Components/SolutionsSteps.module.css';

const SolutionsSteps = ({ title, subtitle, steps }) => {
    return (
        <div className={styles.container}>
            <div className={styles.stepsContainer}>
                <h2>{title}</h2>
                <h4>{subtitle}</h4>
                {steps.map((step) => (
                    <div key={step.id} className={styles.step}>
                        <div className={styles.stepHeading}>
                            <h1>{step.id}</h1>
                            <h3>{step.heading}</h3>
                        </div>
                        <div className={styles.stepContent}>
                            <p>{step.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SolutionsSteps;
