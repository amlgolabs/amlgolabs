import React from "react";
import styles from "../../styles/pages/Components/NumberStats.module.css";

const NumberStats = () => {
  return (
    <div className={styles.mainContainer}>
      {/* <div className={styles.header}>
        <h1>🚀 Tech Insights Dashboard</h1>
        <p>Unlock the power of data-driven decisions with futuristic analytics.</p>
      </div> */}
      <div className={styles.statsContainer}>
        <div className={styles.statsCard}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--blue)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="6" x2="12" y2="18" />
              <line x1="6" y1="12" x2="18" y2="12" />
            </svg>
          </div>
          <h2>60%</h2>
          <h3>Reduced Time to Market</h3>
          <p>
            Accelerate your product launches with optimized workflows and
            cutting-edge automation.
          </p>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--blue)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12l2-2 4 4 6-6 5 5" />
            </svg>
          </div>
          <h2>90%</h2>
          <h3>Improved Data Quality</h3>
          <p>
            Leverage AI-powered insights to ensure data accuracy and
            reliability.
          </p>
        </div>
        <div className={styles.statsCard}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--blue)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 22 22 2 22" />
            </svg>
          </div>
          <h2>20%</h2>
          <h3>More Time for Development</h3>
          <p>
            Empower teams to focus on innovation by reducing repetitive tasks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NumberStats;
