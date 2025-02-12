import React from "react";
import Image from "next/image";
import styles from "../../../styles/pages/Components/AboutUs/CompanyStats.module.css";

const CompanyStats = () => {
  const stats = [
    { count: "200", label: "Models Deployed", image: "/model.png" },
    { count: "150", label: "Reports and Dashboards", image: "/report.png" },
    { count: "50+", label: "Clients Worldwide", image: "/client.png" },
    { count: "365", label: "Cups of Coffee", image: "/coffee.png" },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.heading}>
        <h2>Amlgo Labs at a Glance</h2>
      </div>
      <div className={styles.content}>
        {stats.map((stat, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <Image src={stat.image} height={70} width={70} alt={stat.label} />
            </div>
            <div className={styles.textWrapper}>
              <h3>{stat.count}</h3>
              <h4>{stat.label}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyStats;
