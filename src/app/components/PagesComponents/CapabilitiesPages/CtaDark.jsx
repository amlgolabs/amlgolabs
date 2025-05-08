import React from "react";
import styles from "../../../styles/pages/Components/CapabilitiesPages/CtaDark.module.css";
import Link from "next/link";

const CtaDark = ({ title, buttonText, link }) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <Link href={link}>
          <button className={styles.ctaButton}>
            {buttonText} <span>→</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CtaDark;
