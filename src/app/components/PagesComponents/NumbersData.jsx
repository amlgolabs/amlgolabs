import React from 'react';
import styles from "../../styles/pages/Components/NumberData.module.css";

const NumbersData = ({ heading, data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.left}>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.right}>
          <div className={styles.numberGrid}>
            {data.map((item, index) => (
              <div key={index} className={styles.numberItem}>
                <item.icon className={styles.icon} />
                <h4>{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumbersData;
