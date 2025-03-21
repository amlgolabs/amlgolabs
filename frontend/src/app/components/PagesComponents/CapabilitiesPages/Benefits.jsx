"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "../../../styles/pages/Components/CapabilitiesPages/Benefits.module.css";

// Floating animation (up and down)
const floatingAnimation = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Card entrance animation (staggered)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

// Individual card animation (entry + hover)
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: { 
    scale: 1.1, 
    rotate: 3,
    boxShadow: "0px 12px 25px rgba(0, 229, 255, 0.4)", 
    transition: { duration: 0.3 }
  }
};

const Benefits = ({ title, benefitsData }) => {
  return (
    <motion.div 
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h1 className={styles.title}>{title}</h1>
      <motion.div className={styles.gridContainer}>
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className={styles.iconWrapper} 
              variants={floatingAnimation}
            >
              <FaCheckCircle className={styles.icon} />
            </motion.div>
            <p className={styles.text}>{benefit}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Benefits;