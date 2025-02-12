"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../../../styles/pages/Components/AboutUs/CompanyOverview.module.css";

const CompanyOverview = () => {
  const [activeSection, setActiveSection] = useState("Our Mission");

  const sections = [
    {
      title: "Our Mission",
      content:
        "We are deeply committed to merge data analytics, business intelligence and technology solutions to help companies make best data-driven decisions, thereby accelerating profitable growth and market value. Amlgo Labs is a team of pioneers and industry veterans. We have been partnering businesses across verticals through world-class advanced analytics and big data services.",
      image: "/placeholder.png", // Update with actual image path
    },
    {
      title: "Our Values",
      content:
        "Our values are based on the well-defined best out of the best practices in the world to help all our Stakeholders work collaboratively in most effective and fulfilling way. Hence, we strive to build a true global organization and we believe in lead by example – at all levels to support our clients in every situation.",
      image: "/placeholder.png", // Update with actual image path
    },
    {
      title: "Our Philosophy",
      content:
        "Our philosophy is to enable our global customers with top of the line solutions optimized for cost, quality and time, with commitment to precision, efficiency, integrity, customer delight and employee satisfaction.",
      image: "/placeholder.png", // Update with actual image path
    },
  ];

  return (
    <div id='values' className={styles.container}>
      <div className={styles.overview}>
        <h1>Overview</h1>
        <p>
          We are dedicated to delivering top-tier business solutions that
          enhance our partners' capabilities. Our core values center on trust,
          honesty, and transparency, enabling us to build lasting relationships
          with our clients while maintaining a flexible approach tailored to
          their needs.
        </p>
      </div>

      <div className={styles.tabMenu}>
        {sections.map((section) => (
          <button
            key={section.title}
            className={`${styles.tabButton} ${
              activeSection === section.title ? styles.active : ""
            }`}
            onClick={() => setActiveSection(section.title)}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div className={styles.contentWrapper}>
        {sections.map(
          (section) =>
            activeSection === section.title && (
              <div key={section.title} className={styles.contentBox}>
                <div className={styles.imageWrapper}>
                <Image
                  src={section.image}
                  alt={section.title}
                  width={400} // Adjust width based on design
                  height={200} // Adjust height based on design
                  className={styles.image}
                />
                </div>

                <div className={styles.contentWrapper}>

                <h2 className={styles.title}>{section.title}</h2>
                <p className={styles.content}>{section.content}</p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default CompanyOverview;
