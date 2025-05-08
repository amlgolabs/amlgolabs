import React from 'react';
import Link from 'next/link';
import styles from "../../../styles/pages/Components/CapabilitiesPages/IndustryFocus.module.css";

const industries = [
  {
    name: "Automotive",
    link: "/automotive",
    image: "/automotivecard.jpg",
    description: "Amlgo Labs uses LLMs for interactive, user-friendly vehicle diagnostics and manuals."
  },
  {
    name: "Banking and Finance",
    link: "/banking-finance",
    image: "/bankingcard.jpg",
    description: "Amlgo Labs uses LLMs to automate compliance, generate reports, and enhance support."
  },
  {
    name: "Real Estate",
    link: "/real-estate",
    image: "/realestatecard.jpg",
    description: "Amlgo Labs uses LLMs to streamline real estate tasks with AI-powered insights."
  },
  {
    name: "Manufacturing",
    link: "/manufacturing",
    image: "/manufacturingcard.jpg",
    description: "Amlgo Labs LLMs transform sensor data into actionable insights for predictive maintenance."
  }
];

const IndustryFocus = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.heading}>
          <h2>Industries we are continuously transforming</h2>
        </div>

        <div className={styles.industryList}>
          {industries.map((industry, index) => (
            <Link key={index} href={industry.link} className={styles.industryLink}>
              <div 
                className={styles.industry} 
                style={{ backgroundImage: `url(${industry.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className={styles.overlay}></div>
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryFocus;
