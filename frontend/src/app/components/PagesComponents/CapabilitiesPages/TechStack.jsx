import React from 'react';
import styles from "../../../styles/pages/Components/CapabilitiesPages/TechStack.module.css";
import Image from 'next/image';

const TechStack = ({ title, techStack }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.techStackContainer}>
        <div className={styles.heading}>
          <h2>{title}</h2>
        </div>

        <div className={styles.techStackGrid}>
          {techStack.map((tech, index) => (
            <Image key={index} src={tech.src} height={100} width={100} alt={tech.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;