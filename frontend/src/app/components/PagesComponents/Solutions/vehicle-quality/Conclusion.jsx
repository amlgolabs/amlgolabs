import React from "react";
import Image from "next/image";
import styles from "../../../../styles/pages/Components/Solutions/vehicle-quality-ai/Conclusion.module.css";

const Conclusion = ({ title, paragraphs, buttonText, imageUrl, imageAlt }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <button className={styles.ctaButton}>{buttonText}</button>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={500}
          height={350}
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Conclusion;
