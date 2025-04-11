// Banner.jsx
import React from 'react';
import styles from "../styles/pages/Contact-Us/Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>
          Let’s connect
        </h1>
        <p className={styles.subtitle}>
          Have a question, need support, or curious about how Amlgo Labs can elevate your business? 
          Our team is here to collaborate with you.
        </p>
      </div>
    </section>
  );
};

export default Banner;