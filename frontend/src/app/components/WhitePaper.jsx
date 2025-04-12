"use client";
import React from "react";
import styles from "../styles/Components/WhitePaper.module.css";
import Image from "next/image";
import Link from "next/link";

const WhitePaper = () => {
  return (
    <div className={styles.whitePaperContainer}>
      <div className={styles.content}>
        <h2 className={styles.subheading}>WHITE PAPER</h2>
        <h1 className={styles.heading}>
          <span className={styles.strokeText}>Revolutionizing Enterprises:</span>{" "}
          <br />
          Integrating Generative AI for Faster Workflows
        </h1>
        <Link href="/documents/BusinessPotential_GenAI.pdf" target="_blank">
          <button className={styles.button}>Learn More</button>
        </Link>
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