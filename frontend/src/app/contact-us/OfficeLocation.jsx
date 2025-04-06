"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import styles from "../styles/pages/Contact-Us/OfficeLocation.module.css";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

const OfficeLocationMap = () => {
  const mapContainerRef = useRef(null);

  const officeLocations = [
    { name: "Amlgo Labs - Gurugram", coordinates: [28.41261, 77.04387] },
    { name: "Amlgo Labs - USA", coordinates: [38.76534122296806, -75.21165742024036] },
    { name: "Amlgo Labs - UK", coordinates: [51.514911651746324, 0.08345685092416326] },
    { name: "Amlgo Labs - Singapore", coordinates: [1.3134166792877073, 103.86026343558227] },
    { name: "Amlgo Labs - Gurugram", coordinates: [28.497042465254584, 77.09231656051129] },
    { name: "Amlgo Labs - Bengaluru", coordinates: [12.991935389689, 77.71567244907585] },
  ];

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: "https://api.maptiler.com/maps/outdoor-v2/style.json?key=PMmkWHA99RfdDnRDuM9Y",
      center: officeLocations[0].coordinates,
      zoom: 1,
    });

    officeLocations.forEach((office) => {
      new maplibregl.Marker({ color: "#FF5733" })
        .setLngLat([office.coordinates[1], office.coordinates[0]])
        .setPopup(new maplibregl.Popup().setText(office.name))
        .addTo(map);
    });

    return () => map.remove();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>

      <div ref={mapContainerRef} className={styles.mapContainer} />

      {/* Contact Information */}
      <div className={styles.contactInfo}>
        <p>
          Email:{" "}
          <a href="mailto:contact@amlgolabs.com">info@amlgolabs.com</a>
        </p>
        {/* <p>
          Contact No:{" "}
          <a href="tel:+911234567890">+91 123 456 7890</a>
        </p> */}

        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/company/amlgolabs" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/AmlgoLabs" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://www.facebook.com/AmlgoLabs/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>
      </div>

          <div className={styles.locationContainer}>
            <div className={styles.heading}>
              <h3>Our Locations</h3>
            </div>

            <div className={styles.locationDiv}>
              <div className={styles.icon}>
                <Image src="/location.png" alt="icon" height={30} width={30}/>
              </div>
              <div>
                <h4>Amlgo Labs - Gurugram(INDIA) - 1</h4>
                <p>DLF Forum, WeWork Building, DLF Cyber City, DLF Phase 3, Gurugram, Haryana, 122002</p>
              </div>
            </div>
            <div className={styles.locationDiv}>
              <div className={styles.icon}>
                <Image src="/location.png" alt="icon" height={50} width={50}/>
              </div>
              <div>
                <h4>Amlgo Labs - Gurugram(INDIA)- 2</h4>
                <p>813, Level 8, Tower B4, Spaze iTech Park, Sohna Road, Sector-49, Gurugram, Haryana, 122001</p>
              </div>
            </div>
            <div className={styles.locationDiv}>
              <div className={styles.icon}>
                <Image src="/location.png" alt="icon" height={50} width={50}/>
              </div>
              <div>
                <h4>Amlgo Labs - USA</h4>
                <p>Amlgo Labs Inc, 16192, Coastal Highway, Lewes, Delaware, 19958</p>
              </div>
            </div>
            <div className={styles.locationDiv}>
              <div className={styles.icon}>
                <Image src="/location.png" alt="icon" height={50} width={50}/>
              </div>
              <div>
                <h4>Amlgo Labs - United Kingdom</h4>
                <p>15 Bishopsgate, London EC2N 3AR, UK</p>
              </div>
            </div>
            <div className={styles.locationDiv}>
              <div className={styles.icon}>
                <Image src="/location.png" alt="icon" height={50} width={50}/>
              </div>
              <div>
                <h4>Amlgo Labs - Singapore</h4>
                <p>380, Jalan Besar, Singapore 209000</p>
              </div>
            </div>
            <div className={styles.locationDiv}>
              <div className={styles.icon}>
                <Image src="/location.png" alt="icon" height={50} width={50}/>
              </div>
              <div>
                <h4>Amlgo Labs - Bengaluru</h4>
                <p>C-401, ITPL Main Road, Whitefield, Bengaluru, Karnataka, 560037</p>
              </div>
            </div>
          </div>
    </div>
  );
};

export default OfficeLocationMap;
