import React from "react";
import Image from "next/image";
import styles from "../../../styles/pages/Components/CapabilitiesPages/IconHeadingGrid.module.css";

const features = [
  { id: 1, title: "Domain Adaptive", icon: "/capabilities/computer-vision/domain-adaptive.png" },
  { id: 2, title: "Predictive Vision", icon: "/capabilities/computer-vision/predictive-vision.png" },
  { id: 3, title: "Generative AI", icon: "/capabilities/computer-vision/generative-ai.png" },
  { id: 4, title: "Privacy Preserving", icon: "/capabilities/computer-vision/privacy-preserving.png" },
];



const IconHeadingGrid = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <h2 className={styles.heading}>
          Add AI-powered computer vision to your applications in no time
        </h2>

        <div className={styles.gridContainer}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.gridItem}>
              <div className={styles.iconWrapper}>
                <Image src={feature.icon} height={60} width={60} alt="icon" />
              </div>
              <h3 className={styles.itemText}>{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconHeadingGrid;
