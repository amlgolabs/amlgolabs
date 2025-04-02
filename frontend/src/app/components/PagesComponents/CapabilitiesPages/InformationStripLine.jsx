import React from 'react';
import Link from 'next/link';
import styles from "../../../styles/pages/Components/CapabilitiesPages/InformationalStripLine.module.css";

const InformationStripLine = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <h2>
          {title} <span>{subtitle}</span>
        </h2>
        {buttonText && buttonLink && (
          <Link href={buttonLink} passHref>
            <button>{buttonText}</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default InformationStripLine;
