// components/ModernChallengesSection.js
import React from "react";
import styles from "../../styles/pages/Components/Challenges2.module.css"
import Image from "next/image";


const challenges = [
    {
      title: "Predictive Maintenance",
      description:
        "Leverage AI to predict automotive component failures, minimize downtime, and cut repair costs through advanced sensor data analysis.",
      image: "/AutomotiveChallenge1.png",
    },
    {
      title: "Supply Chain Optimization",
      description:
        "Streamline your automotive supply chain with AI-driven tools to optimize inventory, accurately forecast demand, and prevent disruptions.",
      image: "/AutomotiveChallenge2.png",
    },
    {
      title: "Quality Control and Defect Detection",
      description:
        "Ensure flawless automotive manufacturing with AI-powered vision systems that detect defects in real-time and maintain consistent quality.",
      image: "/AutomotiveChallenge3.png",
    },
    {
      title: "Autonomous Vehicles",
      description:
        "Empower driverless technology with AI to process sensor data, improve navigation, and make smarter decisions for autonomous vehicles.",
      image: "/AutomotiveChallenge4.png",
    },
    {
      title: "Enhanced Customer Experience",
      description:
        "Elevate the automotive journey with AI-driven personalization for tailored vehicle settings, optimized routes, and engaging infotainment.",
      image: "/AutomotiveChallenge5.png",
    },
    {
      title: "Vehicle Design Innovation with Safety",
      description:
        "Accelerate vehicle innovation with AI-based generative design and simulations, reducing testing time and development costs.",
      image: "/AutomotiveChallenge6.jpg",
    },
  ];
  

const ModernChallengesSection = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>
      How we Addresses Key Challenges in the Automotive Industry
</h2>
      <div className={styles.contentWrapper}>
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className={`${styles.challengeWrapper} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.textContent}>
              <h3 className={styles.cardTitle}>{challenge.title}</h3>
              <p className={styles.cardDescription}>{challenge.description}</p>
              {/* <button className={styles.learnMoreBtn}>Learn More</button> */}
            </div>
            <div className={styles.imageWrapper}>
            <Image
  src={challenge.image}
  alt={challenge.title}
  layout="responsive"
  width={300}
  height={200}
  className={styles.image}
/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModernChallengesSection;
