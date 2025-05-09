import React from "react";
import styles from "../../../styles/pages/Components/CapabilitiesPages/Hero.module.css";

const Hero = ({ videoSrc, heading, description }) => {
  return (
    <div className={styles.mainContainer}>
      {/* Background Video */}
      <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className={styles.overlay} />

      <div className={styles.contentContainer}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};



export default Hero;
