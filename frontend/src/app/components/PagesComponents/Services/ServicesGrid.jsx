import React from 'react';
import styles from "../../../styles/pages/Components/Services/ServicesGrid.module.css";

const ServicesGrid = ({ services }) => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Services</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <article key={index} className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                {service.icon && (
                  <div className={styles.iconContainer}>
                    <service.icon className={styles.icon} />
                  </div>
                )}
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;