import React from 'react';
import styles from "../../../styles/pages/Components/CapabilitiesPages/SolutionsBoxes.module.css";

const SolutionsBoxes = ({ title, description, solutions }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.upperContainer}>
          <div className={styles.upperLeft}>
            <h2>{title}</h2>
          </div>
          <div className={styles.upperRight}>
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.lowerContainer}>
          <div className={styles.cardContainer}>
            {solutions.map((solution, index) => (
              <div key={index} className={styles.cardItem}>
                <h3>{solution.heading}</h3>
                <p>{solution.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsBoxes;