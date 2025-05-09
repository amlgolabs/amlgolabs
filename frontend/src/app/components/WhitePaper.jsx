"use client";
import React from "react";
import styles from "../styles/Components/WhitePaper.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePopup } from "../context/PopupContext";

const WhitePaper = () => {
  const { openPopup } = usePopup();
  return (
    <div className={styles.whitePaperContainer}>
      <div className={styles.content}>
        <h2 className={styles.subheading}>WHITE PAPER</h2>
        <h1 className={styles.heading}>
          <span className={styles.strokeText}>Revolutionizing Enterprises:</span>{" "}
          <br />
          Integrating Generative AI for Faster Workflows
        </h1>
        

        <button onClick={() => openPopup("Business-Potential-GenAI")} className={styles.button}>Learn More</button>

      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/whitepaper1.jpeg"
          width={600}
          height={600}
          alt="Whitepaper cover"
          className={styles.image}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default WhitePaper;