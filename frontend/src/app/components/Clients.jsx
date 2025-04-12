"use client";
import React from "react";
import styles from "../styles/Components/Clients.module.css";
import Image from "next/image";

const Clients = () => {
  const clients = [
    { src: "/client1.png", alt: "client 1" },
    { src: "/client2.png", alt: "client 2" },
    { src: "/client3.png", alt: "client 3" },
    { src: "/client4.png", alt: "client 4" },
    { src: "/client5.png", alt: "client 5" },
    { src: "/client7.png", alt: "client 7" },
    { src: "/client8.png", alt: "client 8" },
    { src: "/client9.png", alt: "client 9" },
    { src: "/client10.png", alt: "client 10" },
    { src: "/client11.png", alt: "client 11" },
    { src: "/client14.png", alt: "client 14" },
  ];

  return (
    <div className={styles.topCompaniesContainer}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          {clients.map((client, index) => (
            <span key={`client-${index}`} className={styles.company}>
              <Image
                src={client.src}
                height={100}
                width={256}
                alt={client.alt}
                style={{ objectFit: "contain" }}
              />
            </span>
          ))}
        </div>
        {/* Duplicate for seamless looping */}
        <div className={styles.marquee}>
          {clients.map((client, index) => (
            <span key={`client-duplicate-${index}`} className={styles.company}>
              <Image
                src={client.src}
                height={100}
                width={256}
                alt={client.alt}
                style={{ objectFit: "contain" }}
              />
            </span>
          ))}
        </div>
      </div>

      <div className={styles.testimonialContainer}>
        <div className={styles.testimonial}>
          <p>
            "Amlgo Labs transformed our approach to data with their AI-driven
            solutions. Their expertise in Generative AI and analytics unlocked
            actionable insights, driving efficiency and smarter decision-making.
            A trusted partner for data-driven success!"
          </p>
          <h3>VP, Strategic Partnerships, Automobile Industry</h3>
        </div>
        <div className={styles.testimonial}>
          <p>
            "With Amlgo Labs, we harnessed the power of AI and predictive
            analytics to optimize strategies and boost ROI. Their innovative
            solutions and focus on data excellence set them apart in the tech
            landscape."
          </p>
          <h3>Head of a Leading AI Innovation Center</h3>
        </div>
      </div>
    </div>
  );
};

export default Clients;