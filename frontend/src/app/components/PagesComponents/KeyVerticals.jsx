"use client";
import React, { useRef, useState, useEffect } from 'react';
import styles from "../../styles/pages/Components/KeyVerticals.module.css";

const KeyVerticals = ({ title, keyVerticals }) => {
  const scrollContainerRef = useRef(null);
  const [progress, setProgress] = useState(30);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollPercentage = (scrollLeft / (scrollWidth - containerWidth)) * 100;
      setProgress(scrollPercentage);
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>{title}</h2>
      <section className={styles.keyVerticals}>
        <div className={styles.scrollContainer} ref={scrollContainerRef}>
          {keyVerticals.map((vertical, index) => (
            <div key={index} className={styles.vertical} style={{ backgroundColor: vertical.color }}>
              <div className={styles.iconAndTitle}>
                <div className={styles.iconWrapper}>{vertical.icon}</div>
                <h3 className={styles.verticalTitle}>{vertical.name}</h3>
              </div>
              <p className={styles.description}>{vertical.description}</p>
            </div>
          ))}
        </div>
        {/* Progress Bar Container */}
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }} />
        </div>
      </section>
    </div>
  );
};

export default KeyVerticals;
