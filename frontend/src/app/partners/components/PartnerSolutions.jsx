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
              {/* <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                className={styles.image}
              /> */}

              <Image src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                className={styles.image}
                height={1000}
                width={1000}/>

            </div>
            <div className={styles.contentWrapper}>
              <p className={styles.content}>{tabs[activeTab].content}</p>
              {/* <button className={styles.button}>Learn More</button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSolutions;
