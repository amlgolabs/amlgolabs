"use client";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/pages/Components/CapabilitiesPages/PartnersSection.module.css";
import Link from "next/link";
import Image from "next/image";

const PartnersSection = () => {
  const partnerLogos = [
    "/aws.png",
    "/azure.png",
    "/dell.png",
    "/databricks.png",
    "/googlecloud.png",
    "/cloudera.png",
  ];

  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentLogoIndex((prev) => (prev + 1) % partnerLogos.length);
        setFade(true);
      }, 600);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        {/* Left Section */}
        <div className={styles.content}>
          <h4>PARTNERSHIPS</h4>
          <h2>Empowering Innovation Through Strategic Alliances</h2>
          <p>
            We collaborate with industry leaders to bring cutting-edge technology
            and solutions to our clients, ensuring excellence and innovation in every project.
          </p>
          <Link href="/partners">
            <button className="globalButton">Explore More</button>
          </Link>
        </div>

        {/* Right Section */}
        <div className={styles.imageWrapper}>
          <div className={styles.logoContainer}>
            <div className={styles.logoWrapper}>
              <Image
                height={200}
                width={200}
                src="/logo/logo500x500.png"
                alt="Amlgo Labs Logo"
                className={styles.companyLogo}
              />
            </div>
            <Image
              height={60}
              width={60}
              src="/handshake.png"
              alt="Partnership Sign"
              className={styles.crossSign}
            />
            <div className={styles.logoWrapper}>
              <Image
                height={200}
                width={200}
                src={partnerLogos[currentLogoIndex]}
                alt="Partner Logo"
                className={`${styles.partnerLogo} ${fade ? styles.fadeIn : styles.fadeOut}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;