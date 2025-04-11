import React from 'react';
import styles from "../styles/pages/Contact-Us/Locations.module.css";
import Image from 'next/image';

const Locations = () => {
  const locations = [
    {
      id: 1,
      title: "Amlgo Labs - Gurugram",
      address: "DLF Forum, WeWork Building, DLF Cyber City, DLF Phase 3, Gurugram, Haryana, 122002",
      image: "/contactus/india.png"
    },
    {
      id: 2,
      title: "Amlgo Labs - Gurugram",
      address: "813, Level 8, Tower B4, Spaze iTech Park, Sohna Road, Sector-49, Gurugram, Haryana, 122001",
      image: "/contactus/india.png"
    },
    {
        id: 3,
        title: "Amlgo Labs - USA",
        address: "Amlgo Labs Inc, 16192, Coastal Highway, Lewes, Delaware, 19958",
        image: "/contactus/usa.png"
      },

      {
        id: 4,
        title: "Amlgo Labs - UK",
        address: "15 Bishopsgate, London EC2N 3AR, UK",
        image: "/contactus/uk.png"
      },

      {
        id: 5,
        title: "Amlgo Labs - Singapore",
        address: "380, Jalan Besar, Singapore 209000",
        image: "/contactus/singapore.png"
      },

      {
        id: 6,
        title: "Amlgo Labs - Bengaluru",
        address: "C-401, ITPL Main Road, Whitefield, Bengaluru, Karnataka, 560037",
        image: "/contactus/india.png"
      },
    // Add more locations as needed
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.heading}>
          <h2>Our Locations</h2>
        </div>

        <div className={styles.locationsGrid}>
          {locations.map((location) => (
            <div key={location.id} className={styles.locationCard}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={location.image} 
                  height={80} 
                  width={80} 
                  alt={`${location.title} location`}
                  className={styles.locationImage}
                />
              </div>
              <div className={styles.addressWrapper}>
                <h3>{location.title}</h3>
                <p>{location.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;