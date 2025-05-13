"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion"; // Import framer-motion
import styles from "../../../styles/pages/Components/CapabilitiesPages/SolutionsBoxes.module.css";

const SolutionsBoxes = ({ title, description, solutions }) => {
  const shouldReduceMotion = useReducedMotion(); // Check for reduced motion preference

  // Card hover animation
  const cardVariants = {
    hover: shouldReduceMotion
      ? {}
      : {
          scale: 1.03, // Matches mobile hover scale (updated to be consistent)
          transition: { duration: 0.3, ease: "easeInOut" },
        },
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.upperContainer}>
          <div className={styles.upperLeft}>
            <h2>{title}</h2>
          </div>
          <div className={styles.upperRight}>
            <p>{description}</p>
          </div>
        </div>
        <div className={styles.lowerContainer}>
          <div className={styles.cardContainer}>
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className={styles.cardItem}
                variants={cardVariants}
                whileHover="hover" // Apply hover animation
              >
                <h3>{solution.heading}</h3>
                <p>{solution.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsBoxes;