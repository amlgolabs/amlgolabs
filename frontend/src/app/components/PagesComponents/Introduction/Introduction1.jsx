// Introduction1.jsx
import React from 'react';
import styles from '../../../styles/pages/Components/Introduction/Introduction1.module.css';

const Introduction1 = ({ title, subtitle, content1, content2 }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <h3>{title}</h3>
        <h2>{subtitle}</h2>
        <p>{content1}</p>
        <p>{content2}</p>
      </div>
    </div>
  );
};

export default Introduction1;