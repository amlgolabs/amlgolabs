import React from "react";
import styles from "../styles/Components/Clients.module.css";
import Image from "next/image";

const Clients = () => {
  const companies = [
    "/client1.png",
    "/client2.png",
    "/client3.png",
    "/client4.png",
    "/client5.png",
    "/client6.png",
    "/client7.png",
    "/client8.png",
    "/client9.png",
    "/client10.png",
    "/client11.png",
    "/client12.png",
    "/client13.png",
    "/client14.png",
  ];

  return (
    <div className={styles.topCompaniesContainer}>
      {/* <h2 className={styles.heading}>
        Trusted by <span>innovators</span> in tech, AI, and data.
      </h2> */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          {/* Render logos twice for seamless scrolling */}
          {companies.concat(companies).map((src, index) => (
            <span className={styles.company} key={index}>
              <Image
                src={src}
                height={100}
                width={256}
                alt={`client ${index + 1}`}
              />
            </span>
          ))}
        </div>
      </div>

      <div className={styles.testimonialContainer}>
          <div className={styles.testimonial}>
            <p>"Amlgo Labs transformed our approach to data with their AI-driven solutions. Their expertise in Generative AI and analytics unlocked actionable insights, driving efficiency and smarter decision-making. A trusted partner for data-driven success!"
            </p>
            <h3>VP, Strategic Partnerships, Automobile Industry</h3>
          </div>
          <div className={styles.testimonial}>
          <p>"With Amlgo Labs, we harnessed the power of AI and predictive analytics to optimize strategies and boost ROI. Their innovative solutions and focus on data excellence set them apart in the tech landscape."</p>
          <h3>Head of a Leading AI Innovation Center</h3>
          </div>
      </div>
    </div>
  );
};

export default Clients;
