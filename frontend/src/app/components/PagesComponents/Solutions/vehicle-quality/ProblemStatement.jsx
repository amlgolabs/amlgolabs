import React from 'react';
import styles from '../../../../styles/pages/Components/Solutions/vehicle-quality-ai/ProblemStatement.module.css';
import Image from 'next/image';

const ProblemStatement = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Problem Statement</h2>
      <div className={styles.contentWrapper}>
        <section className={styles.section}>
          <h4 className={styles.heading}>In modern automotive manufacturing, ensuring high-quality standards while minimizing defects is critical. However, manufacturers face several key obstacles:</h4>
          <div className={styles.card}>
            <p><strong>Data Fragmentation :</strong> QA data is scattered across multiple systems, making it difficult to extract meaningful insights.</p>
            <p><strong>Inefficient Prediction Models :</strong> Traditional methods struggle to accurately forecast component failures, leading to costly rework and delays.</p>
            <p><strong>Defect Recurrence :</strong> Lack of proactive tracking allows defects to resurface in new models, hampering efforts to achieve zero defects.</p>
          </div>
        </section>
        {/* <section className={styles.section}>
          <h2 className={styles.heading}>Existing Challenges</h2>
          <div className={styles.card}>
            <p><strong>Data Siloes:</strong> Dispersed QA data across different sources limits cross-functional collaboration and comprehensive analysis.</p>
            <p><strong>Time-Consuming Processes:</strong> Manual data collection, compilation, and defect analysis slow down decision-making and impact efficiency.</p>
            <p><strong>High Manual Effort:</strong> Quality teams rely on manual methodologies that are labor-intensive and prone to human errors.</p>
            <p><strong>Limited Accuracy:</strong> Conventional defect detection techniques often miss critical defect trends, reducing the ability to implement preventive measures.</p>
            <p><strong>Risk of Data Loss:</strong> Important defect data may be overlooked or omitted due to lack of centralized systems, affecting quality assessments.</p>
          </div>
        </section> */}

<section className={styles.challengesSection}>
  <h2>Challenges</h2>
  <div className={styles.challengesContainer}>
    <div className={styles.challengesCard}>
      <Image src="/solutions/vehicle-quality-ai/datasiloes.png" height={70} width={70} alt='icon'/>
      <h3>Data Siloes</h3>
      <p>Dispersed QA data across different sources limits cross-functional collaboration and comprehensive analysis.</p>
    </div>
    <div className={styles.challengesCard}>
      <Image src="/solutions/vehicle-quality-ai/time.png" height={70} width={70} alt='icon'/>
      <h3>Time-Consuming Processes</h3>
      <p>Manual data collection, compilation, and defect analysis slow down decision-making and impact efficiency.</p>
    </div>
    <div className={styles.challengesCard}>
      <Image src="/solutions/vehicle-quality-ai/manual.png" height={70} width={70} alt='icon'/>
      <h3>High Manual Effort</h3>
      <p>Quality teams rely on manual methodologies that are labor-intensive and prone to human errors.</p>
    </div>
    <div className={styles.challengesCard}>
      <Image src="/solutions/vehicle-quality-ai/accuracy.png" height={70} width={70} alt='icon'/>
      <h3>Limited Accuracy</h3>
      <p>Conventional defect detection techniques often miss critical defect trends, reducing the ability to implement preventive measures.</p>
    </div>
    <div className={styles.challengesCard}>
      <Image src="/solutions/vehicle-quality-ai/dataloss.png" height={70} width={70} alt='icon'/>
      <h3>Risk of Data Loss</h3>
      <p>Important defect data may be overlooked or omitted due to lack of centralized systems, affecting quality assessments.</p>
    </div>
    <div className={styles.challengesCard}>
      <Image src="/solutions/vehicle-quality-ai/reporting.png" height={70} width={70} alt='icon'/>
      <h3>Inconsistent Reporting Standards</h3>
      <p>Variability in defect reporting formats and metrics across teams leads to inconsistent data interpretation, making it difficult to derive actionable insights.</p>
    </div>
  </div>
</section>

      </div>
    </div>
  );
};

export default ProblemStatement;