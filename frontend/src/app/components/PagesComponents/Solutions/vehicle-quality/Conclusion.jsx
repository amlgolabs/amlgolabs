import React from "react";
import Image from "next/image";
import styles from "../../../../styles/pages/Components/Solutions/vehicle-quality-ai/Conclusion.module.css";
import Link from "next/link";

const Conclusion = ({ title, paragraphs, buttonText, imageUrl, imageAlt }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <Link href="/contact-us">
        <button className={styles.ctaButton}>{buttonText}</button>
        </Link>
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
