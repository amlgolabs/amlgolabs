import React from "react";
import Image from "next/image";
import styles from "../../styles/pages/Components/PartnersIntroduction.module.css"

const PartnerIntroduction = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          Tap into a network of industry leaders and technology visionaries to accelerate your growth.
        </h2>
        <p className={styles.description}>
          Achieving organizational success is a collaborative journey, powered by a strong partner ecosystem. We 
          understand the impact of strategic partnerships in accelerating your go-to-market strategy, fostering 
          innovation, and enhancing service delivery. By partnering with the foremost cloud and technology platforms, 
          we drive growth and ensure your success.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image 
          src="/partners/intro.png" 
          alt="Industry leaders collaborating" 
          width={600} 
          height={400} 
          className={styles.image}
          priority
        />
      </div>
    </section>
  );
};

export default PartnerIntroduction;
