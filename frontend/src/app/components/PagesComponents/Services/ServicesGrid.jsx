import React from 'react';
import styles from "../../../styles/pages/Components/Services/ServicesGrid.module.css";

const ServicesGrid = ({ services }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.gridItem}>
            <div className={styles.card}>
              <div className={styles.iconTitleContainer}>
                {/* Dynamically render the icon */}
                {service.icon && <service.icon className={styles.icon} />}
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
              <div className={styles.cardContent}>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
