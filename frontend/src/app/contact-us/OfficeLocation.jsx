"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import styles from "../styles/pages/Contact-Us/OfficeLocation.module.css";

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
      <div ref={mapContainerRef} className={styles.mapContainer} />

      {/* Contact Information */}
      <div className={styles.contactInfo}>
        <p>
          Email:{" "}
          <a href="mailto:contact@amlgolabs.com">contact@amlgolabs.com</a>
        </p>
        {/* <p>
          Contact No:{" "}
          <a href="tel:+911234567890">+91 123 456 7890</a>
        </p> */}

        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/company/amlgo-labs" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/amlgolabs" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/amlgolabs" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocationMap;
