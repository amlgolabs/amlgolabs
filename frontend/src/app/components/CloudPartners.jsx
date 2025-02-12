"use client";

import React, { useState } from "react";
import styles from "../styles/pages/Components/CloudPartners.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Microsoft Azure",
    logo: "/azure.png",
    description:
    "Amlgo Labs has a strong partnership with Microsoft, backed by 200+ certified professionals. Leveraging Microsoft Azure’s scalability, we deliver tailored analytics solutions as an Azure Analytics Advanced Specialization partner. Our expertise spans industries, including the public sector, finance, manufacturing, and SMEs.",
    details:
      "As a distinguished Analytics partner with Azure Analytics Advanced Specialization, we harness Azure's capabilities to develop tailored solutions.",
    link: "#",
  },
  {
    name: "Google Cloud",
    logo: "/googlecloud.png",
    description:
      "Leveraging the immense power of Google Cloud, a comprehensive suite of cloud computing services, Amlgo Labs empowers organizations to achieve sustainable success in today's digital age. We help drive long-term growth, unlock the full potential of your data, and position your business for continued leadership in the market.",
    details:
      "We help drive long-term growth, unlock the full potential of your data, and position your business for continued leadership.",
    link: "#",
  },
  {
    name: "AWS",
    logo: "/aws.png",
    description:
      "We harnesses the full potential of AWS, extending its comprehensive suite of cloud computing services from core computing and storage to cutting-edge analytics, machine learning, and artificial intelligence. We empower businesses to unlock the transformative power of the cloud, fuel innovation, scale seamlessly, and accelerate their journey toward digital mastery.",
    details:
      "We empower businesses to unlock the transformative power of the cloud, fuel innovation, and scale seamlessly.",
    link: "#",
  },
  {
    name: "Databricks",
    logo: "/databricks.png",
    description:
      "We harness the power of the Databricks platform to ensure your data teams effortlessly process massive datasets in the cloud. We leverage advanced analytics and AI-driven insights to transform your data into actionable intelligence, enabling you to amplify efficiency, accelerate innovation, and dominate the competitive landscape.",
    details:
      "We leverage advanced analytics and AI-driven insights to transform your data into actionable intelligence.",
    link: "#",
  },
  {
    name: "Dell",
    logo: "/dell.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus dolor magna, eu scelerisque nibh lobortis consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris fringilla, ante sit amet congue auctor, sem nulla lobortis nibh, at finibus metus tellus ac felis. Maecenas vel nisi eget purus fringilla tincidunt. Aliquam erat volutpat. Vestibulum convallis ipsum sed nibh consequat porta. Nulla lobortis accumsan ex, eget pulvinar nunc congue sed.",
    details:
      "We leverage advanced analytics and AI-driven insights to transform your data into actionable intelligence.",
    link: "#",
  },
];

const CloudPartners = () => {
  const [activePartner, setActivePartner] = useState(partners[0]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Cloud Partnerships</h2>
      <p className={styles.description}>
      From hyperscalers to niche experts, Amlgo Labs' 360° partnerships power the development of comprehensive, innovative solutions. We co-create and cultivate deep vertical expertise to unlock extraordinary opportunities for our clients. 
      </p>
      <div className={styles.tabsContainer}>
        {partners.map((partner, index) => (
          <motion.button
            key={partner.name}
            className={`${styles.tab} ${
              activePartner.name === partner.name ? styles.activeTab : ""
            }`}
            onClick={() => setActivePartner(partner)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {partner.name}
          </motion.button>
        ))}
      </div>
      <motion.div
        className={styles.partnerDetails}
        key={activePartner.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.logoImage}>

        <Image
          height={250}
          width={250}
          src={activePartner.logo}
          alt={activePartner.name}
          className={styles.logo}
        />
        </div>
        <div className={styles.partnerInfo}>

        <h3 className={styles.partnerTitle}>{activePartner.name}</h3>
        <p className={styles.partnerDescription}>{activePartner.description}</p>
        {/* <p className={styles.partnerDetailsText}>{activePartner.details}</p> */}
        <a href={activePartner.link} className={styles.knowMore}>
          Know More →
        </a>
        </div>
      </motion.div>
    </div>
  );
};

export default CloudPartners;