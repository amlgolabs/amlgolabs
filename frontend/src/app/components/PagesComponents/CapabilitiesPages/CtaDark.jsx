"use client"
import React from "react";
import styles from "../../../styles/pages/Components/CapabilitiesPages/CtaDark.module.css";
import Link from "next/link";
import { useContactPopup } from "@/app/context/ContactPopupContext";

const CtaDark = ({ title, buttonText, link }) => {
  const {openContactPopup} = useContactPopup();
  return (
    <div className={styles.heroContainer}>
      <div className={styles.content}>
        <h1>{title}</h1>
        {/* <Link href={link}> */}
          <button onClick={openContactPopup} className={styles.ctaButton}>
            {buttonText} <span>→</span>
          </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default CtaDark;
