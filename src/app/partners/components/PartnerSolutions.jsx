"use client";
import React, { useState } from "react";
import styles from "../../styles/pages/Components/Partners/PartnerSolutions.module.css";
import Image from "next/image";

const PartnerSolutions = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Our Driving Forces</h2>
        <div className={styles.tabList}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`${styles.tabButton} ${
                activeTab === index ? styles.activeTab : ""
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className={styles.card}>
          <div className={styles.grid}>
            <div className={styles.imageWrapper}>
              <Image
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                className={styles.image}
                width={600}
                height={400}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={activeTab === 0} // Optimize first tab image
              />
            </div>
            <div className={styles.contentWrapper}>
              <p className={styles.content}>{tabs[activeTab].content}</p>
              {/* Uncomment if needed */}
              {/* <button className={styles.button}>Learn More</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSolutions;