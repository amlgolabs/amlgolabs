"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "../../../styles/pages/Components/CapabilitiesPages/TechStack.module.css";
import Image from "next/image";

const TechStack = ({ title, techStack }) => {
  const shouldReduceMotion = useReducedMotion();

  const imageVariants = {
    hover: shouldReduceMotion
      ? {}
      : {
          scale: 1.1,
          boxShadow: "0 4px 8px rgba(83, 216, 242, 0.3)",
          transition: { duration: 0.3, ease: "easeInOut" },
        },
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.techStackContainer}>
        <div className={styles.heading}>
          <h2>{title}</h2>
        </div>

        <div className={styles.techStackGrid}>
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              whileHover="hover"
              className={styles.techStackImageWrapper}
            >
              <Image
                src={tech.src}
                height={100}
                width={100}
                alt={tech.alt}
                quality={90}
                sizes="(max-width: 767px) 45vw, 20vw" // Adjusted for 2 columns on mobile, 5 on larger
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;