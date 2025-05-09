import React from "react";
import styles from "../styles/Components/Partners.module.css";
import Image from "next/image";
import Link from "next/link";

const Partners = () => {
  const partners = [
    {
      id: 1,
      src: "/aws.png",
      name: "Partner 1",
      link: "/partners/amazon-web-services"
    },
    {
      id: 2,
      src: "/azure.png",
      name: "Partner 2",
      link: "/partners/microsoft-azure"
    },
    {
      id: 3,
      src: "/databricks.png",
      name: "Partner 3",
      link: "/partners/databricks"
    },
    {
      id: 4, src: "/dell.png", name: "Partner 4",
      link: "/partners/dell-technologies"
    },
    { id: 5, src: "/googlecloud.png", name: "Partner 5", link: "partners/google-cloud" },
    { id: 6, src: "/cloudera.png", name: "Partner 6", link: "partners/cloudera" },
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
            <Link href={partner.link} key={partner.id}>
              <div className={styles.techCard} key={partner.id}>
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={500}
                  height={500}
                  className={styles.partnerImage}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Partners;
