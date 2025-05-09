"use client";
import React from 'react';
import Link from 'next/link';
import styles from "../../../styles/pages/Components/CapabilitiesPages/InformationalStripLine.module.css";
import { useContactPopup } from "../../../context/ContactPopupContext";

const InformationStripLine = ({ title, subtitle, buttonText, buttonLink, usePopup = false }) => {
  const { openContactPopup } = useContactPopup();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <h2>
          {title} <span>{subtitle}</span>
        </h2>
        {buttonText && (
          usePopup ? (
            <button onClick={openContactPopup} className={styles.button}>
              {buttonText}
            </button>
          ) : (
            buttonLink && (
              <Link href={buttonLink} passHref>
                <button className={styles.button}>{buttonText}</button>
              </Link>
            )
          )
        )}
      </div>
    </div>
  );
};

export default InformationStripLine;