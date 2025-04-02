import React from "react";
import Image from "next/image";
import styles from "../../../styles/pages/Components/AboutUs/AboutUs.module.css";
import Link from "next/link";

const AboutUsHero = () => {
  return (
    <section className={styles.heroSection}>
       
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>
            Transforming <span>Data</span> into <span>Intelligence</span>
          </h1>
          <p className={styles.description}>
            Amlgo Labs specializes in <strong>Data Analytics, Machine Learning, and Generative AI</strong>,
            helping businesses unlock actionable insights and drive AI-powered automation. With expertise in
            predictive analytics, big data, and cloud-native solutions, we build scalable, secure, and
            high-performance AI models.
          </p>
          <Link href="/contact-us">
          <button className={styles.ctaButton}>Get in Touch</button>
          </Link>
        </div>

        {/* Right Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/about-us/overview.png"
            alt="AI & Data Analytics"
            width={600}
            height={450}
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
