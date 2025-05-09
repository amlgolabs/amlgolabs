"use client"
import React from "react";
import styles from "../../../styles/pages/Components/IndustryHero/IndustryHero1.module.css";
import Image from "next/image";

const IndustryHero1 = ({ imageSrc, altText, heading, subHeading }) => {
  return (
    <section className={styles.parent}>
      <div className={styles.heroContainer}>
        <div className={styles.heroImage}>
          <Image
            src={imageSrc || "/images/fallback.jpg"}
            alt={altText || "Hero Image"}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            style={{ objectFit: "cover" }}
            onError={() => console.error("Failed to load image:", imageSrc)}
          />
        </div>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h1 className={styles.heading}>{heading}</h1>
            <h3 className={styles.subHeading}>{subHeading}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero1;