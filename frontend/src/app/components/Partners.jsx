import React from "react";
import styles from "../styles/Components/Partners.module.css";
import Image from "next/image";

const Partners = () => {
  const partners = [
    { id: 1, src: "/aws.png", name: "Partner 1" },
    { id: 2, src: "/azure.png", name: "Partner 2" },
    { id: 3, src: "/databricks.png", name: "Partner 3" },
    { id: 4, src: "/dell.png", name: "Partner 4" },
    { id: 5, src: "/googlecloud.png", name: "Partner 5" },
    { id: 6, src: "/cloudera.png", name: "Partner 6" },
    // { id: 6, src: "/partner6.png", name: "Partner 6" },
  ];

  return (
    <div className={styles.partnersContainer}>
        <div className={styles.innerContainer}> 

      <div className={styles.heading}>
        <h2>
        Collaborating with Industry Leaders in  <span>AI and Data Solutions</span>
        </h2>
      </div>
      <div className={styles.techGrid}>
        {partners.map((partner) => (
          <div className={styles.techCard} key={partner.id}>
            <Image
              src={partner.src}
              alt={partner.name}
              width={500}
              height={500}
              className={styles.partnerImage}
            />
          </div>
        ))}
      </div>
      </div>

    </div>
  );
};

export default Partners;
