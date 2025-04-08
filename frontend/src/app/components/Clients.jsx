import React from "react";
import styles from "../styles/Components/Clients.module.css";
import Image from "next/image";

const Clients = () => {
  return (
    <div className={styles.topCompaniesContainer}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          <span className={styles.company}>
            <Image src="/client1.png" height={100} width={256} alt="client 1" />
          </span>
          <span className={styles.company}>
            <Image src="/client2.png" height={100} width={256} alt="client 2" />
          </span>
          <span className={styles.company}>
            <Image src="/client3.png" height={100} width={256} alt="client 3" />
          </span>
          <span className={styles.company}>
            <Image src="/client4.png" height={100} width={256} alt="client 4" />
          </span>
          <span className={styles.company}>
            <Image src="/client5.png" height={100} width={256} alt="client 5" />
          </span>
          {/* <span className={styles.company}>
            <Image src="/client6.png" height={100} width={256} alt="client 6" />
          </span> */}
          <span className={styles.company}>
            <Image src="/client7.png" height={100} width={256} alt="client 7" />
          </span>
          <span className={styles.company}>
            <Image src="/client8.png" height={100} width={256} alt="client 8" />
          </span>
          <span className={styles.company}>
            <Image src="/client9.png" height={100} width={256} alt="client 9" />
          </span>
          <span className={styles.company}>
            <Image src="/client10.png" height={100} width={256} alt="client 10" />
          </span>
          <span className={styles.company}>
            <Image src="/client11.png" height={100} width={256} alt="client 11" />
          </span>
          {/* <span className={styles.company}>
            <Image src="/client12.png" height={100} width={256} alt="client 12" />
          </span> */}
          {/* <span className={styles.company}>
            <Image src="/client13.png" height={100} width={256} alt="client 13" />
          </span> */}
          <span className={styles.company}>
            <Image src="/client14.png" height={100} width={256} alt="client 14" />
          </span>

          {/* Duplicate the logos again for smooth scrolling */}
         
        </div>

        <div  className={styles.marquee}>
          <span className={styles.company}>
            <Image src="/client1.png" height={100} width={256} alt="client 1" />
          </span>
          <span className={styles.company}>
            <Image src="/client2.png" height={100} width={256} alt="client 2" />
          </span>
          <span className={styles.company}>
            <Image src="/client3.png" height={100} width={256} alt="client 3" />
          </span>
          <span className={styles.company}>
            <Image src="/client4.png" height={100} width={256} alt="client 4" />
          </span>
          <span className={styles.company}>
            <Image src="/client5.png" height={100} width={256} alt="client 5" />
          </span>
          {/* <span className={styles.company}>
            <Image src="/client6.png" height={100} width={256} alt="client 6" />
          </span> */}
          <span className={styles.company}>
            <Image src="/client7.png" height={100} width={256} alt="client 7" />
          </span>
          <span className={styles.company}>
            <Image src="/client8.png" height={100} width={256} alt="client 8" />
          </span>
          <span className={styles.company}>
            <Image src="/client9.png" height={100} width={256} alt="client 9" />
          </span>
          <span className={styles.company}>
            <Image src="/client10.png" height={100} width={256} alt="client 10" />
          </span>
          <span className={styles.company}>
            <Image src="/client11.png" height={100} width={256} alt="client 11" />
          </span>
          {/* <span className={styles.company}>
            <Image src="/client12.png" height={100} width={256} alt="client 12" />
          </span> */}
          {/* <span className={styles.company}>
            <Image src="/client13.png" height={100} width={256} alt="client 13" />
          </span> */}
          <span className={styles.company}>
            <Image src="/client14.png" height={100} width={256} alt="client 14" />
          </span>

          {/* Duplicate the logos again for smooth scrolling */}
         
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
